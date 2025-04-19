import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";
import { verifyToken } from '@/utils/authUtils';

const uri = process.env.MONGODB_URI;

export async function DELETE(request) {
  let client;
  
  try {
    // Verify token first
    verifyToken(request);

    // Get inquiryId from query params
    const { searchParams } = new URL(request.url);
    const inquiryId = searchParams.get('inquiryId');

    if (!inquiryId) {
      return NextResponse.json({ error: 'Inquiry ID is required' }, { status: 400 });
    }

    // Connect to MongoDB
    client = await MongoClient.connect(uri);
    const db = client.db("camio-ppf");

    // Delete inquiry document
    const result = await db
      .collection("inquiries")
      .deleteOne({ _id: new ObjectId(inquiryId) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Inquiry not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry deleted successfully'
    });

  } catch (error) {
    if (error.message === 'No token provided' || error.message === 'Invalid token') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error("Error deleting inquiry:", error);
    return NextResponse.json(
      { 
        success: false,
        error: "Failed to delete inquiry"
      },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
}
