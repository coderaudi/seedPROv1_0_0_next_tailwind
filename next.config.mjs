/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["upload.wikimedia.org"],
  },

  apiKey: "lM0CiIpRvIHdtxrdPwhFHkAS7BMQnXeXWKfqSUUIgau0vJUHxjIIa630qAbKMFhs",
  apiEndPoint: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-ecfqxqm/endpoint/data/v1'
};

export default nextConfig;
