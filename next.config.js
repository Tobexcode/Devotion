/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir:  true,
  },
    images: {
      domains: [
        'links.papareact.com',
        'i.imgur.com',
        'platform-lookaside.fbsbx.com',
        'firebasestorage.googleapis.com',
        'lh3.googleusercontent.com',
        'cdn.sanity.io'
      ]
    }
}

module.exports = nextConfig
