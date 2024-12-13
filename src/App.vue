<template>
  <div class="book-grid">
  <BookTile :title="'Carrie - 1'"/>
  <BookTile :title="'Pet Sematary - 2'"/>
  <BookTile :title="'It - 3'"/>
  <BookTile :title="'The Shining - 4'"/>
  <BookTile :title="'The Stand - 5'"/>
  <BookTile :title="'Outsider - 6'"/>
  <BookTile :title="'Misery - 7'"/>
  <BookTile :title="'The Night Shift - 8'"/>
  <BookTile :title="'Rose Madder - 9'"/>
  <BookTile :title="'Hearts in Atlantis - 10'"/>
</div>
</template>
<script>
import BookTile from './components/BookTile.vue'
export default {
  components: {
  BookTile
}
}
</script>
<style>
.book-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 10px;
    gap: 20px;
}
</style>
