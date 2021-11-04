import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import en from './en.json'
const app = createApp(App)
app.use(createI18n({
    legacy: false,
    fallbackLocale: 'en',
    fallbackFormat: true,
    messages: {
        en
    }
}))

app.mount('#app')
