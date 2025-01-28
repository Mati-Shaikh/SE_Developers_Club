/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Allow Cloudinary as an image source
  },
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/api/auth/signin",
      },
    ];
  },
};

export default nextConfig;
