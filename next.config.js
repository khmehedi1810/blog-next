/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['https://flowbite.com']
    },
    async headers(){
        return[
            {source: '/:path*', headers: [{key: 'X-Frame-Options', value: 'DENY'}]}
        ]
    }
}

module.exports = nextConfig
