/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_ACCESS_KEY_ID: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
        NEXT_PUBLIC_SECRET_ACCESS_KEY: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
        NEXT_PUBLIC_REGION: process.env.NEXT_PUBLIC_REGION,
        NEXT_PUBLIC_S3_BUCKET_NAME: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
    },
    images: {
        domains: ['bc8-final-img.s3.ap-northeast-1.amazonaws.com'],
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.watchOptions = {
                poll: 1000,
                aggregateTimeout: 300,
            }
        }
        return config
    },
};

export default nextConfig;