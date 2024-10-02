import connectDb from '../../../../lib/connectDB';
import User from '@/lib/userModel';
import { NextResponse } from "next/server";



connectDb()

export async function POST(req) {
    try {
        const body = await req.json()
        const { token } = body

        const user = await User.findOne({ verifyToken: token, verifyTokenExpiry: { $gt: Date.now() } })
        if (!user) {
            return NextResponse.json({ message: 'token is not valid' }, { status: 400 });
        }
        console.log(user)

        user.isVarified = true
        user.verifyToken = undefined
        user.verifyTokenExpiry = undefined

        await user.save()
        return NextResponse.json({ message: "Account is varified successfully" }, { status: 200 })


    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }



}