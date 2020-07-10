<template>
  <div class="team">
    <NavBar></NavBar>
    <main>
      <MeetTheTeam></MeetTheTeam>
      <Creators></Creators>
      <TeamGrid></TeamGrid>
      <TalkToTeam></TalkToTeam>
      <Partners></Partners>
    </main>
  </div>
</template>

<script>
import MeetTheTeam from '../components/Team/MeetTheTeam';
import Creators from '../components/Team/Creators';
import TeamGrid from '../components/Team/TeamGrid';
import TalkToTeam from '../components/Team/TalkToTeam';
import Partners from '../components/Team/Partners';
export default {
  name: 'Team',
  components: {
    MeetTheTeam,
    Creators,
    TeamGrid,
    TalkToTeam,
    Partners
  }
};
</script>

<style lang="sass" scoped>

// main
//   padding: 0 12.5vw
</style>
