import { Container } from "react-bootstrap";
import Right from "./Right/Right";
import Left from "./Left/Left";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Container fluid>
      <div className={styles.left}>
        <Left />
      </div>
      <div className={styles.right}>
        <Right />
      </div>
    </Container>
  );
};

export default Home;
