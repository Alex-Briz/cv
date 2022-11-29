<template>
<div class="main">
  
    <div class="top">

      <h1><b>Chervoniak Vadym</b></h1>

<p><b>web developer</b></p>
          
</div> 
<div class="photo">
<img src="../assets/photo956.png" alt="photo" />
     </div>
    
    </div>
</template>

<script>
export default {
  name: "HeadName",
};
</script>

<style scoped>
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
h1 {
  font-size: 3rem;
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
p {
    width: 100%;
    text-align: left;
    line-height: 4vh;
    font-size: 4vh;

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
      background:  rgb(233, 84, 32, 0.5);
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
      background:  rgb(233, 84, 32, 0.5);
      border-radius: 2.5vh;
  
      rotate: 45deg;
  
}
</style>
