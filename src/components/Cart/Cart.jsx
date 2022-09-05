import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <Container className={styles.cartContainer}>
      {cart.products.length !== 0 ? (
        <Fragment>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {cart.products.map((product, index) => (
              <CartItem
                key={index}
                title={product.title}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          </div>
          <div className={styles.summary}>
            <h3>Summary</h3>
            <p>
              Product Count:{" "}
              <span style={{ paddingLeft: "10px" }}>{cart.quantity}</span>
            </p>
            <p>
              Total Price:{" "}
              <span style={{ paddingLeft: "10px" }}>{cart.total}</span> MMK
            </p>
            <button className={styles.checkOut}>Check Out</button>
          </div>
        </Fragment>
      ) : (
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Empty Cart
        </h1>
      )}
    </Container>
  );
};

export default Cart;
