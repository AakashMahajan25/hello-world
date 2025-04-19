import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";
import { verifyToken } from '@/utils/authUtils';

const uri = process.env.MONGODB_URI;

export async function DELETE(request) {
  let client;
  
  try {
    // Verify token first
    verifyToken(request);

    // Get warrantyId from query params
    const { searchParams } = new URL(request.url);
    const warrantyId = searchParams.get('warrantyId');

    if (!warrantyId) {
      return NextResponse.json({ error: 'Warranty ID is required' }, { status: 400 });
    }

    // Connect to MongoDB
    client = await MongoClient.connect(uri);
    const db = client.db("camio-ppf");

    // Delete warranty document
    const result = await db
      .collection("warranties")
      .deleteOne({ _id: new ObjectId(warrantyId) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Warranty not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Warranty deleted successfully'
    });

  } catch (error) {
    if (error.message === 'No token provided' || error.message === 'Invalid token') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error("Error deleting warranty:", error);
    return NextResponse.json(
      { 
        success: false,
        error: "Failed to delete warranty"
      },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
}
