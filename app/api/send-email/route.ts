import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { reason, name, phone, email, message } = await req.json()

    const transporter = nodemailer.createTransport({
      service: 'Outlook365',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: `${process.env.EMAIL_RECEIVER}, ${process.env.EMAIL_RECEIVER2}, ${process.env.EMAIL_RECEIVER3}`,
        subject: 'Contact Us Form Submission',
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}\nReason: ${reason}`
      }

    await transporter.sendMail(mailOptions)

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(JSON.stringify({ message: 'Error sending email' }), { status: 500 })
  }
}
