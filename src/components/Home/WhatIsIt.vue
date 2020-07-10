<template>
  <div class="WII-wrapper">
    <g-image src="@/assets/LargeIcon.svg" alt="Large Stratos Icon" />
    <div class="WII-info">
      <h3>What is <span>Stratos</span></h3>
      <p>
        Stratos enables you to tap into the goldmine of innovation that is
        college entrepreneurship. By providing unique insight into the
        entrepreneurial landscapes of 30 top universities, we help you develop
        your investment pipeline faster, better, and stronger.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.WII-wrapper
  background-color: $c-primarygreen
  display: grid
  grid-template-columns: 2fr 3fr
  justify-items: center
  align-items: center
  color: $c-darkblue
  width: 100vw

.WII-info
  display: flex
  flex-direction: column
  width: 60%
  justify-self: start

  & h3
    font-size: 7rem
    line-height: 1
    margin-bottom: 3.5rem

  & p
    font-weight: 500
    font-size: 1.8rem

img
  height: 50rem
  // height: 30vw

span
  color: white
</style>
