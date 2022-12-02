/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	distDir: 'build',
	experimental: {
		images: {
			unoptimized: true,
		},
	},
};

module.exports = nextConfig;
