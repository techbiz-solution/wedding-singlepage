import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    const { name, guestCount, timestamp, source, guestSide } = await request.json();

    // Validate required fields
    if (!name || !guestCount) {
      return NextResponse.json(
        { success: false, error: 'Name and guest count are required' },
        { status: 400 }
      );
    }

    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: 'service_account',
        project_id: process.env.GOOGLE_SHEETS_PROJECT_ID,
        private_key_id: process.env.GOOGLE_SHEETS_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_SHEETS_CLIENT_ID,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare the data for Google Sheets
    const values = [
      [
        timestamp,
        name,
        guestCount,
        guestSide,
        source,
        new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
      ]
    ];

    // Append data to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: `${process.env.GOOGLE_SHEETS_SHEET_NAME}!A:F`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    console.log('Data appended successfully:', response.data);

    return NextResponse.json({
      success: true,
      message: 'RSVP submitted successfully',
      updatedRange: response.data.updates?.updatedRange,
    });

  } catch (error) {
    console.error('Error submitting RSVP:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to submit RSVP. Please try again.' 
      },
      { status: 500 }
    );
  }
} 