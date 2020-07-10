<template>
  <div class="learnMore">
    <h4>Learn more about Stratos:</h4>
    <g-link to="/product" class="temp"><span>Our Product</span></g-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>


.learnMore
  width: 100vw
  align-content: center
  line-height: 1.2
  display: flex
  flex-wrap: wrap
  align-items: space-around
  justify-content: space-around
  font-size: 4rem
  background-color: $c-primarygreen
  padding: 3rem 2rem

  margin: 4rem 0

  & h4
    color: white
    margin-right: 5rem

  & a
    padding: .25rem 3.5rem
    border-radius: 3.5rem
    background-color: white
    transition: all .3s ease 0s
    align-self: flex-start
    font-family: inherit
    text-decoration: none

    // &:hover
    //   background-color: lighten($c-primarygreen, 10%)

    & span
      color: $c-primarygreen
      font-size: 4rem
</style>
