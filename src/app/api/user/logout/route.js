import connectDb from '../../../../lib/connectDB'
import { NextResponse } from "next/server";


connectDb()

export async function GET(req) {
    try {
        const response = NextResponse.json({
            message: 'logout successfully',
            success: true
        })
        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0)
        })
        return response

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }


}