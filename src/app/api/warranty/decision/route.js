import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { verifyToken } from '@/utils/authUtils';

const uri = process.env.MONGODB_URI;

export async function PUT(request) {
  let client;
  
  try {
    // Verify token first
    verifyToken(request);

    // Get request body
    const body = await request.json();
    const { warrantyId, status } = body;

    // Validate status
    const validStatuses = ['PENDING', 'APPROVED', 'REJECTED'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { 
          success: false,
          error: "Invalid status value. Must be PENDING, APPROVED, or REJECTED" 
        },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    client = await MongoClient.connect(uri);
    const db = client.db("camio-ppf");

    // Update warranty status
    const result = await db.collection("warranties").updateOne(
      { warrantyId },
      { $set: { status } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { 
          success: false,
          error: "Warranty not found" 
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Warranty status updated to ${status}`
    });

  } catch (error) {
    if (error.message === 'No token provided' || error.message === 'Invalid token') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error("Error updating warranty status:", error);
    return NextResponse.json(
      { 
        success: false,
        error: "Failed to update warranty status" 
      },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
}
