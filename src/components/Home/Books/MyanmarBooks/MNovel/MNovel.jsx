import { Container } from "react-bootstrap";
import SideBar from "../../../SideBar/SideBar";
import BookList from "../../BookList";
import { books } from "../../Data";

const MNovel = () => {
  const MBooks = books
    .slice(0)
    .reverse()
    .filter((mya) => mya.type === "myanmar");
  return (
    <Container fluid>
      <SideBar />
      <BookList bookList={MBooks}   title="ဝတ္ထု စာအုပ်များ" />
    </Container>
  );
};

export default MNovel;
