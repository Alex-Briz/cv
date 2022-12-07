<template>
  <div>
    <WithUkraine />
    <HeadName />
    <!-- <ViridianE text="viridian" /> -->
    <InfoBlock text="my history:" :dataObject="history" :defaultShow="false" />
    <InfoBlock text="demo pages:" :dataObject="folio" :defaultShow="true" />
    <InfoBlock text="impowered by:" :dataObject="thanks" :defaultShow="false" />
    <InfoBlock
      text="inspired by:"
      :dataObject="inspired"
      :defaultShow="false"
    />
    <InfoBlock
      text="get in touch:"
      :dataObject="contacts"
      :defaultShow="true"
      extraStyles="contacts"
    />
    <h6>&copy; 2022 Chervoniak (Alex-Briz) Vadym</h6>
    <div v-show="false" class="audio">
    <audio id="open" autoplay controls>
      <source src="./assets/open-tab.wav" type="audio/wav">
    Your browser does not support the audio element.
    </audio>
    <audio id="close" controls>
      <source src="./assets/close-tab.wav" type="audio/wav">
    Your browser does not support the audio element.
    </audio>
  </div>
  <!-- <iframe src="./assets/open-tab.wav" allow="autoplay" style="display:none" id="iframeAudio">
  </iframe>  -->
  </div>
</template>

<script>
import WithUkraine from "./components/WithUkraine.vue";
import HeadName from "./components/HeadName.vue";
// import ViridianE from './components/ViridianE.vue';
import InfoBlock from "./components/InfoBlock.vue";
import data from "./assets/data.js";

export default {
  name: "App",
  components: {
    WithUkraine,
    HeadName,
    // ViridianE,
    InfoBlock,
  },
  data() {
    return {
      thanks: data.thanks,
      folio: data.folio,
      history: data.history,
      contacts: data.contacts,
      inspired: data.inspired
    };
  },
  methods: {
    scroll() {
      var elem = document.getElementsByClassName("wrapper")[0]
      elem.style.setProperty('overflow-y', 'scroll')
      elem.scrollTop = elem.scrollHeight
    },
    audioPreload() {
      let openTab = document.getElementById('open')
        let closeTab = document.getElementById('close')
        openTab.preload = "auto"
        openTab.load()
        closeTab.preload = "auto"
        closeTab.load()
    }
  },
  mounted() {
    this.scroll()
    document.addEventListener('DOMContentLoaded', () => {
      this.audioPreload()

    })
  },
};
</script>

<style>
* {
  --viridian: #408260;

  --font-hp: "HP Simplified Light";

  --ubuntu-orange: #e95420;
  --aubergine-light: #77216f;
  --aubergine-mid: #5e2750;
  --aubergine-dark: #2c001e;
  --grey-warm: #aea79f;
  --grey-cool: #333333;
  --grey-text: #111111;
  --aubergine: #772953;

  --vue-police-blue: #2c3e50;
  --vue-mint: #42b983;
  --vue-font: Avenir, Helvetica, Arial, sans-serif;
}

html * {
  scrollbar-color: rebeccapurple green !important;
  scrollbar-width: thin !important;
}
body {
  color: whitesmoke;
  font-family: var(--font-hp);
  background: linear-gradient(
    0deg,
    navy 0%,
    gold 33%,
    gold 66%,
    navy 100%
  );
}
#app {
  margin: 0;
  padding: 0;
  width: 100%;
}
a {
  font-size: 2.4vh;
  color: white;
  text-shadow: 0 0 1.5rem black;
  font-weight: 900;
  
}
h6 {
  width: 100%;
  text-align: center;
  font-size: 10px;
  line-height: 10px;
  position: fixed;
  bottom: 5px;
}
</style>
