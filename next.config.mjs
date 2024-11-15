/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/login",
                destination: "/api/auth/signin"
            }
        ]
    }
};

export default nextConfig;
