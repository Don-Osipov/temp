<template>
  <div class="creators">
    <h4 class="creators--heading">
      From the creators of <span class="white-highlight">TigerLaunch...</span>
    </h4>
    <p class="creators--info">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ex rerum
      dolor magni hic vel dicta alias nostrum enim est, voluptas id dignissimos
      assumenda culpa quas, unde iusto adipisci. Veritatis vitae beatae
      distinctio voluptatem illum, minus explicabo inventore accusantium quam,
      eaque nostrum quod vero ut libero quisquam consectetur quibusdam doloribus
      quidem, quae excepturi quos. Harum iure, cum corrupti non molestiae
      labore! Accusantium illo nisi quisquam, dolores repudiandae quis obcaecati
      recusandae doloremque. Accusamus, facilis cupiditate! Laborum id quibusdam
      porro laudantium nulla excepturi tempore commodi animi velit dolores
      dignissimos nobis consequatur, facere nam, natus accusantium! Dolorum
      repellendus recusandae hic voluptatem quidem harum.
    </p>
    <g-image
      src="../../assets/Team/TigerLaunchLogo.png"
      alt="TigerLaunch Logo"
      class="creators-logo"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.creators
  background-color: $c-primarygreen
  padding: 3rem 12.5vw
  margin-bottom: 12rem
  width: 100vw


  &--heading
    color: $c-darkblue
    font-size: 3.2rem
    margin-bottom: 2%

  &--info
    color: white
    font-weight: 500
    margin-bottom: 3rem

  &-logo
    height: 7rem
    width: 6.5rem
</style>
