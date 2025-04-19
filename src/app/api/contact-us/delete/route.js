import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";
import { verifyToken } from '@/utils/authUtils';

const uri = process.env.MONGODB_URI;

export async function DELETE(request) {
  let client;
  
  try {
    // Verify token first
    verifyToken(request);

    // Get contactId from query params
    const { searchParams } = new URL(request.url);
    const contactId = searchParams.get('contactId');

    if (!contactId) {
      return NextResponse.json({ error: 'Contact ID is required' }, { status: 400 });
    }

    // Connect to MongoDB
    client = await MongoClient.connect(uri);
    const db = client.db("camio-ppf");

    // Delete contact document
    const result = await db
      .collection("contacts")
      .deleteOne({ _id: new ObjectId(contactId) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Contact deleted successfully'
    });

  } catch (error) {
    if (error.message === 'No token provided' || error.message === 'Invalid token') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error("Error deleting contact:", error);
    return NextResponse.json(
      { 
        success: false,
        error: "Failed to delete contact"
      },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
}
