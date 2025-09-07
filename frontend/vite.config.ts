import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      // Allow Firebase Auth and Google OAuth to work properly
      'Content-Security-Policy': `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com https://www.gstatic.com https://securetoken.googleapis.com;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        font-src 'self' https://fonts.gstatic.com;
        img-src 'self' data: https:;
        connect-src 'self' https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://firestore.googleapis.com https://rewin-f4ca1-default-rtdb.firebaseio.com wss://rewin-f4ca1-default-rtdb.firebaseio.com;
        frame-src 'self' https://rewin-f4ca1.firebaseapp.com https://accounts.google.com;
      `.replace(/\s+/g, ' ').trim()
    }
  }
})
