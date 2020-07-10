<template>
  <div class="TG">
    <div class="TG--card" v-for="(item, i) in arr" :key="i">
      <div class="TG--card__head">
        <p class="name"><span>Jason</span> <span>Tan</span></p>
        <g-image
          src="../../assets/Team/TeamImage.png"
          alt="Jason Tan Image"
          class="picture"
        />
      </div>
      <div class="TG--card__info">
        <h5 class="title">Co-Founder, CTO</h5>
        <p class="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          accusantium reprehenderit quod doloribus dolorem adipisci a quasi
          nostrum vel commodi. At voluptatum soluta, libero aperiam earum labore
          adipisci asperiores debitis.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      arr: new Array(12)
    };
  }
};
</script>

<style lang="sass" scoped>
.TG
  background-color: $c-primarygreen
  padding: 3rem 12.5vw
  width: 100vw

  display: grid
  grid-template-columns: repeat(auto-fit, minmax(25rem, 40rem))
  align-items: center
  justify-content: center

  &--card
    padding: 4rem 2.5vw

    &__head
      margin-bottom: 1.5rem
      position: relative

    &__info

.name
  // transform-origin: 0 100%
  position: absolute
  bottom: 30%
  left: 0
  // left: -5rem
  transform: rotate(-90deg)
  height: 5rem
  width: 6rem
  color: white
  font-weight: 600
  font-size: 3rem

  display: grid
  grid-template-columns: 1fr 1fr
  grid-gap: 1.5rem


.picture


.title
  font-size: 1.7rem
  margin-bottom: 1rem

.info
  font-weight: 500
</style>
