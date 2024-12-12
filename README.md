# Book app
This app is made with Vue 3 and Vite, using Firebase on the BE.

The aim of the project is to practice 'GET' & 'POST' requests with Vue, as well as accessing 3d party API: https://stephen-king-api.onrender.com/?ref=public_apis&utm_medium=website.From purely FE perspective, I'd like to practice masonry layout and infinite scroll. Also aiming to structure the project in line with Vue Style Guide: https://vuejs.org/style-guide/

Proposed features:
-Ability to view books by Stephen King that I've read with their title, description and rating.
-Ability to add a new book with title, description and rating.
-When the title of the book is entered, the request is made to https://stephen-king-api.onrender.com/api/books and the information like "Year", "Title", "Pages", "Notes", "Villains" and "Publisher" are displayed. You can manually enter a link to description, since it's not available in the API. 
-Ability to lazy load & infinite scroll.
-Ability to see the responsive layout as a masonry grid (think Pinterest).


