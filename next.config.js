/** @type {import('next').NextConfig} */
const API_KEY = "b2a8e893d4881dd996f769d5fceb9d0f";

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      }
    ]
  },
  async rewrites() {
    return[
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ]
  }
}

module.exports = nextConfig
