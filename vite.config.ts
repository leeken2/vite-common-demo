import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import {getAliases} from 'vite-aliases'

const aliases = getAliases({prefix:''})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve:{
    alias:[...aliases]
  }
})
