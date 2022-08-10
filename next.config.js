/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        // ** https:// ** throws error
        domains: ['rickandmortyapi.com'],
        loader: 'custom',
        path: '/',
    },
};

module.exports = nextConfig;
