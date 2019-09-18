<template>
  <Layout>
    <h1>{{ page.title }}</h1>
    <h1>Here might be a page title</h1>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </Layout>
</template>

<script>
import Layout from './Layout.vue'
import page from '@/pages/home/home.yml'
import features from '@/pages/home/features.yml'

export default {
  components: { Layout },
  data() {
    return {
      page,
      features
    }
  }
}
</script>