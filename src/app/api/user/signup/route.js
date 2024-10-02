import bcrypt from "bcrypt";
import connectDb from '../../../../lib/connectDB';
import User from '@/lib/userModel';
import { sendEmail } from '@/helpers/mailer';
import { NextResponse } from "next/server";


connectDb()

export async function POST(req) {
    try {
        const body = await req.json()
        const { username, email, password } = body

        if (username === "" || email === "" || password === "") {
            return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
        }

        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ message: "User already exist" }, { status: 400 })
        }
        const salt = 10;
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = await new User({ username, email, password: hashedPassword })
        const savedUser = await newUser.save()
        console.log(savedUser);

        await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id })
        return NextResponse.JSON({
            message: 'User created successfully',
            success: true,
            savedUser
        });

    } catch (error) {
        NextResponse.json({ error: error.message }, { status: 500 })

    }
}