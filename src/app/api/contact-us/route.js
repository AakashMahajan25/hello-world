import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import { verifyToken } from '@/utils/authUtils';

const uri = process.env.MONGODB_URI;

export async function POST(request) {
    try {       
        
        // Parse the request body
        const { name, email, phone, message, subject } = await request.json();

        // Validate required fields
        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: 'Name, email and phone number are required' },
                { status: 400 }
            );
        }

        // Create IST timestamp
        const istTime = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Kolkata'
        });

        // Prepare contact data
        const contactData = {
            name,
            email,
            phoneNumber:phone,
            subject,
            message: message || '', // Make message optional with empty string default
            timestamp: istTime,
            createdAt: new Date()
        };

        // Connect to MongoDB
        const client = await MongoClient.connect(uri);
        const db = client.db('camio-ppf');
        if (db) {
            console.log("Database connected");
        }
        
        // Insert data
        await db.collection('contacts').insertOne(contactData);
        
        // Close connection
        await client.close();

        return NextResponse.json(
            { message: 'Contact form submitted successfully' },
            { 
                status: 201,
                
            }
        );

    } catch (error) {
        console.error('Contact form submission error:', error);
        return NextResponse.json(
            { error: 'Failed to submit contact form' },
            { status: 500 }
        );
    }
}

export async function GET(request) {
    try {
        // Verify token
        verifyToken(request);

        // Connect to MongoDB
        const client = await MongoClient.connect(uri);
        const db = client.db('camio-ppf');
        
        // Get all contacts
        const contacts = await db.collection('contacts').find({}).toArray();
        
        // Close connection
        await client.close();

        return NextResponse.json(contacts, { status: 200 });

    } catch (error) {
        if (error.message === 'No token provided' || error.message === 'Invalid token') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        console.error('Error fetching contacts:', error);
        return NextResponse.json(
            { error: 'Failed to fetch contacts' },
            { status: 500 }
        );
    }
}
