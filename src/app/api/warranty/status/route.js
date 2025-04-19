import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const warrantyId = searchParams.get('warrantyId');
  
  let client;

  try {
    client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db("camio-ppf");
    const warrantyCollection = db.collection('warranties');

    const warranty = await warrantyCollection.findOne({ warrantyId });

    if (!warranty) {
      return NextResponse.json(
        { success: false, message: 'Warranty not found' },
        { status: 404 }
      );
    }

    // Calculate warranty status
    const creationDate = new Date(warranty.createdAt);
    const currentDate = new Date();
    const expiryDate = new Date(creationDate.setFullYear(creationDate.getFullYear() + 5));
    
    const timeLeft = expiryDate - currentDate;
    const yearsLeft = Math.max(0, timeLeft / (1000 * 60 * 60 * 24 * 365.25));
    const isExpired = yearsLeft <= 0;

    return NextResponse.json({
      success: true,
      warranty: {
        ...warranty,
        expiryDate,
        yearsLeft: yearsLeft.toFixed(2),
        isExpired
      }
    });

  } catch (error) {
    console.error('Warranty status check error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch warranty details' },
      { status: 500 }
    );
  } finally {
    if (client) await client.close();
  }
} 