<template>
  <h6>Random banner from pixabay with search query</h6>
  <!-- <Banner :img="rando" /> -->
  <div class="grid-wrapper">
    <BookTile v-for="(result, index) in results" :key="index" :bookid="result.id" :bookyear="result.year"
      :bookname="result.name" :bookvillains="result.villains" :img="pixabays[getRandomInt(1, 60)].largeImageURL"
      :childNo="index" />
  </div>
</template>

<script>
import BookTile from "./components/BookTile.vue";
import axios from "axios";
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
      isPicsLoading: false,
      error: null,
      pixabays: [],
      // rando: "",
    };
  },

  methods: {
    loadBooks() {
      this.isLoading = true;

      axios
        .get("https://stephen-king-api.onrender.com/api/books")
        .then((response) => {
          this.isLoading = false;
          // handle success
          console.log("king", response.data.data.length);
          const results = [];
          for (const id in response.data.data) {
            if (!this.isPicsLoading) {
              results.push({
                id: id,
                name: response.data.data[id].Title,
                year: response.data.data[id].Year,
                villains: [response.data.data[id].villains],
                imageUrl: "",
              });
            }
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
    //Look at scary UI effect for hover, title, e.g. like Shudder
    //AND MORE TODO: make each tile clickable with router, using params
    //TODO: make your own API that includes book covers
    //TODO: make a sidebar navigation
    //TODO: differentiate font size depending on class big,wide or tall,also adjust mobile font sizing
    //TODO: when clickled on item, reveal preview only with 'summary block'.  When clicked on btn 'more', redirect to route params page with extra info
    loadPixabays(searchTerm) {
      this.isPicsLoading = true;

      axios
        .get(
          "https://pixabay.com/api/?key=" + import.meta.env.VITE_API_KEY + "&q=" +
          searchTerm +
          "&image_type=photo" + "&per_page=60"
        )
        .then((response) => {
          const pixs = [];
          console.log(response.data.hits.length);
          for (const id in response.data.hits) {
            pixs.push({
              id: id,
              previewURL: response.data.hits[id].previewURL,
              largeImageURL: response.data.hits[id].largeImageURL,
            });
          }
          this.pixabays = pixs;
          // this.rando = this.pixabays[this.getRandomInt(1, 10)].largeImageURL;
          this.loadBooks();
          this.isPicsLoading = false;

        })
        .catch((error) => {
          console.log(error);
          this.isPicsLoading = false;
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
    this.loadPixabays("scary horror");
  },
};
</script>
<style>
.grid-wrapper>div {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  filter: drop-shadow(4px 3px 5px #726565);

}

.grid-wrapper>div>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.grid-wrapper {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
}

.grid-wrapper .wide {
  grid-column: span 2;
}

.grid-wrapper .tall {
  grid-row: span 2;
}

.grid-wrapper .big {
  grid-column: span 2;
  grid-row: span 2;
}
</style>
