<template>
  <div class="layout">
    <AppHeader />
    <main class="content">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 3rem 1.5rem 4rem;
}
</style>
