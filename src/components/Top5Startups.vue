<template>
  <div class="startup-wrapper">
    <div class="startups-student">
      <div class="startups-student__title">
        <g-image src="../assets/Student.svg" alt="Student Graphic" />
        <h4>Top Five Startups From UIUC Students</h4>
      </div>
      <g-image src="../assets/Startups.png" alt="Startups Graphic" />
    </div>
    <div class="startups-alums">
      <div class="startups-alums__title">
        <h4>Top Five Startups From UIUC Alums</h4>
        <g-image src="../assets/Alum.svg" alt="Student Graphic" />
      </div>
      <g-image src="../assets/Startups.png" alt="Startups Graphic" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.startup-wrapper
  margin-top: 10rem
  width: 100vw
  padding: 0 5%

.startups-student, .startups-alums
  margin-bottom: 4.5rem

.startups-student__title, .startups-alums__title
    display: flex
    justify-content: center
    align-items: center

    & h4
      font-size: 4rem
      color: $c-UIUCOrange

    & img
      height: 12rem
</style>
