import connectDb from '../../../../lib/connectDB';
import User from '@/lib/userModel';
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
connectDb()

export async function POST(req) {
    try {
        const body = await req.json()
        const { email, password } = body

        const user = await User.findOne({ email })

        if (!user) {
            return NextResponse.json({ message: "User not exist" }, { status: 400 })
        }

        const validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword) {
            return NextResponse.json({ message: "Check Your Credintials" }, { status: 400 })
        }

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email

        }

        var token = jwt.sign(tokenData, "shahbaz123456", { expiresIn: '1d' });

        const response = NextResponse.json({
            message: "Login Successfull",
            success: true
        })

        response.cookies.set("token", token), {
            httpOnly: true
        }

        return response

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }

}