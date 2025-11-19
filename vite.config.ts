import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carrega variáveis de ambiente do sistema (como as do Vercel) e do .env
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Define process.env.API_KEY globalmente para que o código possa acessá-lo
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})