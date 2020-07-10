<template>
  <div class="landing">
    <div class="intro">
      <h2>Welcome to <span class="primary-highlight">Stratos</span></h2>
      <h3>
        Redefining
        <span class="primary-highlight">startup discovery</span> one univeristy
        at a time
      </h3>
      <g-link to="/product"><span>Learn More</span></g-link>
    </div>
    <div class="graphic">
      <!-- <g-image src="@/assets/Cloud.svg" alt="cloud graphic" class="cloud" /> -->
      <!-- <g-image src="@/assets/Rocket.svg" alt="rocket graphic" class="rocket" /> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.landing
  height:  55vh
  display: grid
  grid-template-columns: 1fr 1fr
  width: 100vw


  & .intro
    color: white
    margin: 6rem 15rem
    text-align: start
    display: flex
    flex-direction: column

    & h2
      font-size: 7rem
      line-height: 7.5rem
      margin-bottom: 2rem

    & h3
      font-size: 2.2rem
      line-height: 2.8rem
      margin-bottom: 3.5rem


    & a
      padding: .75rem 2.5rem
      border-radius: 3rem
      background-color: $c-primarygreen
      cursor: pointer
      transition: all .3s ease 0s
      align-self: flex-start
      font-family: inherit
      text-decoration: none

      &:hover
        background-color: lighten($c-primarygreen, 10%)

      & span
        color: white
        font-size: 2rem

  & .graphic

    & .cloud
      height: 100%
      width: 100%
      // position: relative

      z-index: 5

    & .rocket
      z-index: 10
      position: absolute
      top: 9rem
      right: 9rem
</style>
