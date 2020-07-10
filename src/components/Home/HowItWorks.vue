<template>
  <div class="HIW-wrapper">
    <h4>How it works</h4>
    <div class="HIW">
      <div class="HIW-card">
        <g-image src="@/assets/Discover.svg" alt="Discover Graphic" />
        <h5>Discover</h5>
        <p>
          Discover the next generation of university startups. With Stratos,
          we’ll help you uncover the programs, accelerators, incubators, and
          competitions that produce the most promising university startups.
        </p>
      </div>
      <div class="HIW-card">
        <g-image src="@/assets/Connect.svg" alt="Connect Graphic" />
        <h5>Connect</h5>
        <p>
          Connect with leaders, administrators, and founders from the Stratos
          list of universities! We provide an extensive network across the
          country and help you build lasting relationships.
        </p>
      </div>
      <div class="HIW-card test">
        <g-image src="@/assets/Develop.svg" alt="Develop Graphic" />
        <h5>Develop</h5>
        <p>
          Develop critical relationships with key partners at universities to
          insert yourself into their development pipeline and discover the next
          big startup!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.HIW-wrapper
  // padding: 6rem 0rem
  padding: 0 12.5vw
  width: 100vw
  color: $c-darkblue

h4
  font-size: 6rem
  margin-bottom: 5rem

.HIW
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(30rem, 42rem))
  align-items: center
  justify-content: center
  justify-items: center
  // grid-gap: 2vw
  // display: flex
  // align-content: space-around
  // flex-wrap: wrap
  // align-content: space-around

  width: 100%

// .test
//   grid-column-start: span 2

.HIW-card
  padding: 2rem 2vw
  width: 100%
  max-width: 42rem

  display: flex
  flex-direction: column
  align-items: center


  & h5
    font-size: 3rem

  & p
    font-weight: 500
</style>
