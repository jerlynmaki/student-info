<template>
  <div class="info-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<style scoped>
.info-card {
  background: #fff;
  border: 1px solid var(--line);
  border-top: 3px solid var(--gold);
  padding: 1.6rem 1.5rem;
  box-shadow: 0 10px 30px -20px rgba(31, 40, 57, 0.35);
}
.info-card h3 {
  margin-bottom: 0.6rem;
  font-size: 1.5rem;
}
.info-card p {
  margin: 0;
  color: var(--navy-soft);
  font-size: 0.95rem;
}
</style>
