<template>
  <div class="book-grid">
    <BookTile v-for="result in results" :bookid="result.id" :bookyear="result.year" :bookname="result.name" :bookvillains="result.villains"/>
  </div>
</template>

<script>
import BookTile from './components/BookTile.vue';
import axios from 'axios';

export default {
  components: {
  BookTile
},
data() {
    return {
      results: [],
      isLoading: false,
      error: null
    }
  },
methods: {
    loadExps() {
    this.isLoading = true;

  axios.get('https://stephen-king-api.onrender.com/api/books')
  .then((response) => {
    this.isLoading = false;
    // handle success
    console.log('king', response);
    const results = [];
    for (const id in response.data.data){
      results.push({id: id, name: response.data.data[id].Title, year: response.data.data[id].Year, villains: [response.data.data[id].villains]})
    }
    this.results = results;
  })
  .catch((error) => {
    // handle error
    console.log(error);
    this.isLoading = false;
    this.error = 'failed to fetch data, pls try again';
  })
 
    }
  },
  mounted(){
    this.loadExps();
  }
}
</script>
<style>
.book-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}
</style>
