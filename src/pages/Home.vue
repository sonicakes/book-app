<template>
    <h1>homepage</h1>
        <button @click="confirm">See my books!</button>
    <AllBooks />
</template>

<script>
import AllBooks from '../components/AllBooks.vue';

export default {
    components: {
        AllBooks,
    },
    methods: {
    confirm() {
      console.log('confirm!')
      this.$router.push('/my-books')
    }
  }
}
</script>