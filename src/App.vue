<template>
  <div id="app">
    <Layout>
      <router-view />
    </Layout>
    <!-- <div id="nav">
      <g-link to="/">Home</g-link>
      <g-link to="/about">About</g-link>
    </div> -->
    <!-- <Footer></Footer> -->
  </div>
</template>

<style lang="sass">
*,
*::before,
*::after
  margin: 0
  padding: 0
  box-sizing: border-box


body
  font-family: 'Montserrat', sans-serif
  // font-weight:
  font-size: 1.6rem
  line-height: 1.7


html
  font-size: 62.5%
  height: 100%


html
  font-size: 62.5%

  // @include respond(big-desktop)
  //   font-size: 75%

  @include respond(tab-land)
    font-size: 56.25%

  @include respond(tab-port)
    font-size: 50%

  // @include respond(phone)
  //   font-size: 45%


body
  height: 100%


body #app
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  // min-height: 100vh
  text-align: center
  min-height: 100%
  display: grid
  grid-template-rows: 1fr auto
  overflow: hidden

.primary-highlight
  color: $c-primarygreen

.white-highlight
  color: white
</style>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import Footer from '@/components/Footer.vue';

export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    };
  },
  components: {
    Footer
  }
};
</script>
