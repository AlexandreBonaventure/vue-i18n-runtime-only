<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const i18n = useI18n({ useScope: 'local' })
const foo = i18n.t('foo {bar}', { bar: 'test' })
// comment missing to make it work
const missing = i18n.t('missing interpolation {bar}', { bar: 'test' })
</script>

<template>
{{ foo }}
{{ missing }}
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
