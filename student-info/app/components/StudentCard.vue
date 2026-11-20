<template>
  <article class="student-card">
    <div class="avatar" aria-hidden="true">{{ initials }}</div>
    <h3>{{ name }}</h3>
    <p class="course">{{ course }}</p>
    <dl class="details">
      <div class="row">
        <dt>Student ID</dt>
        <dd>{{ studentId }}</dd>
      </div>
      <div class="row">
        <dt>Year Level</dt>
        <dd>Year {{ year }}</dd>
      </div>
      <div class="row">
        <dt>Email</dt>
        <dd>{{ email }}</dd>
      </div>
    </dl>
    <AppButton :label="`Contact ${firstName}`" :color="buttonColor" @click="contact" />
  </article>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string
    studentId: string
    course: string
    year: number
    email: string
    buttonColor?: 'navy' | 'gold' | 'outline'
  }>(),
  { buttonColor: 'navy' }
)

const parts = computed(() => props.name.trim().split(/\s+/))
const firstName = computed(() => parts.value[0])
const initials = computed(() => {
  const first = parts.value[0]?.[0] ?? ''
  const last = parts.value.length > 1 ? parts.value[parts.value.length - 1][0] : ''
  return (first + last).toUpperCase()
})

function contact() {
  window.location.href = `mailto:${props.email}`
}
</script>

<style scoped>
.student-card {
  background: #fff;
  border: 1px solid var(--line);
  border-top: 3px solid var(--gold);
  padding: 2.2rem 1.6rem 1.9rem;
  text-align: center;
  box-shadow: 0 10px 30px -20px rgba(31, 40, 57, 0.4);
  transition: transform 0.25s, box-shadow 0.25s;
}
.student-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 36px -20px rgba(31, 40, 57, 0.5);
}
.avatar {
  width: 78px;
  height: 78px;
  margin: 0 auto 1.1rem;
  border-radius: 50%;
  background: var(--navy);
  box-shadow: 0 0 0 3px #fff, 0 0 0 4px var(--gold);
  color: var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-serif);
  font-size: 1.9rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}
h3 {
  font-size: 1.65rem;
  line-height: 1.2;
}
.course {
  margin: 0.5rem 0 1.5rem;
  color: var(--gold-deep);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.details {
  margin: 0 0 1.75rem;
  text-align: left;
}
.row {
  padding: 0.7rem 0;
  border-top: 1px solid var(--line);
}
.row:last-child {
  border-bottom: 1px solid var(--line);
}
dt {
  color: var(--gold-deep);
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
dd {
  margin: 0.15rem 0 0;
  font-size: 0.92rem;
  overflow-wrap: anywhere;
}
</style>
