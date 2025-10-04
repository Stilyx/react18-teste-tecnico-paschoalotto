import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'i.annihil.us',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'http',
				hostname: 'i.annihil.us',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
