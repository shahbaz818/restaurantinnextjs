import { NextResponse } from "next/server";
import Customer from "../../../../lib/customer";
import connectDb from "../../../../lib/connectDB";
connectDb()
export async function DELETE(req, content) {
    console.log(content)
    let id = content.params.id;
    const customer = await Customer.deleteOne({ _id: id })
    return NextResponse.json({ customer, success: true, msg: "deleted" })
}