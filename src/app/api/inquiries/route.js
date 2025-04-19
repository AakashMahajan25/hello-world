import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { verifyToken } from '@/utils/authUtils';

const uri = process.env.MONGODB_URI;

export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json();

    const { name, phone, purpose, email, location, businessName, businessType, inquiryMessage } = body;

    // Validate required fields
    if (!name?.trim() || !phone?.trim() || !purpose?.trim()) {
      return NextResponse.json(
        { error: "Name, phone, and purpose are required fields." },
        { status: 400 }
      );
    }

    // Create the data object to insert
    const formData = {
      name: name.trim(),
      phone: phone.trim(),
      purpose: purpose.trim(),
      email: email?.trim() || null,
      location: location?.trim() || null,
      businessName: businessName?.trim() || null,
      businessType: businessType?.trim() || null,
      inquiryMessage: inquiryMessage?.trim() || null,
      createdAt: new Date(),
    };

    // Connect to MongoDB
    const client = await MongoClient.connect(uri);
    const db = client.db("camio-ppf");

    // Insert data into the collection
    const result = await db.collection("inquiries").insertOne(formData);

    // Close the database connection
    client.close();

    // Add token to response
    // const headers = {
    //   'Authorization': `Bearer ${VALID_TOKEN}`
    // };

    return NextResponse.json(
      { message: "Inquiry submitted successfully!", inquiryId: result.insertedId },
      { 
        status: 201
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "An error occurred while submitting the inquiry." },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  let client;
  try {
    // Verify token
    verifyToken(request);

    // Connect to MongoDB
    client = await MongoClient.connect(uri);
    const db = client.db("camio-ppf");

    // Get all inquiries without pagination
    const inquiries = await db
      .collection("inquiries")
      .find({})
      .toArray();

    return NextResponse.json({
      success: true,
      data: inquiries
    });

  } catch (error) {
    if (error.message === 'No token provided' || error.message === 'Invalid token') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error("Error retrieving inquiries:", error);
    return NextResponse.json(
      { 
        success: false,
        error: "Failed to retrieve inquiries" 
      },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
}