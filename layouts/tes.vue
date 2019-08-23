<template>
  <section class="hero is-info is-fullheight">
    <div class="hero-head is-centered">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <p class="navbar-item title">
            {{ title }}
          </p>
        </div>
      </nav>
    </div>
    <div class="hero-body custom-hero-body">
      <div class="container is-fluid">
        <nuxt />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    title: 'Todo :)'
  })
}
</script>

<style scoped>
.custom-hero-body {
  align-items: flex-start !important;
}
</style>
