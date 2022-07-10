import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

import styles from "./Category.module.css";
import { catitems } from "./CatItems";

const Category = ({ onClose }) => {
  const myaBooks = catitems.filter((mya) => mya.type === "Myanmar Books");
  const engBooks = catitems.filter((eng) => eng.type === "English Books");
  return (
    <Container className={styles.categories}>
      <h1 className={styles.catTitle}>Categories</h1>
      <Accordion defaultActiveKey="0" flush className={styles.accordion}>
        <Accordion.Item eventKey="0" className={styles.accordion1}>
          <Accordion.Header>Myanmar Books</Accordion.Header>
          <Accordion.Body>
            <ul className={styles.catItems}>
              {myaBooks.map((book) => (
                <Link
                  onClick={onClose}
                  to={book.link}
                  key={book.id}
                  className={styles.catItem}
                >
                  {book.catType}
                </Link>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className={styles.accordion2}>
          <Accordion.Header>English Books</Accordion.Header>
          <Accordion.Body>
            <ul className={styles.catItems}>
              {engBooks.map((book) => (
                <Link to={book.link} key={book.id} className={styles.catItem}>
                  {book.catType}
                </Link>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Category;
