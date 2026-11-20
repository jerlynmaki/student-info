<template>
  <NuxtLink v-if="to" :to="to" :class="classes">{{ label }}</NuxtLink>
  <button v-else :class="classes" type="button" @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label: string
    color?: 'navy' | 'gold' | 'outline'
    to?: string
  }>(),
  { color: 'navy', to: undefined }
)

defineEmits<{ (e: 'click'): void }>()

const classes = computed(() => ['btn', `btn-${props.color}`])
</script>

<style scoped>
.btn {
  display: inline-block;
  padding: 0.75rem 1.6rem;
  border: 1px solid transparent;
  border-radius: 2px;
  font-family: var(--font-sans);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;
}
.btn:hover {
  transform: translateY(-1px);
}
.btn:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 3px;
}

.btn-navy {
  background: var(--navy);
  border-color: var(--navy);
  color: var(--ivory);
}
.btn-navy:hover {
  background: var(--navy-soft);
  border-color: var(--navy-soft);
}

.btn-gold {
  background: var(--gold);
  border-color: var(--gold);
  color: var(--navy);
}
.btn-gold:hover {
  filter: brightness(1.07);
}

.btn-outline {
  background: transparent;
  border-color: var(--navy);
  color: var(--navy);
}
.btn-outline:hover {
  background: var(--navy);
  color: var(--ivory);
}
</style>
