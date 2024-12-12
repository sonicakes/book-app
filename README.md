# Book app
Live link: 

This app is made with Vue 3 and Vite, using Firebase on the BE.

## Project Brief
I'm an avid fan of Stephen King and would like to keep track of the books I have read. I would like to see the list of the books in a nice modern layout, with all the details available to me without an extra click. 

Whenever I finish another SK book, I'd like to add that book to the list, with details like the year of publishing and main villains being derived from SK API. In cases it's not available, I'd like to manually enter book deets myself.

The aim of the project is to practice 'GET' & 'POST' requests with Vue, as well as accessing 3d party API: https://stephen-king-api.onrender.com/?ref=public_apis&utm_medium=website. From purely FE perspective, I'd like to practice masonry layout and infinite scroll. Also aiming to structure the project in line with [Vue Style Guide](https://vuejs.org/style-guide/).

## Features
- Ability to view books by Stephen King that I've read with their title, description link, my impressions/notes, time of reading and rating.
- Ability to add a new book with title, description link, my impressions, time of reading and rating.
- When the title of the book is entered, the request is made to https://stephen-king-api.onrender.com/api/books and the information like "Year", "Title", "Pages", "Notes", "Villains" and "Publisher" are displayed. You can manually enter a link to description, since it's not available in the API. 
- Short stories collection are not available to view in the API as a book, but rather each short story is listed as a separate entry in /shorts. This means that for a story collection, I'd like to manually put in the details, so this option should be available to me.
- Ability to lazy load & infinite scroll.
- Ability to see the responsive layout as a masonry grid (think Pinterest).

## Possible extensions
- Ability to delete a book from the list
- Ability to sort books by year, title alphabetically, when read first.
- Ability to redirect to the book item detail layout to see more detailed information, such as movie adaptaions, book cover, critics reviews etc. using Vue Router




