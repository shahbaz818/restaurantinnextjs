// pages/api/verify-captcha.js
export default async function handler(req, res) {
    const body = req.json()
    const { captcha } = body;

    const secretKey = process.env.RECAPTCHA_SECRET_KEY; // Store your secret key in an environment variable

    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            secret: secretKey,
            response: captcha,
        }),
    });

    const data = await response.json();

    if (data.success) {
        res.status(200).json({ success: true });
    } else {
        res.status(400).json({ success: false });
    }
}