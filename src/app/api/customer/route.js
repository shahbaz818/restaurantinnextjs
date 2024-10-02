import { NextResponse } from 'next/server';
import connectDb from '../../../lib/connectDB';
import Customer from '../../../lib/customer';

connectDb()
export async function GET(req) {
    try {
        const customerId = req.nextUrl.searchParams.get("id");

        if (customerId) {
            const customer = await Customer.findById(customerId);

            if (!customer) {
                return NextResponse.json({ error: 'customer not found' }, { status: 404 });
            }

            return NextResponse.json(customer);
        } else {
            const customers = await Customer.find({});
            return NextResponse.json(customers);
        }
    } catch (error) {
        console.error('Error fetching customer data:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const body = await req.json()
        const newCustomer = new Customer(body)
        await newCustomer.save()
        return new NextResponse(JSON.stringify({ message: 'Customer Added Successfully' }), { status: 201 })

    } catch (err) {
        console.log(err)

    }

}