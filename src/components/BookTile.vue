<template>
  <div class="scary">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props: {
    title: String,
  }
}


</script>


<style scoped>
h1 {
  font-family: Bloody;
  color: 	#880808;
  font-size: 56px;
  letter-spacing: 1.2px;
}
.scary {
  border-image: linear-gradient(to right, #880808 0%, #C0C0C0 100%) 1;
  border-radius: 5px; /* this doesn't work */
  border-width: 2px;
  border-style: solid;
  padding: 5px;
  box-sizing: border-box;
}

.scary:hover {
    transform: translateY(-10px);
}

.scary:first-child, .scary:nth-child(6) {
  grid-row: span 15;
}
.scary:nth-child(2), .scary:nth-child(7) {
  grid-row: span 20;
}
.scary:nth-child(3), .scary:nth-child(8) {
  grid-row: span 10;
}
.scary:nth-child(4), .scary:nth-child(9) {
  grid-row: span 25;
}
.scary:nth-child(5), .scary:nth-child(10) {
  grid-row: span 30;
}
</style>
