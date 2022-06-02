interface IProps {
  request: Request;
}

export async function post({ request }: IProps) {
  const body = await request.json();
  const { name, email, message, gRecaptchaToken } = body;

  if (!name || !email || !message || !gRecaptchaToken) {
    return {
      status: 400,
      body: 'Invalid request. Required fields were missing',
    };
  }

  const recaptchaVerifyResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${
      import.meta.env.VITE_RECAPTCHA_SECRET_KEY
    }&response=${gRecaptchaToken}`,
    {
      method: 'POST',
    },
  );

  const json: {
    success: boolean;
    score: number;
  } = await recaptchaVerifyResponse.json();

  if (!json.success || json.score < 0.5) {
    return {
      status: 400,
      body: 'ReCAPTCHA failed. Please try again',
    };
  }

  return {
    status: 200,
    body: 'Success',
  };
}
