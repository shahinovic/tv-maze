# Movie and TV Show Booking App

This is a movie and TV show booking app built using React, React Bootstrap, Redux Toolkit, and Axios. The app allows users to search for TV shows and movies, view details about them, and book tickets. 

## src File Structure

```
├── app
│   └── store.js
├── App.jsx
├── components
│   ├── Home.jsx
│   ├── index.js
│   ├── MovieBookingForm.jsx
│   ├── MyNavBar.jsx
│   ├── TvShowCard.jsx
│   ├── TvShowDetails.jsx
│   └── TvShows.jsx
├── hooks
│   └── useLocalStorage.js
├── index.css
├── main.jsx
├── services
│   └── tvShowApi.js
└── slices
    └── selectedShowSlice.js
```

- `app/store.js` - Redux store configuration file.
- `App.jsx` - Main component that renders the application.
- `components` - Folder containing all the reusable components used in the app.
- `components/Home.jsx` - Home page component.
- `components/MovieBookingForm.jsx` - Component that renders a form for booking a movie ticket.
- `components/MyNavBar.jsx` - Navigation bar component.
- `components/TvShowCard.jsx` - Component that renders a card for a TV show.
- `components/TvShowDetails.jsx` - Component that displays details about a TV show.
- `components/TvShows.jsx` - Component that fetches and displays a list of TV shows.
- `hooks/useLocalStorage.js` - Custom hook that provides a wrapper for the local storage API.
- `index.css` - Global CSS file.
- `main.jsx` - Entry point of the application.
- `services/tvShowApi.js` - Axios API configuration file for fetching TV shows.
- `slices/selectedShowSlice.js` - Redux slice for the selected TV show.

## Running the App

To run the app, clone the repository and run the following commands in the project directory:

```
npm install
npm run dev
```

This will start the development server on http://localhost:5173/.

## Features

- Search for TV shows and movies using the search bar.
- View details about a TV show or movie.
- Book a movie ticket by filling out a form with personal and payment details.
- Persist the booking data using local storage.
