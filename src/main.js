import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AddBook from './components/AddBook.vue';
import MyBooks from './components/MyBooks.vue';
import Home from './pages/Home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/add-book',
            component: AddBook
        },
           {
            path: '/my-books',
            component: MyBooks
        },
             {
            path: '/',
            component: Home
        },
    ]
});
const app = createApp(App)

app.use(router);

app.mount('#app');
