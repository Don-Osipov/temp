<template>
  <div class="layout">
    <!-- <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header> -->
    <div>
      <NavBar></NavBar>
      <slot />
    </div>
    <Footer></Footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
export default {
  components: {
    NavBar,
    Footer
  }
};
</script>

<style lang="sass" scoped>
.layout
  text-align: center
  height: 100%
  display: grid
  grid-template-rows: 1fr auto
  overflow: hidden
</style>
