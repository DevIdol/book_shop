import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import img from "../../assets/mbook.jpg";
import styles from "./CartItem.module.css";

const CartItem = ({ onClick, title, price, quantity }) => {

  const [qty, setQty] = useState(quantity);
  const handleQuantity = (type) => {
    if (type === "dec") {
      qty > 1 && setQty((pre) => pre - 1);
    }
    if (type === "inc") {
      qty < 4 && setQty((pre) => pre + 1);
    }
  };


  return (
    <div className={styles.cartItems}>
      <img className={styles.img} src={img} alt="/book_img" />
      <div className={styles.desc}>
        <div>
          <p className={styles.bookName}>{title}</p>
          {/* <p className={styles.author}>ဆရာချမ်းမြေ့ဝင်း ဘာသာပြန်သည်</p> */}

          <div>
            <p>
              <span className={styles.amount}>Quantity:</span>
              <button
                style={{
                  backgroundColor: qty <= 1 && "transparent",
                  color: qty <= 1 && "#ccc",
                  cursor: qty <= 1 && "not-allowed",
                }}
                className={styles.decrease}
                onClick={() => handleQuantity("dec")}
                disabled={qty <= 1 && true}
              >
                -
              </button>
              <span className={styles.quantity}>{qty}</span>
              <button
                style={{
                  backgroundColor: qty >= 4 && "transparent",
                  color: qty >= 4 && "#ccc",
                  cursor: qty >= 4 && "not-allowed",
                }}
                className={styles.increase}
                onClick={() => handleQuantity("inc")}
                disabled={qty >= 4 && true}
              >
                +
              </button>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p className={styles.price}>{price} MMK</p>
            <BsTrash
              onClick={onClick}
              className={styles.deleteIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
