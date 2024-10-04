import User from '@/lib/userModel'
import bcrypt from 'bcrypt'
import nodemailer from 'nodemailer'

export const sendEmail = async({ email, emailType, userId }) => {
    try {
        const hashedToken = await bcrypt.hash(userId.toString(), 10)

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 3600000
            })
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now() + 3600000
            })

        }
        // Looking to send emails in production? Check out our Email API/SMTP product!
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "c3299be85e6493",
                pass: "fd48cf40aff9f6"
            }
        });

        const mailOptions = {
            from: 'shahbaz1990036@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify Your Email" : "RESET your password",
            html: `<p>Click <a href="http://localhost:3000/verifyemail?token=${hashedToken}">Here</a> to ${emailType === "VERIFY" ? "Verify Your Email" : "RESET your password"}
            or copy and paste your link to your browser
            <br> https://restaurantinnextjs.vercel.app/verifyemail?token=${hashedToken}
            </p>`,
        }

        const emailResponse = await transport.sendMail(mailOptions)
        return emailResponse

    } catch (error) {
        throw new error(error.message)
    }

}