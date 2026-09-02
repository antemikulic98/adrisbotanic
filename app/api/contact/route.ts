import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Escape korisničkog unosa prije umetanja u HTML maila (sprječava HTML injection)
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Molimo ispunite sva obavezna polja.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { error: 'Unesite ispravnu email adresu.' },
        { status: 400 }
      );
    }

    const name = escapeHtml(String(body.name));
    const email = escapeHtml(String(body.email));
    const phone = body.phone ? escapeHtml(String(body.phone)) : '';
    const subject = escapeHtml(String(body.subject));
    const message = escapeHtml(String(body.message));

    // Create transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Adrisbotanic Web" <${process.env.GMAIL_USER}>`,
      to: 'info@adrisbotanic.com',
      replyTo: String(body.email),
      subject: `[Web Upit] ${String(body.subject)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #274223; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Nova poruka s weba</h1>
          </div>
          
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #274223; margin-top: 0;">Podaci o kontaktu</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold; width: 120px;">Ime:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
                  <a href="mailto:${email}" style="color: #274223;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Telefon:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
                  ${phone ? `<a href="tel:${phone}" style="color: #274223;">${phone}</a>` : 'Nije naveden'}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Predmet:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${subject}</td>
              </tr>
            </table>
            
            <h3 style="color: #274223; margin-top: 30px;">Poruka:</h3>
            <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="background-color: #274223; padding: 15px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 12px;">
              Ova poruka je poslana putem kontakt forme na adrisbotanic.com
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Poruka uspješno poslana!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Greška pri slanju poruke. Molimo pokušajte ponovno.' },
      { status: 500 }
    );
  }
}






