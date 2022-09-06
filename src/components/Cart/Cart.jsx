import { Fragment, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  const qty = useSelector((state) => state.cart.quantity);

  const [quantity, setQuantity] = useState(qty);
  console.log(quantity);
  const cart = useSelector((state) => state.cart);
  const cartLists = cart.products;
  const [cartList, setCartList] = useState(cartLists);
  const removeCart = (index) =>
    setCartList((cartList) => cartList.filter((_, i) => i !== index));
  const clearCart = () => {
    setCartList([]);
    setQuantity(0);
  };
  return (
    <Container className={styles.cartContainer}>
      {cartList.length !== 0 ? (
        <Fragment>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {cartList.map((product, index) => (
                <CartItem
                  key={index}
                  onClick={() => removeCart(index)}
                  title={product.title}
                  price={product.price}
                  quantity={product.quantity}
                />
              ))}
            </div>
            <button className={styles.clearCartBtn} onClick={clearCart}>Clear Cart</button>
          </div>
          <div className={styles.summary}>
            <h3>Summary</h3>
            <p>
              Product Count:
              <span style={{ paddingLeft: "10px" }}>{cart.quantity}</span>
            </p>
            <p>
              Total Price:
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
