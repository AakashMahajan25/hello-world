import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { VALID_TOKEN } from '@/utils/authUtils';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

export async function POST(request) {
  let client;
  
  try {
    const uri = process.env.MONGODB_URI;
    console.log('Attempting to connect to MongoDB...'); // Debug log
    
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

    // Handle image separately if needed
    const carImage = formData.get('carImage');
    if (carImage) {
      warrantyData.carImage = carImage;
    }

    // Log database operation
    console.log('Attempting to save warranty data...');

    const db = client.db("camio-ppf");
    const warrantyCollection = db.collection('warranties');

    // Insert into database
    const result = await warrantyCollection.insertOne(warrantyData);
    
    console.log('Warranty registered with ID:', result.insertedId);

    // Add token to response
    const headers = {
      'Authorization': `Bearer ${VALID_TOKEN}`
    };

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