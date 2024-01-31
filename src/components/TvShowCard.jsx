import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function TvShowCard({ tvShow }) {
  return (
    <Col md={4} key={tvShow?.id}>
      <Card className="mb-4 text-bg-dark">
        {tvShow?.image?.medium ? (
          <Card.Img variant="top" src={tvShow?.image?.medium} />
        ) : (
          <div className="load-wraper">
            <div className="activity"></div>
          </div>
        )}
        <Card.Body>
          <Card.Title>{tvShow?.name}</Card.Title>
          <Card.Text>{tvShow?.genres?.join(", ")}</Card.Text>
          <Link to={`/tvShows/${tvShow?.id}`}>
            <Button variant="primary">Show Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default TvShowCard;
