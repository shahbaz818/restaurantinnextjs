import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(req) {
    const path = req.nextUrl.pathname
    const isPublicPath = path === "/login" || path === "/signup" || path === "/verify"

    // const token = req.cookies.get("token") ? .value || "";
    const token = req.cookies.get("token") ? req.cookies.get("token").value : "";

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/', req.url))
    }
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', req.url))
    }


    //role based authentication

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/login',
        '/signup',
        '/verify',
        '/BookingTable',
        '/admin',
    ],
}