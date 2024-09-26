import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Verbify',
    short_name: 'Verbify',
    description: 'Your best English app',
    start_url: '/',
    display: 'standalone',
    background_color: '#1e1e1e',
    theme_color: '#1e1e1e',
    icons: [
      {
        src: '/image/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/image/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}