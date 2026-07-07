import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Injected at build time only: the dev server relies on inline scripts
// (react-refresh preamble, HMR client) that a CSP this strict would block.
// GitHub Pages cannot set response headers, so a meta tag is the only option.
const csp = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src https://fonts.gstatic.com",
  "img-src 'self' data:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ')

const injectCsp = {
  name: 'inject-csp-meta',
  apply: 'build',
  transformIndexHtml(html) {
    return {
      html,
      tags: [
        {
          tag: 'meta',
          attrs: { 'http-equiv': 'Content-Security-Policy', content: csp },
          injectTo: 'head-prepend',
        },
      ],
    }
  },
}

export default defineConfig({
  plugins: [react(), injectCsp],
  base: '/',
  server: {
    port: parseInt(process.env.PORT) || 5173,
    strictPort: false,
  },
})
