import { NextResponse } from "next/server";
import foodItems from "../../../../lib/foodItems";
import connectDb from "../../../../lib/connectDB";
connectDb()
export async function DELETE(req, content) {
    console.log(content)
    let id = content.params.id;
    const items = await foodItems.deleteOne({ _id: id })
    return NextResponse.json({ items, success: true, msg: "deleted" })
}