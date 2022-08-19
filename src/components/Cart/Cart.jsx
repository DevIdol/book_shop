import { Container } from "react-bootstrap";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <Container className={styles.cartContainer}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px"
        }}
      >
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className={styles.summary}>
        <h3>Summary</h3>
        <p>
          Product Count: <span style={{ paddingLeft: "10px" }}>{4}</span>
        </p>
        <p>
          Total Price: <span style={{ paddingLeft: "10px" }}>{8000}</span> MMK
        </p>
        <button className={styles.checkOut}>Check Out</button>
      </div>
    </Container>
  );
};

export default Cart;
