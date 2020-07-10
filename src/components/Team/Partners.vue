<template>
  <div class="partners">
    <h4 class="partners--heading">Our Partners</h4>
    <g-image src="@/assets/Startups.png" alt="Partners" class="partners--img" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.partners
  width: 100vw
  background-color: $c-primarygreen
  padding: 4rem 5%
  margin-bottom: 10rem

  &--heading
    color: white
    font-size: 4rem
    margin-bottom: 4rem

  &--img
    width: 70%
</style>
