import { Container } from "react-bootstrap";
import SideBar from "./SideBar/SideBar";
import Books from "./Books/Books";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <Container fluid>
      <SideBar />
      <Books />
    </Container>
  );
};

export default Home;
