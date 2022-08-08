import { useEffect } from "react";
import { Container } from "react-bootstrap";
import SideBar from "../../SideBar/SideBar";
import BookList from "../BookList";
import { books } from "../Data";

const AllMyaBook = () => {
  const MBooks = books
    .slice(0)
    .reverse()
    .filter((mya) => mya.type === "myanmar");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container fluid>
      <SideBar />
      <BookList bookList={MBooks} title="Myanmar Books" />
    </Container>
  );
};

export default AllMyaBook;
