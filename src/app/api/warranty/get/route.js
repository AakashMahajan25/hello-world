import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { verifyToken } from '@/utils/authUtils';

const uri = process.env.MONGODB_URI;

export async function GET(request) {
  let client;
  
  try {
    // Verify token first
    verifyToken(request);

    // Connect to MongoDB
    client = await MongoClient.connect(uri);
    const db = client.db("camio-ppf");

    // Get all warranties without pagination
    const warranties = await db
      .collection("warranties")
      .find({})
      .toArray();

    // Return all warranties
    return NextResponse.json({
      success: true,
      data: warranties
    });

  } catch (error) {
    if (error.message === 'No token provided' || error.message === 'Invalid token') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error("Error retrieving warranties:", error);
    return NextResponse.json(
      { 
        success: false,
        error: "Failed to retrieve warranties" 
      },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
}
