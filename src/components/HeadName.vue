<template>
<div class="main">
  
    <div class="top">

      <h1><b>Chervoniak Vadym</b></h1>
<h2>
      <span>w</span>
        <span>e</span>
        <span>b</span>
        <span>-</span>
        <span>d</span>
        <span>e</span>
        <span>v</span>
        <span>e</span>
        <span>l</span>
        <span>o</span>
        <span>p</span>
        <span>e</span>
        <span>r</span>
</h2>
          
</div> 
<div class="photo">
<img src="../assets/photo956.png" alt="photo" />
     </div>
    
    </div>
</template>

<p><b>web developer</b></p>

<script>
export default {
  name: "HeadName",
};
</script>

<!-- font-family: 'Titan One'cursive; -->

<style scoped>


h2 span {

  position: relative;

  display: inline-block;
  animation: bounce .66s ease infinite alternate;


  color: #fff;
  text-shadow: 0 1px 0 green,
      0 2px 0 green,
      0 3px 0 green,
      0 4px 0 green,
      0 5px 0 green,
      0 6px 0 transparent,
      0 7px 0 transparent,
      0 8px 0 transparent,
      0 9px 0 transparent,
      0 10px 10px rgba(0, 0, 0, 0.4);
}

h2 span:nth-child(2) {
  animation-delay: .1s;
}

h2 span:nth-child(3) {
  animation-delay: .2s;
}

h2 span:nth-child(4) {
  animation-delay: .3s;
}

h2 span:nth-child(5) {
  animation-delay: .4s;
}

h2 span:nth-child(6) {
  animation-delay: .5s;
}

h2 span:nth-child(7) {
  animation-delay: .6s;
}

h2 span:nth-child(8) {
  animation-delay: .7s;
}

h2 span:nth-child(9) {
  animation-delay: .8s;
}

h2 span:nth-child(10) {
  animation-delay: .9s;
}

h2 span:nth-child(11) {
  animation-delay: 1s;
}

h2 span:nth-child(12) {
  animation-delay: 1.1s;
}

h2 span:nth-child(13) {
  animation-delay: 1.2s;
}

@keyframes bounce {
  100% {
      top: -2vh;
      text-shadow: 0 1px 0 #CCC,
          0 2px 0 #CCC,
          0 3px 0 #CCC,
          0 4px 0 #CCC,
          0 5px 0 #CCC,
          0 6px 0 #CCC,
          0 7px 0 #CCC,
          0 8px 0 #CCC,
          0 9px 0 #CCC,
          0 50px 25px rgba(0, 0, 0, 0.2);
  }
}
.main {
  min-height: 15vh;
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
}

@media (orientation: portrait) {

  h1, h1::after {
    font-size: 2.5rem;
  }

  h2 {
    height: 4vh;
    margin-top: -1vh;
    padding-bottom: 2.5vh;
  }
  
  h2 span {
    margin: auto 1vw;
    top: 2vh;
    font-size: 4vh;
  }
  h1::after {
    margin-top: -12.5vh;
    margin-left: -0.7vw;
  }
}

@media (orientation: landscape) {

  h1::after {
    margin-top: -6.05vh;
    margin-left: -0.2vw;
  }

h2 {
  height: 4vh;
  margin-top: -1vh;
}

h2 span {
  margin: auto 1vw;
  top: 2vh;
  font-size: 4vh;
}

  h1, h1::after {
    font-size: 3rem;
  }

}

h1, h1::after {
  letter-spacing: 0.2rem;
  line-height: 6.5vh;
  font-stretch: ultra-expanded;
  font-weight: 900;
  width: 75vw;

  text-transform: uppercase;
  text-align: left;
  background: -webkit-linear-gradient(
    0deg,
    var(--aubergine-dark),
    var(--ubuntu-orange)
  );
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  word-wrap: normal;
}

h1::after {
  content: "CHERVONIAK VADYM";
  display: block;
  background: -webkit-linear-gradient(
    0deg,
    var(--ubuntu-orange),
    var(--aubergine-dark) 
  );
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  opacity: 0.5;

}



p {
  width: 100%;
  text-align: left;
  line-height: 4vh;
  font-size: 4vh;
  font-weight: 900;

font-weight: 900;
letter-spacing: 3vw;
display: block;
text-shadow: 0 0 1vw whitesmoke;
z-index: 5;

}
.photo img {
z-index: 5;
  width: 10vh;
  height: 10vh;
  border-radius: 50%;
  position: absolute;
  right: 1vh;
}
.photo {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 66%;
    width: 12vh;
    height: 12vh;
      background: rgba(64, 130, 96, 0.66); 
      border-radius: 2.5vh;
      overflow: visible;
}
.photo::before {
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    width: 12vh;
    height: 12vh;
      background:  rgba(255, 255, 255, 0.33);
      border-radius: 2.5vh;
  
      rotate: 45deg;
  
}
</style>
