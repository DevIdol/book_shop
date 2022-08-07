import { Container } from "react-bootstrap";
import SideBar from "./SideBar/SideBar";
import Books from "./Books/Books";

const Home = () => {
  return (
    <Container fluid>
      <SideBar />
      <Books />
    </Container>
  );
};

export default Home;
