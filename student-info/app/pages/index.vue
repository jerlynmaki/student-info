<template>
  <div>
    <section class="hero">
      <p class="eyebrow">Student Information</p>
      <h1>Meet Our Students</h1>
      <p class="lead">A simple website built with reusable Vue components and props.</p>
      <AppButton label="View Students" color="gold" to="/students" />
    </section>

    <div class="grid">
      <InfoCard
        title="Reusable Components"
        description="The header, footer, cards, and buttons are written once and used on every page."
      />
      <InfoCard
        title="Props"
        description="Data such as names, courses, and button colors is passed into components through props."
      />
      <InfoCard
        title="Consistent Layout"
        description="A shared layout renders the same header and footer across all pages."
      />
    </div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  margin-bottom: 3rem;
  padding: 4.5rem 2rem;
  background: var(--navy);
  color: var(--ivory);
  text-align: center;
}
.hero::before {
  content: '';
  position: absolute;
  inset: 12px;
  border: 1px solid rgba(182, 157, 116, 0.5);
  pointer-events: none;
}
.eyebrow {
  margin: 0 0 1rem;
  color: var(--gold);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}
.hero h1 {
  color: var(--ivory);
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  line-height: 1.1;
}
.lead {
  max-width: 480px;
  margin: 1.1rem auto 2rem;
  color: rgba(245, 245, 239, 0.8);
}
</style>
