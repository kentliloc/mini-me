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
      subject: 'MedExpress Urgent Care - Contact Us form',
      text: `Reason: ${reason}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <p><strong>Reason:</strong> ${reason}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong> ${message}</p>
      `
    }

    await transporter.sendMail(mailOptions)

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(JSON.stringify({ message: 'Error sending email' }), { status: 500 })
  }
}
