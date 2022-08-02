import styles from "./ViewBook.module.css";
import img from "../../../../assets/img.jpg";
import { useState } from "react";

const ViewBook = () => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity((pre) => pre - 1);
    }
    if (type === "inc") {
     quantity < 5 && setQuantity((pre) => pre + 1);
    }
  };
  return (
    <div className={styles.books}>
      <img className={styles.bookImg} src={img} alt="book_img" />
      <div className={styles.bookDesc}>
        <p className={styles.bookName}>ဂရုမစိုက်ခြင်း အနုပညာ</p>
        <p className={styles.author}>ဆရာ ချမ်းမြေ့ဝင်း ဘာသာပြန်သည်</p>
        <p className={styles.pages}>468 pages</p>
        <div>
          <p>
            <span className={styles.amount}>Quantity:</span>
            <button
              style={{
                backgroundColor: quantity <= 1 && "transparent",
                color: (quantity <= 1 || quantity) && "grey",
              }}
              className={styles.decrease}
              onClick={() => handleQuantity("dec")}
            >
              -
            </button>
            <span className={styles.quantity}>{quantity}</span>
            <button
              style={{
                backgroundColor: quantity >= 5 && "transparent",
                color: (quantity >= 5 || quantity) && "grey",
              }}
              className={styles.increase}
              onClick={() => handleQuantity("inc")}
            >
              +
            </button>
          </p>
        </div>
        <div className={styles.shopBtn}>
          <button className={styles.shopNow}>Shop Now</button>
          <button className={styles.addCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ViewBook;
