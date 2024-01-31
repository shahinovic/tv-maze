import { Form, Button, Container } from "react-bootstrap";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function MovieBookingForm() {
  const selectedShow = useSelector((state) => state.selectedShow);
  console.log(selectedShow);
  const [name, setName] = useLocalStorage("name", "");

  const [email, setEmail] = useLocalStorage("email", "");

  const [movie, setMovie] = useLocalStorage("movie", "");

  const [date, setDate] = useLocalStorage("date", "");

  useEffect(() => {
    selectedShow && setMovie(selectedShow.name);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    // You can handle form submission here, e.g. by sending the data to a server or displaying a success message
    console.log("Form submitted with data:", { name, email, movie, date });
  }
  //   if (!selectedShow) return "loading...";
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formMovie">
          <Form.Label>Movie:</Form.Label>
          <Form.Control
            type="text"
            value={movie}
            onChange={(event) => setMovie(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label>Date:</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" className="mt-3" type="submit">
          Book ticket
        </Button>
      </Form>
    </Container>
  );
}

export default MovieBookingForm;
