<template>
  <div :class="assignClass">
  <div class="overlay"></div>
    <!-- <h4 v-if="bookvillains[0].length!=0">Villains:</h4>
      <ul v-if="bookvillains[0].length!=0" v-for="villain in bookvillains">
        <li v-for="v in villain"> 
          {{ v.name }}
        </li> 
      </ul> -->
    <img :src="img" />
    <div class="book-header">
      <h1>{{ bookname }}</h1>
      <h3>{{ bookyear }}</h3>
    </div>
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
    img: String,
    childNo: Number
  },
  computed : {
    assignClass(){
      if (this.childNo % 2 === 0){
        return 'big';
      }else if (this.childNo % 3 === 0){
        return 'tall'
      }else if (this.childNo % 4 === 0){
        return 'wide';
      }else {
        return '';
      }
    }
  }
}


</script>


<style scoped>
h1 {
  font-family: Bloody;
  color: 	#880808;
  font-size: 36px;
  letter-spacing: 2.2px;
  background: rgba(0, 0, 0, 0.8);
}
.book-header{
  position: absolute;
}

.overlay{
    /* background: black; */
    height: 100%;
    width: 100%;
    position: absolute;
    /* opacity: 70%; */
    background-image: linear-gradient(rgba(0, 0, 0, 0.5));
}

</style>
