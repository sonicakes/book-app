<template>
  <div class="scary">
    <h1>{{ bookname }}</h1>
    <h3>{{ bookyear }}</h3>
    <h4 v-if="bookvillains[0].length!=0">Villains:</h4>
      <ul v-if="bookvillains[0].length!=0" v-for="villain in bookvillains">
        <li v-for="v in villain"> 
          {{ v.name }}
        </li> 
      </ul>
      <img :src="img"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      villains: []
    }
  },
  props: {
    bookname: String,
    bookname: String,
    bookyear: String,
    bookvillains: Array,
    img: String
  },

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
  min-height: 500px;
}

.scary:hover {
    transform: translateY(-10px);
}

</style>
