<template>
  <header class="header">
    <div class="header-inner">
      <NuxtLink to="/" class="brand">
        Student <span>Information</span>
      </NuxtLink>
      <nav class="nav">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/students">Students</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: var(--navy);
  border-bottom: 1px solid var(--gold);
}
.header-inner {
  max-width: 1080px;
  margin: 0 auto;
  padding: 1.1rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 2rem;
  justify-content: space-between;
  align-items: center;
}
.brand {
  font-family: var(--font-serif);
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--ivory);
  text-decoration: none;
}
.brand span {
  color: var(--gold);
  font-style: italic;
}
.nav {
  display: flex;
  gap: 2rem;
}
.nav a {
  padding: 0.3rem 0;
  border-bottom: 1px solid transparent;
  color: rgba(245, 245, 239, 0.75);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.2s, border-color 0.2s;
}
.nav a:hover {
  color: var(--ivory);
}
.nav a.router-link-exact-active {
  color: var(--gold);
  border-bottom-color: var(--gold);
}
</style>
