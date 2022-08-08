import { Container } from "react-bootstrap";
import SideBar from "../../../SideBar/SideBar";
import BookList from "../../BookList";
import { books } from "../../Data";


const MMTech = () => {
  const MBooks = books
  .slice(0)
  .reverse()
  .filter((mya) => mya.type === "myanmar");
return (
  <Container fluid>
    <SideBar />
    <BookList bookList={MBooks} title="နည်းပညာ စာအုပ်များ" />
  </Container>
);
};

export default MMTech;
