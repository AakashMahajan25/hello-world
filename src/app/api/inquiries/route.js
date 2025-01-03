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
    const headers = {
      'Authorization': `Bearer ${VALID_TOKEN}`
    };

    return NextResponse.json(
      { message: "Inquiry submitted successfully!", inquiryId: result.insertedId },
      { 
        status: 201,
        headers 
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
  try {
    // Verify token
    verifyToken(request);

    // Parse query parameters for pagination, sorting, and filtering
    const { search, page = 1, limit = 10, sortField = "createdAt", sortOrder = "desc" } = Object.fromEntries(new URL(request.url).searchParams);

    // Convert to appropriate data types
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);
    const sortOptions = { [sortField]: sortOrder === "asc" ? 1 : -1 };

    // Connect to MongoDB
    const client = await MongoClient.connect(uri);
    const db = client.db("camio-ppf");

    // Build the filter query
    const filter = search
      ? {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { phone: { $regex: search, $options: "i" } },
            { purpose: { $regex: search, $options: "i" } },
          ],
        }
      : {};

    // Retrieve total count for pagination
    const totalInquiries = await db.collection("inquiries").countDocuments(filter);

    // Retrieve paginated and sorted inquiries
    const inquiries = await db
      .collection("inquiries")
      .find(filter)
      .sort(sortOptions)
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize)
      .toArray();

    // Close the database connection
    client.close();

    // Return response with pagination metadata
    return NextResponse.json({
      total: totalInquiries,
      page: pageNumber,
      limit: pageSize,
      totalPages: Math.ceil(totalInquiries / pageSize),
      data: inquiries,
    });
  } catch (error) {
    if (error.message === 'No token provided' || error.message === 'Invalid token') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error("Error retrieving inquiries:", error);
    return NextResponse.json(
      { error: "An error occurred while retrieving inquiries." },
      { status: 500 }
    );
  }
}