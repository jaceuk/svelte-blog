import nodemailer from 'nodemailer';

interface IProps {
  request: Request;
}

export async function post({ request }: IProps) {
  const formBody = await request.json();
  const { name, email, message } = formBody;

  let transporter;

  if (import.meta.env.VITE_SMTP_SECURE === true) {
    transporter = nodemailer.createTransport({
      host: import.meta.env.VITE_SMTP_HOST,
      port: import.meta.env.VITE_SMTP_PORT,
      auth: {
        user: import.meta.env.VITE_SMTP_USER,
        pass: import.meta.env.VITE_SMTP_PASS,
      },
      secure: true,
    });
  } else {
    transporter = nodemailer.createTransport({
      host: import.meta.env.VITE_SMTP_HOST,
      port: import.meta.env.VITE_SMTP_PORT,
      auth: {
        user: import.meta.env.VITE_SMTP_USER,
        pass: import.meta.env.VITE_SMTP_PASS,
      },
    });
  }

  const mailOptions = {
    from: email,
    to: 'info@jace.info',
    subject: `Contact form submission from ${name}`,
    html: `<p>You have a contact form submission</p>
      <p><strong>Email: </strong> ${email}</p>
      <p><strong>Message: </strong> ${message}</p>
    `,
  };

  try {
    const response = await transporter.sendMail(mailOptions);
    console.log(response);
    return {
      body: {
        status: 200,
        message: response.response,
      },
    };
  } catch (error) {
    return {
      body: {
        status: 500,
        message: `${error}`,
      },
    };
  }
}
