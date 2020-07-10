<template
  ><section class="wrapper">
    <div class="founder">
      <h4>Where to Find Founders</h4>
      <div class="founderCard-wrapper">
        <div class="founder--card-1">
          <div class="founder--card-1__number">1.</div>
          <div class="founder--card-1__inner">
            <h5>iVentures</h5>
            <p>
              iVenture Accelerator is a non-dilutive educational accelerator for
              top student startups at UIUC.
            </p>
          </div>
        </div>
        <div class="founder--card-1">
          <div class="founder--card-1__number">2.</div>
          <div class="founder--card-1__inner">
            <h5>Cozard</h5>
            <p>
              Cozad is an early-stage startup pitch competition that happens
              over two months.
            </p>
          </div>
        </div>
        <div class="founder--card-1">
          <div class="founder--card-1__number">3.</div>
          <div class="founder--card-1__inner">
            <h5>Forge</h5>
            <p>
              Forge is the largest student-run startup weekend, where teams
              pitch and can win up to $1,500.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="ranking">
      <h4>Ranking of Entrepreneurship at UIUC</h4>
      <div class="rankingCard-wrapper">
        <div class="ranking--card2">
          <g-image
            src="../assets/rankingCard1.svg"
            alt="Incubators and Accelerators Graphic"
          />
          <h5>Incubators and Accelerators</h5>
          <a href="#">Read More</a>
        </div>
        <div class="ranking--card2">
          <g-image
            src="../assets/rankingCard2.svg"
            alt="Incubators and Accelerators Graphic"
          />
          <h5>Competitions</h5>
          <a href="#">Read More</a>
        </div>
        <div class="ranking--card2">
          <g-image
            src="../assets/rankingCard3.svg"
            alt="Incubators and Accelerators Graphic"
          />
          <h5>Programs</h5>
          <a href="#">Read More</a>
        </div>
        <div class="ranking--card2">
          <g-image
            src="../assets/rankingCard4.svg"
            alt="Incubators and Accelerators Graphic"
          />
          <h5>Extracurriculars</h5>
          <a href="#">Read More</a>
        </div>
        <div class="ranking--card2">
          <g-image
            src="../assets/rankingCard5.svg"
            alt="Incubators and Accelerators Graphic"
          />
          <h5>Academics</h5>
          <a href="#">Read More</a>
        </div>
        <div class="ranking--card2">
          <g-image
            src="../assets/rankingCard6.svg"
            alt="Incubators and Accelerators Graphic"
          />
          <h5>Funds</h5>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.wrapper
  background-color: $c-UIUCOrange
  // padding-bottom: 8%
  width: 100vw
  padding: 5rem 12.5vw


h4
  color: white
  font-size: 5rem
  margin-bottom: 3rem

.founder

  &Card-wrapper
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(20rem, 42rem))
    align-items: center
    justify-content: center
    justify-items: center
    margin-bottom: 10rem


  &--card-1
    display: flex
    align-items: center
    height: 100%

    flex-direction: column
    align-items: center
    padding: 2rem 2vw


    &__number
      color: white
      font-size: 4rem
      font-weight: 600
      width: 100%

    &__inner
      background-color: white
      border-radius: 2rem
      padding: 5rem 4rem
      width: 100%
      height: 100%
      display: flex
      flex-direction: column
      justify-content: flex-start

      & h5
        color: $c-UIUCOrange
        text-decoration: underline
        font-size: 3rem
        margin-bottom: 1.5rem

      & p
        font-weight: 500

.ranking

  &Card-wrapper
    display: grid
    // grid-template-columns: repeat(3, 1fr)
    // grid-template-columns: repeat(3, auto-fit)
    grid-template-columns: repeat(auto-fill, minmax(40rem, 42rem))
    justify-content: center
    height: 100%


  &--card2
    margin: 4% 2vw
    background-color: white
    border-radius: 2rem
    padding: 6rem 5%
    // width: 90%
    display: flex
    flex-direction: column
    align-items: center
    // row-gap: 1.5rem
    justify-content: space-between
    min-width: 24rem

    & h5
      color: $c-UIUCOrange
      font-size: 3.3rem
      line-height: 1.3
      padding: 1rem 0

    & a
      color: black
      font-size: 2rem
      font-weight: 500
</style>
