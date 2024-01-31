import { Container, Row } from "react-bootstrap";
import { useGetTvShowsQuery } from "../services/tvShowApi";
import TvShowCard from "./TvShowCard";
import { useState, useEffect } from "react";

const TvShows = () => {
  const [term, setTerm] = useState("all");
  const [debouncedTerm, setDebouncedTerm] = useState("all");
  const tvShows = useGetTvShowsQuery(debouncedTerm).data;

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [term]);

  const renderTvShows = () => {
    return tvShows.map((tvShow) => (
      <TvShowCard key={tvShow.show.id} tvShow={tvShow.show} />
    ));
  };

  return (
    <div className="TvShows py-5">
      <Container>
        <div className="header">
          <h1>Tv Shows</h1>
          <input
            type="text"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </div>
        <Row>{tvShows ? renderTvShows() : "loading..."}</Row>
      </Container>
    </div>
  );
};

export default TvShows;
