/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "files.stripe.com",
			},
			{
				protocol: "http",
				hostname: "localhost",
			}
		],
	},

	experimental: {
		appDir: true,
	},
};
module.exports = nextConfig;