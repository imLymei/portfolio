/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['cdn.discordapp.com', 'github.com'],
	},
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.pdf$/i,
			type: 'asset/resource',
			generator: {
				filename: `[name][ext]`,
			},
		});

		return config;
	},
};

module.exports = nextConfig;
