/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: {
			bodySizeLimit: '2mb'
		},
	},
	output: 'standalone',
	swcMinify: true,
};

module.exports = nextConfig;
