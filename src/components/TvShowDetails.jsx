import { useParams } from "react-router";
import { useGetTvShowDetailsQuery } from "../services/tvShowApi";
import { AiFillStar } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedShow } from "../slices/selectedShowSlice";

const TvShowDetails = () => {
  const { id } = useParams();
  const showDetails = useGetTvShowDetailsQuery(id).data;
  const dispatch = useDispatch();
  function handleSelect(tvShow) {
    dispatch(setSelectedShow(tvShow));
  }
  console.log(showDetails);
  if (!showDetails) return "loading...";
  return (
    <div className="TvShowDetails">
      <div className="text">
        <h2>{showDetails.name}</h2>

        <div
          className="summary"
          dangerouslySetInnerHTML={{ __html: showDetails.summary }}
        ></div>
        <div className="details">
          {showDetails.rating.average && (
            <span className="rating">
              rating:{" "}
              <span>
                {showDetails.rating.average}
                <AiFillStar />
              </span>
            </span>
          )}

          {showDetails.language && (
            <span className="language">
              Language: <span>{showDetails.language}</span>
            </span>
          )}

          {showDetails.genres && (
            <div className="genres">
              Genres:{" "}
              {showDetails.genres.map((genre) => (
                <span className="genre" key={genre}>
                  {genre}
                </span>
              ))}
            </div>
          )}

          {showDetails.status && (
            <span className="status">
              status: <span>{showDetails.status}</span>
            </span>
          )}

          {showDetails.runtime && (
            <span className="runtime">
              Runtime: <span>{showDetails.runtime}Min</span>
            </span>
          )}
        </div>
        <div>
          {showDetails.officialSite && (
            <a href={showDetails.officialSite} className="me-3" target="_blank">
              <Button variant="primary">Official Site</Button>
            </a>
          )}
          <Link to="/book-ticket" onClick={() => handleSelect(showDetails)}>
            <Button variant="primary">Book Ticket</Button>
          </Link>
        </div>
      </div>
      {showDetails.image?.original && (
        <div className="img-container">
          <img src={showDetails.image.original} alt={showDetails.name} />
        </div>
      )}
    </div>
  );
};

export default TvShowDetails;
