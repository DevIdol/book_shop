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
      quantity < 4 && setQuantity((pre) => pre + 1);
    }
  };
  return (
    <div className={styles.books}>
      <div className={styles.bookDesc}>
        <img className={styles.bookImg} src={img} alt="book_img" />
        <div>
          <p className={styles.bookName}>ဂရုမစိုက်ခြင်း အနုပညာ</p>
          <p className={styles.author}>ဆရာချမ်းမြေ့ဝင်း ဘာသာပြန်သည်</p>
          <p className={styles.pages}>468 pages</p>
          <p className={styles.price}>$ 24.22</p>
          <div>
            <p>
              <span className={styles.amount}>Quantity:</span>
              <button
                style={{
                  backgroundColor: quantity <= 1 && "transparent",
                  color: quantity <= 1 && "#ccc",
                }}
                className={styles.decrease}
                onClick={() => handleQuantity("dec")}
              >
                -
              </button>
              <span className={styles.quantity}>{quantity}</span>
              <button
                style={{
                  backgroundColor: quantity >= 4 && "transparent",
                  color: quantity >= 4 && "#ccc",
                }}
                className={styles.increase}
                onClick={() => handleQuantity("inc")}
              >
                +
              </button>
            </p>
          </div>
          <div className={styles.shopBtnMax}>
            <button className={styles.shopNow}>Shop Now</button>
            <button className={styles.addCart}>Add To Cart</button>
          </div>
        </div>
      </div>
      <div className={styles.shopBtnMin}>
        <button className={styles.shopNow}>Shop Now</button>
        <button className={styles.addCart}>Add To Cart</button>
      </div>
    </div>
  );
};

export default ViewBook;
