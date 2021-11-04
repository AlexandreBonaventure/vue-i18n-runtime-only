import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import i18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'production',
  plugins: [
    vue(),
    i18n({
      include: 'src/en.json'
    }),
    {
      name: 'ensure vue i18n runtime for dev',
      config: (config) => {
        config.resolve = {
          alias: {
            'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
          }
        }
      }
    },
  ]
})
