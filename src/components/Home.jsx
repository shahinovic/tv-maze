import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home py-5">
      <Container>
        <h1>Tv Maze</h1>
        <p>
          Watch Tv Shows & Movies Online on TvMaze, or stream right to your
          smart Tv, Game Console, or PC, Mac, Mobile, Tablet and more, Start Now
        </p>
        <Link to="/tvShows">
          <Button variant="outline-primary">Start Now</Button>
        </Link>
      </Container>
    </div>
  );
};

export default Home;
