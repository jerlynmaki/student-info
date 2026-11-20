<template>
  <footer class="footer">
    <p class="brand">Student <span>Information</span></p>
    <p class="copy">&copy; {{ year }} All rights reserved. Built with Nuxt.</p>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--navy);
  border-top: 1px solid var(--gold);
  padding: 2rem 1.5rem;
  text-align: center;
}
.footer p {
  margin: 0;
}
.brand {
  font-family: var(--font-serif);
  font-size: 1.3rem;
  color: var(--ivory);
}
.brand span {
  color: var(--gold);
  font-style: italic;
}
.copy {
  margin-top: 0.4rem !important;
  color: rgba(245, 245, 239, 0.6);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
}
</style>
