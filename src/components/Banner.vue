<template>
  <!-- <div class="">
 <p>hi</p>
      <img :src="img"/>
  </div> -->
  <div class="hero-image" :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img});`">
  <div class="hero-text">
    <h1>I am a Stephen King fan</h1>
    <p>so I created this app to track my reading</p>
    <button>Who's SK?</button>
  </div>
</div>
</template>

<script>
export default {
  props: {
    img: String
  },
}


</script>


<style scoped>
/* The hero image */
.hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("photographer.jpg"); */

  /* Set a specific height */
  height: 50%;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

/* Place text in the middle of the image */
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

</style>

