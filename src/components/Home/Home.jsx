import { Container } from "react-bootstrap";
import SideBar from "./SideBar/SideBar";
import AllBook from "./Books/AllBook";

const Home = () => {
  return (
    <Container fluid>
      <SideBar />
      <AllBook />
    </Container>
  );
};

export default Home;
