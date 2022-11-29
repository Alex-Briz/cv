<template>
    <div class="viridian">
 
     <div class="toggler" @click="toggle" >
   <span> V </span>{{text}}
    </div>

        <ul v-show="toggleBool"
         style="list-style: none;">

<li>            <h6>Hex triplet</h6>
#40826D /copy/</li>
<li>
    <h6>sRGBB (r, g, b)</h6>
    (64, 130, 109) /copy/
</li>
<li>
    <h6>HSV (h, s, v)</h6>
    (161°, 51%, 51%) /copy/
</li>
<li>
    <h6>CIELChuv (L, C, h)</h6>
    (50, 31, 160°) /copy/
</li>

</ul>

    </div>
</template>

<script>

    export default {
        name: 'ViridianE',
        props: {
            text: String
        },
        data() {
            return {
                toggleBool: true
            }
        },
        methods: {
            toggle() {
                return this.toggleBool = !this.toggleBool
            }
        }
    }

</script>

<style scoped>
.toggler {
    background: var(--viridian);
    color: whitesmoke;
    cursor: pointer;
}
.toggler span {
    background: whitesmoke;
    color: var(--viridian);
}
footer {
    display: flex;
    flex-wrap: wrap;
}
h5 {
    display: block;
    max-width: 25%;
    color: var(--viridian);
    margin: 0.5rem 0;
}
ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

li {
    border: 0.5vw solid var(--viridian);
     width: 24vw;
}
.viridian {
    width: 100%;
}
</style>