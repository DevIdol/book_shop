import { useState } from "react";
import {BsTrash} from 'react-icons/bs'
import img from "../../assets/mbook.jpg";
import styles from "./CartItem.module.css";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity((pre) => pre - 1);
    }
    if (type === "inc") {
      quantity < 4 && setQuantity((pre) => pre + 1);
    }
  };
  return (
    <div className={styles.cartItems}>
      <img className={styles.img} src={img} alt="/book_img" />
      <div className={styles.desc}>
        <div>
          <p className={styles.bookName}>ဂရုမစိုက်ခြင်း အနုပညာ</p>
          <p className={styles.author}>ဆရာချမ်းမြေ့ဝင်း ဘာသာပြန်သည်</p>
          <p className={styles.price}>$ 24.22</p>
          <div>
            <p>
              <span className={styles.amount}>Quantity:</span>
              <button
                style={{
                  backgroundColor: quantity <= 1 && "transparent",
                  color: quantity <= 1 && "#ccc",
                  cursor: quantity <= 1 && "not-allowed",
                }}
                className={styles.decrease}
                onClick={() => handleQuantity("dec")}
                disabled={quantity <= 1 && true}
              >
                -
              </button>
              <span className={styles.quantity}>{quantity}</span>
              <button
                style={{
                  backgroundColor: quantity >= 4 && "transparent",
                  color: quantity >= 4 && "#ccc",
                  cursor: quantity >= 4 && "not-allowed",
                }}
                className={styles.increase}
                onClick={() => handleQuantity("inc")}
                disabled={quantity >= 4 && true}
              >
                +
              </button>
            </p>
          </div>
          <BsTrash/>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
