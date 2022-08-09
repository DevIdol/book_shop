import styles from "./ViewBook.module.css";
import img from "../../../../assets/img.jpg";
import { useEffect, useState } from "react";
import Grid from "../Layout/Grid";
import { books } from "../Data";
import { Link } from "react-router-dom";

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
  const SliceBooks = books.slice(0).reverse();
  const onScrollTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.books}>
      <div className={styles.viewBook}>
        <div className={styles.bookDesc}>
          <img className={styles.bookImg} src={img} alt="book_img" />
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
            <div className={styles.shopBtnMax}>
              <button className={styles.shopNow}>Buy Now</button>
              <button className={styles.addCart}>Add To Cart</button>
            </div>
          </div>
        </div>
        <div className={styles.shopBtnMin}>
          <button className={styles.shopNow}>Buy Now</button>
          <button className={styles.addCart}>Add To Cart</button>
        </div>
        <div className={styles.productDetail}>
          <h3 style={{ textAlign: "center" }}>Product Details</h3>
          <p style={{ lineHeight: 1.6 }}>
            <span className={styles.title}>Title:</span>ဂရုမစိုက်ခြင်း အနုပညာ
          </p>
          <p style={{ lineHeight: 1.6 }}>
            <span className={styles.author}>Author:</span>ဆရာချမ်းမြေ့ဝင်း
            ဘာသာပြန်သည်
          </p>
          <p>
            <span className={styles.page}>Pages:</span>426
          </p>
          <p>
            <span className={styles.type}>Type:</span>Story
          </p>
          <p>
            <span className={styles.prices}>Price:</span>$ 24.22
          </p>
        </div>
      </div>
      <hr />
      <div className={styles.newRelease}>
        <h3>New Releases</h3>
        <Link
          onClick={onScrollTop}
          to="/book_shop/view_book"
          className={styles.releaseBook}
        >
          {SliceBooks.slice(0, 6).map(({ id, img, title, author, price }) => (
            <Grid
              key={id}
              img={img}
              title={title}
              author={author}
              price={price}
            />
          ))}
        </Link>
      </div>
    </div>
  );
};

export default ViewBook;
