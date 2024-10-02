/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
                protocol: "https",
                hostname: "t3.ftcdn.net"
            },
            {
                protocol: "https",
                hostname: "*.google.com"
            },
            {
                protocol: "https",
                hostname: "media.istockphoto.com"
            },
            {
                protocol: "https",
                hostname: "encrypted-tbn0.gstatic.com"
            },
            {
                protocol: "https",
                hostname: "img.freepik.com"
            },
            {
                protocol: "https",
                hostname: "www.shutterstock.com"
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com"
            },
            {
                protocol: "https",
                hostname: "recipe52.com"
            }
        ]
    },
    //for cors error handling
    async headers() {
        return [{
            // matching all API routes
            source: "/api/:path*",
            headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
        }]
    }
};

export default nextConfig;