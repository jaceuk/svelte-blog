import nodemailer from 'nodemailer';

interface IProps {
  request: Request;
}

export async function post({ request }: IProps) {
  const formBody = await request.json();
  const { name, email, message } = formBody;

  const transporter = nodemailer.createTransport({
    host: import.meta.env.VITE_SMTP_HOST,
    port: import.meta.env.VITE_SMTP_PORT,
    auth: {
      user: import.meta.env.VITE_SMTP_USER,
      pass: import.meta.env.VITE_SMTP_PASS,
    },
  });

  const mailData = {
    from: email,
    to: 'info@jace.info',
    subject: `Contact form submission from ${name}`,
    html: `<p>You have a contact form submission</p><br>
      <p><strong>Email: </strong> ${email}</p><br>
      <p><strong>Message: </strong> ${message}</p><br>
    `,
  };

  try {
    await transporter.sendMail(mailData);
    return {
      body: {
        status: 200,
        message: '',
      },
    };
  } catch (error: any) {
    return {
      body: {
        status: 500,
        message: error.response.body.errors,
      },
    };
  }
}
