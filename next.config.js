/** @type {import('next').NextConfig} */

module.exports = {
    async redirects() {
        return [
            {
                source: '/.well-known/apple-app-site-association',
                destination: '/api/apple-app-site-association',
                permanent: true
            }
        ]
    }
}