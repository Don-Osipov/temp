<template>
  <section class="info">
    <div class="fastFacts">
      <h4>Fast Facts</h4>
      <p class="fastfact">
        606 companies founded from U of I throughout its entire history
      </p>
      <p class="fastfact">
        65 companies have been founded by current students
      </p>
      <p class="fastfact">
        Funding comes from AWARE, IllinoisVentures, and Urbana Champaign Angel
        Network
      </p>
      <p class="fastfact">
        Funding comes from AWARE, IllinoisVentures, and Urbana Champaign Angel
        Network
      </p>
    </div>
    <g-image
      src="../assets/UIUCLogo.png"
      alt="University of Illinois Logo"
      class="UIUCLogo"
    />
    <g-image
      src="../assets/UIUCImage.png"
      alt="University of Illinois Image"
      class="UIUCImage"
    />
    <div class="opportunities">
      <h4>Opportunities for VCs</h4>
      <p class="opportunity">
        Though there are abundant curricula in entrepreneurship, the students
        say the courses are not too helpful in actually creating a company. They
        would much rather go to the university’s innovation spaces instead.
        Moreover, the Technology Entrepreneur Center is beneficial, but there
        are lots of hyperboles for what they claim to do and what they actually
        do. You basically just meet founders who give talks. Consensus on
        accelerators on campus is that they put you in a room with investors,
        and you don’t get a lot done. Sadly, they also take most of the equity.
      </p>
      <p class="opportunity">
        A partnership with Forge and iVentures would be most beneficial. The
        student-run organization has eyes and ears all across campus and runs
        small-scale competitions to build an early relationship with any
        potential founders. iVentures aggregate teams who are serious enough
        about their ventures to commit an entire summer. This accelerator will
        also naturally provide an avenue into the administration’s network.
        Since competition with other funds is still relatively local, now is an
        opportune time to scout UIUC, a school with an underrated track record
        in startups and venture capital.
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.info
  display: grid
  grid-template-columns: 2fr 3fr
  grid-template-rows: 1fr 2fr
  font-weight: 500
  text-align: left
  justify-items: center
  padding: 5rem 0
  margin: 0 15vw
  row-gap: 5rem

  & h4
    color: $c-UIUCOrange
    font-size: 5rem

  & p
    margin-bottom: 1.5rem
    font-size: 1.8rem
    color: black


.UIUCImage
  max-height: 50rem

.UIUCLogo
  max-width: 50rem
  height: auto
</style>
