import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { verifyToken } from '@/utils/authUtils';

const uri = process.env.MONGODB_URI;

export async function GET(request) {
  let client;
  
  try {
    // Verify token first
    verifyToken(request);

    // Parse query parameters for pagination, sorting, and filtering
    const { 
      search, 
      page = 1, 
      limit = 10, 
      sortField = "createdAt", 
      sortOrder = "desc",
      status
    } = Object.fromEntries(new URL(request.url).searchParams);

    // Convert to appropriate data types
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);
    const sortOptions = { [sortField]: sortOrder === "asc" ? 1 : -1 };

    // Connect to MongoDB
    client = await MongoClient.connect(uri);
    const db = client.db("camio-ppf");

    // Build the filter query
    let filter = {};

    if (search) {
      filter = {
        $or: [
          { customerName: { $regex: search, $options: "i" } },
          { phoneNumber: { $regex: search, $options: "i" } },
          { carNumber: { $regex: search, $options: "i" } },
          { warrantyId: { $regex: search, $options: "i" } },
          { detailerStudioName: { $regex: search, $options: "i" } },
        ],
      };
    }

    // Add status filter if provided
    if (status) {
      filter.status = status;
    }

    // Retrieve total count for pagination
    const totalWarranties = await db.collection("warranties").countDocuments(filter);

    // Retrieve paginated and sorted warranties
    const warranties = await db
      .collection("warranties")
      .find(filter)
      .sort(sortOptions)
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize)
      .toArray();

    // Return response with pagination metadata
    return NextResponse.json({
      total: totalWarranties,
      page: pageNumber,
      limit: pageSize,
      totalPages: Math.ceil(totalWarranties / pageSize),
      data: warranties,
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
