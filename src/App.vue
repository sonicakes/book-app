<template>
  <h6>Random banner from pixabay with search query</h6>
  <Banner :img="rando" />
  <h6>just looping through preview imgs</h6>
  <Banner v-for="pixabay in pixabays" :img="pixabay.previewURL" />
  <div class="book-grid">
    <BookTile
      v-for="result in results"
      :bookid="result.id"
      :bookyear="result.year"
      :bookname="result.name"
      :bookvillains="result.villains"
      :img="result.imageUrl"
    />
  </div>
</template>

<script>
import BookTile from "./components/BookTile.vue";
import axios from "axios";
import { createClient } from "pexels";
import Banner from "./components/Banner.vue";

export default {
  components: {
    BookTile,
    Banner,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
      pixabays: [],
      rando: "",
    };
  },

  methods: {
    loadExps() {
      this.isLoading = true;

      axios
        .get("https://stephen-king-api.onrender.com/api/books")
        .then((response) => {
          this.isLoading = false;
          // handle success
          console.log("king", response);
          const results = [];
          for (const id in response.data.data) {
            results.push({
              id: id,
              name: response.data.data[id].Title,
              year: response.data.data[id].Year,
              villains: [response.data.data[id].villains],
              imageUrl: "",
            });
          }
          this.results = results;
        })
        .catch((error) => {
          // handle error
          console.log(error);
          this.isLoading = false;
          this.error = "failed to fetch data, pls try again";
        });
    },
    //TODO: maybe a gallery like swiper for rando images on banner
    //ANOTHER TODO: apply loop of preview images onto book tiles (how? which would apply to which tile?)
    //AND MORE TODO: make each tile clickable with router, using params
    loadPixabays(searchTerm) {
      this.isLoading = true;

      axios
        .get(
          "https://pixabay.com/api/?key=" + import.meta.env.VITE_API_KEY + "&q=" +
            searchTerm +
            "&image_type=photo"
        )
        .then((response) => {
          const pixs = [];
          console.log(response.data.hits);
          for (const id in response.data.hits) {
            pixs.push({
              id: id,
              previewURL: response.data.hits[id].previewURL,
              largeImageURL: response.data.hits[id].largeImageURL,
            });
          }
          this.pixabays = pixs;
          this.rando = this.pixabays[this.getRandomInt(1, 10)].largeImageURL;
        })
        .catch((error) => {
          // handle error
          console.log(error);
          this.isLoading = false;
          this.error = "failed to fetch data, pls try again";
        });
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  },
  mounted() {
    this.loadExps();
    this.loadPixabays("spooky");
  },
};
</script>
<style>
.book-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
</style>
