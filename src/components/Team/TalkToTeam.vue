<template>
  <div class="TTT">
    <g-image
      src="@/assets/Team/TalkTeam.svg"
      alt="Graphic"
      class="TTT--graphic"
    />
    <div>
      <h4 class="TTT--heading">Want to talk to the team?</h4>
      <g-link to="/contact"
        ><button class="TTT--button">Contact Us!</button></g-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.TTT
  width: 100vw
  padding: 12rem 12.5vw
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: space-around

  &--heading
    font-size: 4rem
    color: $c-primarygreen
    margin-bottom: 2rem

  &--graphic

  &--button
    border: none
    padding: 2rem 4rem
    border-radius: 4rem
    color: white
    font-family: inherit
    font-weight: 600
    font-size: 2rem
    background-color: $c-primarygreen
</style>
