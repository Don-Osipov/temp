<template>
  <nav>
    <ul class="nav__links">
      <g-link to="/" class="logo-link">
        <g-image src="../assets/SmallIcon.svg" alt="Stratos" class="logo" />
      </g-link>
      <li>
        <g-link to="/product">Product</g-link>
      </li>
      <li>
        <g-link to="/team">Team</g-link>
      </li>
      <li>
        <g-link to="/universities">Universities</g-link>
      </li>
      <li>
        <g-link to="/contact">Contact</g-link>
      </li>
      <li>
        <g-link to="/login">Log In</g-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
nav
  background-color: $c-darkblue
  // background-color: transparent
  margin-bottom: 1rem

.nav__links
  display: flex
  justify-content: flex-end
  // justify-content: space-between
  align-items: center

  list-style-type: none
  list-style: none
  padding-left: 3rem

  & li
    display: flex
    align-items: center
    cursor: pointer
    height: 100%
    padding: 0rem 2rem
    border-radius: .5rem

    transition: all .3s ease 0s

    &:hover
      background-color: lighten($c-darkblue, 10%)

    & a
      text-decoration: none
      color: white
      letter-spacing: 1px
      font-weight: bold
      display: block
      padding: 2.2rem 3rem
      font-size: 1.7rem

.logo-link
  margin-right: auto
  display: flex
  align-items: center
  padding: 1rem
  padding-left: 2rem

.logo
  height: 5rem
  width: 5rem
</style>
