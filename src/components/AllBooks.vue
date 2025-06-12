<template>
    <div class="grid-wrapper" v-if="!isLoading">
        <BookTile v-for="(result, index) in results" :key="index" :bookid="result.id" :bookyear="result.year"
            :bookname="result.name" :bookvillains="result.villains" :img="result.imageUrl" :childNo="index" />
    </div>
</template>

<script>
import BookTile from "./BookTile.vue";
import axios from "axios";
import { toRaw } from 'vue';

export default {
    components: {
        BookTile,
    },
    data() {
        return {
            results: [],
            isLoading: false,
            isPicsLoading: false,
            error: null,
            pixabays: [],
            dataloaded: false,
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
                    console.log("king", response.data.data.length, this.pixabays);
                    const results = [];
                    for (const id in response.data.data) {

                        // const rawPixabays = toRaw(this.pixabays);
                        const randomIndex = this.getRandomInt(0, this.pixabays.length - 1);

                        results.push({
                            id: id,
                            name: response.data.data[id].Title,
                            year: response.data.data[id].Year,
                            villains: [response.data.data[id].villains],
                            imageUrl: this.pixabays[randomIndex].largeImageURL || 'https://via.placeholder.com/300x200?text=No+Image'

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
        loadPixabays(searchTerm) {
            console.log('load pixabays')
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
                    this.isPicsLoading = false;

                })
                .catch((error) => {
                    console.log(error);
                    this.isPicsLoading = false;
                    this.error = "failed to fetch data, pls try again";
                });


        },
        async loadPixabays(searchTerm) {
            console.log('load pixabays');
            this.isPicsLoading = true;

            try {
                const response = await axios.get(
                    "https://pixabay.com/api/?key=" +
                    import.meta.env.VITE_API_KEY +
                    "&q=" + encodeURIComponent(searchTerm) +
                    "&image_type=photo&per_page=60"
                );

                const hits = response.data.hits;
                const pixs = hits.map((hit, index) => ({
                    id: index.toString(),
                    previewURL: hit.previewURL,
                    largeImageURL: hit.largeImageURL
                }));

                this.pixabays = pixs;
                this.isPicsLoading = false;

            } catch (error) {
                console.error(error);
                this.isPicsLoading = false;
                this.error = "Failed to fetch data, please try again";
            }
        },

        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
        },

    },

    async mounted() {
        await this.loadPixabays('scary');
        this.loadBooks();
    }

}
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
