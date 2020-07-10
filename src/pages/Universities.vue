<template>
  <div class="universities">
    <NavBar></NavBar>
    <!-- <g-image src="../assets/OrangeWave1.svg" alt="" class="orangeWave1" /> -->
    <main>
      <h3 class="title">Univeristy of Illinois (UIUC)</h3>
      <UniversityInfo></UniversityInfo>
      <FounderRanking></FounderRanking>
      <Top5Startups></Top5Startups>
    </main>
  </div>
</template>

<script>
import UniversityInfo from '../components/UniversityInfo';
import FounderRanking from '../components/FounderRanking';
import Top5Startups from '../components/Top5Startups';
export default {
  name: 'Universities',
  components: {
    UniversityInfo,
    FounderRanking,
    Top5Startups
  }
};
</script>

<style lang="sass" scoped>


.orangeWave1
  position: absolute
  top: -3vw
  left: 0
  width: 100vw
  height: auto
  z-index: -1
  // height: 2rem

.title
  font-size: 8rem
  color: $c-UIUCOrange
</style>
