import { NextResponse } from 'next/server';
import connectDb from '../../../lib/connectDB';
import foodItem from '../../../lib/foodItems'

connectDb()
export async function GET(req) {
    try {
        const foodId = req.nextUrl.searchParams.get("id");

        if (foodId) {
            const item = await foodItem.findById(foodId);

            if (!item) {
                return NextResponse.json({ error: 'food not found' }, { status: 404 });
            }

            return NextResponse.json(item);
        } else {
            const items = await foodItem.find({});
            return NextResponse.json(items);
        }
    } catch (error) {
        console.error('Error fetching customer data:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const body = await req.json()
        const newFoodItem = new foodItem(body)
        await newFoodItem.save()
        return new NextResponse(JSON.stringify({ message: 'New Item Added Successfully' }), { status: 201 })

    } catch (err) {
        console.log(err)

    }

}