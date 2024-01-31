import { Route, Routes } from "react-router-dom";
import { MyNavBar, Home, TvShows, TvShowDetails } from "./components";
import MovieBookingForm from "./components/MovieBookingForm";

const App = () => {
  //https://api.tvmaze.com/search/shows?q=all

  return (
    <div className="App text-bg-dark">
      <MyNavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/tvShows" element={<TvShows />} />
        <Route path="/tvShows/:id" element={<TvShowDetails />} />
        <Route path="/book-ticket" element={<MovieBookingForm />} />
      </Routes>
    </div>
  );
};

export default App;
