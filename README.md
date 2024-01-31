# Mini_Netflix_Clone
This project is a mini Netflix clone developed using Angular and Bootstrap, designed to replicate the renowned streaming platform's home and search pages. Leveraging "The Movie Database" (TMDb) API, this application allows users to explore and discover movies from various genres, offering a rich and interactive viewing experience.

# Features
> Home Page:
- **Genre-specific Posters:** Browse through a curated selection of movie posters categorized by genres, including action, horror, anime, and more.
- **Detailed Movie Information:** Click on any poster to access detailed information about the movie, including its title, description, and cast.

> Search Page:
- **Dynamic Search Functionality:** Utilize the search page to find movies based on keywords, displaying relevant posters matching the search query.
- **Detailed Movie Information:** Select a searched movie poster to access comprehensive details, offering insights into the title, description, and cast.

# Technologies Used
- **Angular:** A powerful front-end framework for building dynamic web applications.
- **Bootstrap:** A responsive and mobile-first front-end framework for faster and easier web development.
- **The Movie Database (TMDb) API:** Integration with TMDb to fetch and display movie data.

# Getting Started
> Clone the Repository:
```
git clone https://github.com/ishitam77/Mini_Netflix_Clone.git
```

> Install Dependencies:
```
cd netflix-clone
npm install
```

> Run the Application:
```
ng serve
```

**Open your browser (Chrome) and navigate to http://localhost:4200/ to view the application.**
**Use Google Chrome for better Website View.**

# API Integration

> This project relies on TMDb API for fetching movie data. Ensure you have a valid API key from TMDb and replace it in the appropriate configuration file.
```
const apiKey = 'YOUR_TMDB_API_KEY';
const apiUrl = 'https://api.themoviedb.org/3';
```

