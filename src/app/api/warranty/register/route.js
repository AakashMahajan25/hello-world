import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { VALID_TOKEN } from '@/utils/authUtils';
import { v2 as cloudinary } from 'cloudinary';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dk2hrfx7c',
  api_key: '627415885592457',
  api_secret: 'Qlqgq-kNXnyQVcAdZC4djKlDvEM'
});

// Function to upload an image to Cloudinary
async function uploadToCloudinary(file) {
  try {
    // Convert form data file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Convert buffer to base64 string for Cloudinary
    const base64String = buffer.toString('base64');
    
    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        `data:${file.type};base64,${base64String}`,
        {
          folder: 'camio-ppf-warranties',
          resource_type: 'auto',
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
    });
    
    return {
      url: result.secure_url,
      publicId: result.public_id
    };
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
}

export async function POST(request) {
  let client;
  
  try {
    const uri = process.env.MONGODB_URI;
    console.log('Attempting to connect to MongoDB...'); 
    
    // Add connection options
    client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    
    console.log('Connected to MongoDB successfully');
    
    const formData = await request.formData();
    
    // Extract data from formData
    const warrantyData = {
      customerName: formData.get('customerName'),
      phoneNumber: formData.get('phoneNumber'),
      carNumber: formData.get('carNumber'),
      chassisNumber: formData.get('chassisNumber'),
      camioRollCode: formData.get('camioRollCode'),
      ppfCategory: formData.get('ppfCategory'),
      detailerStudioName: formData.get('detailerStudioName'),
      detailerMobile: formData.get('detailerMobile'),
      location: formData.get('location'),
      message: formData.get('message'),
      warrantyId: 'WR' + Date.now(),
      createdAt: new Date(),
      status: 'pending'
    };

    // Handle image upload to Cloudinary
    const carImage = formData.get('carImage');
    if (carImage) {
      console.log('Uploading image to Cloudinary...');
      const imageData = await uploadToCloudinary(carImage);
      warrantyData.carImageUrl = imageData.url;
      warrantyData.carImagePublicId = imageData.publicId;
      console.log('Image uploaded successfully:', imageData.url);
    }

    const rcImage = formData.get('rcImage')

    if(rcImage){
      console.log('Uploading image to Cloudinary...');
      const imageData = await uploadToCloudinary(rcImage);
      warrantyData.rcImage = imageData.url;
      warrantyData.rcImagePublicId = imageData.publicId;
      console.log('Image uploaded successfully:', imageData.url);
    }
    // Log database operation
    console.log('Attempting to save warranty data...');

    const db = client.db("camio-ppf");
    const warrantyCollection = db.collection('warranties');

    // Check for duplicate roll code
    const existingRollCode = await warrantyCollection.findOne({
      camioRollCode: warrantyData.camioRollCode
    });

    if (existingRollCode) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'This roll code has already been registered',
          error: 'DUPLICATE_ROLL_CODE'
        },
        { status: 400 }
      );
    }

    // Check for recent customer registration (within 48 hours)
    const fortyEightHoursAgo = new Date(Date.now() - 48 * 60 * 60 * 1000);
    const recentCustomerRegistration = await warrantyCollection.findOne({
      phoneNumber: warrantyData.phoneNumber,
      createdAt: { $gte: fortyEightHoursAgo }
    });

    if (recentCustomerRegistration) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'You have already registered a warranty in the last 48 hours',
          error: 'RECENT_REGISTRATION'
        },
        { status: 400 }
      );
    }

    // Insert into database
    const result = await warrantyCollection.insertOne(warrantyData);
    
    console.log('Warranty registered with ID:', result.insertedId);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Warranty registration submitted successfully',
        warrantyId: warrantyData.warrantyId
      },
      { 
        status: 201,
        headers: {
          'Authorization': `Bearer ${VALID_TOKEN}`
        }
      }
    );

  } catch (error) {
    console.error('Detailed error:', {
      message: error.message,
      code: error.code,
      stack: error.stack
    });
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process warranty registration. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  } finally {
    if (client) {
      try {
        await client.close();
        console.log('MongoDB connection closed');
      } catch (error) {
        console.error('Error closing MongoDB connection:', error);
      }
    }
  }
}