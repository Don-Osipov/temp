<template>
  <footer>
    <ul class="footer-links">
      <g-link to="/" class="logo-link">
        <g-image
          src="../assets/SmallIcon.svg"
          alt="Stratos"
          class="logos stratos"
        />
      </g-link>
      <div class="links">
        <li>Privacy Policy</li>
        <li><g-link to="/contact">Contact Us</g-link></li>
      </div>
      <div class="social">
        <a href="#"
          ><g-image
            src="../assets/Facebook.svg"
            alt="Fabebook Link"
            class="logos"
        /></a>
        <a href="#"
          ><g-image
            src="../assets/Instagram.svg"
            alt="Instagram Link"
            class="logos"
        /></a>
        <a href="#"
          ><g-image src="../assets/Twitter.svg" alt="Twitter Link" class="logos"
        /></a>
      </div>
    </ul>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
footer
  // position: absolute
  // bottom: 0
  // position: fixed
  // bottom: 0
  // left: 0
  width: 100vw
  background-color: transparent
  grid-row-start: 2
  grid-row-end: 3


.footer-links
  display: flex
  justify-content: space-between
  align-items: center
  padding: 1rem 3rem

.links
  display: flex
  justify-content: space-between
  align-items: center
  list-style-type: none
  list-style: none

  & li
    padding: 1rem 2rem
    color: black

  & li a
    text-decoration: none
    color: black

.logos
  height: 4.5rem
  width: 4.5rem
  margin: 1rem 1.5rem
</style>
