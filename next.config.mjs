/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.trakyadent.com.tr",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
}

export default nextConfig
