<template>
  <div>
    <h1 class="page-title">About</h1>
    <p class="page-lead">
      A small project that shows how component-based development avoids repeating the same HTML.
    </p>
    <div class="grid">
      <InfoCard
        title="Purpose"
        description="Build the layout once, then reuse it on every page instead of copying markup."
      />
      <InfoCard
        title="Components Used"
        description="AppHeader, AppFooter, StudentCard, InfoCard, and AppButton."
      />
    </div>
    <div class="actions">
      <AppButton label="Back Home" color="outline" to="/" />
      <AppButton label="See Students" color="navy" to="/students" />
    </div>
  </div>
</template>

<style scoped>
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}
</style>
