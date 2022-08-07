import { Container } from "react-bootstrap";
import SideBar from "../../SideBar/SideBar";
import BookList from "../BookList";
import { books } from "../Data";

const AllMyaBook = () => {
  const MBooks = books
  .slice(0)
  .reverse()
  .filter((mya) => mya.type === "myanmar");

  return (
    <Container fluid>
      <SideBar />
      <BookList bookList={MBooks} />
    </Container>
  );
};

export default AllMyaBook;
