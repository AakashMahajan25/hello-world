import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";
import { verifyToken } from "@/utils/authUtils";

import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dk2hrfx7c',
  api_key: '627415885592457',
  api_secret: 'Qlqgq-kNXnyQVcAdZC4djKlDvEM'
});

const uri = process.env.MONGODB_URI;

export async function DELETE(request) {
  let client;

  try {
    // Verify token first
    verifyToken(request);

    // Get warrantyId from query params
    const { searchParams } = new URL(request.url);
    const warrantyId = searchParams.get("warrantyId");

    if (!warrantyId) {
      return NextResponse.json(
        { error: "Warranty ID is required" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    client = await MongoClient.connect(uri);
    const db = client.db("camio-ppf");

    // Fetch warranty document first to get image references
    const warranty = await db.collection("warranties").findOne({ _id: new ObjectId(warrantyId) });
    
    if (!warranty) {
      return NextResponse.json(
        { error: "Warranty not found" },
        { status: 404 }
      );
    }

    // Helper function to extract public ID from Cloudinary URL
    const getPublicIdFromUrl = (url) => {
      if (!url) return null;
    
      // Extract the part after "/upload/" and remove file extension
      const matches = url.match(/\/upload\/(?:v\d+\/)?(.+)(?:\.[^.]+)?$/);
      
      return matches ? matches[1] : null;
    };
    
    // Helper function to delete a file from Cloudinary
    const deleteFromCloudinary = async (publicId) => {
      if (!publicId) return null;
      
      try {
        console.log("Attempting to delete image with public ID:", publicId);
        const response = await cloudinary.uploader.destroy(publicId, { resource_type: "image" });
        console.log("File deletion response:", response);
        return response;
      } catch (error) {
        console.error("Error deleting file from Cloudinary:", error);
        return null;
      }
    };
    
    // Delete car image if exists
    if (warranty.carImageUrl) {
      const carImagePublicId = warranty.carImagePublicId || getPublicIdFromUrl(warranty.carImageUrl);
      if (carImagePublicId) {
        await deleteFromCloudinary(carImagePublicId);
      }
    }

    // Delete RC image if exists
    if (warranty.rcImage) {
      const rcImagePublicId = warranty.rcImagePublicId || getPublicIdFromUrl(warranty.rcImage);
      if (rcImagePublicId) {
        await deleteFromCloudinary(rcImagePublicId);
      }
    }

    // Delete warranty document
    const result = await db
      .collection("warranties")
      .deleteOne({ _id: new ObjectId(warrantyId) });

    return NextResponse.json({
      success: true,
      message: "Warranty and associated images deleted successfully",
    });
  } catch (error) {
    if (
      error.message === "No token provided" ||
      error.message === "Invalid token"
    ) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    console.error("Error deleting warranty:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to delete warranty",
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.close();
      console.log("MongoDB connection closed");
    }
  }
}