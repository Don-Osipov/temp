<template>
  <div class="home">
    <header>
      <NavBar></NavBar>
      <Welcome></Welcome>
    </header>
    <WhatIsIt></WhatIsIt>
    <HowItWorks></HowItWorks>
    <LearnMoreSec></LearnMoreSec>
    <TrustedBy></TrustedBy>
    <!-- <g-image alt="Vue logo" src="../assets/LargeIcon.svg" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import HowItWorks from '../components/Home/HowItWorks';
import LearnMoreSec from '../components/Home/LearnMoreSec';
import TrustedBy from '../components/Home/TrustedBy';
import WhatIsIt from '../components/Home/WhatIsIt';
import Welcome from '../components/Home/Welcome';

export default {
  name: 'Home',
  components: {
    HowItWorks,
    LearnMoreSec,
    TrustedBy,
    WhatIsIt,
    Welcome
  }
  // mounted() {
  //   const contentful = require('contentful');
  //   const client = contentful.createClient({
  //     // This is the space ID. A space is like a project folder in Contentful terms
  //     space: 'developer_bookshelf',
  //     // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  //     accessToken: '0b7f6x59a0'
  //   });
  //   // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
  //   client
  //     .getEntry('5PeGS2SoZGSa4GuiQsigQu')
  //     .then(entry => console.log(entry))
  //     .catch(err => console.log(err));
  // }
};
</script>

<style lang="sass" scoped>
.home
  padding-bottom: 2rem
  flex: 1 0 auto

header
  background-color: $c-darkblue
</style>
