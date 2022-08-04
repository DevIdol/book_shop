import { Link } from "react-router-dom";
import bookImg from "../../../../assets/img.jpg";
import styles from "./List.module.css";

const List = () => {
  return (
    <div className={styles.list}>
      <img className={styles.img} src={bookImg} alt="bookImg" />
      <div className={styles.bookDesc}>
        <p>
          <Link to="/book_shop/ViewBook" className={styles.title}>
            ဂရုမစိုက်ခြင်း အနုပညာ
          </Link>
        </p>

        <p className={styles.author}>ဆရာ ချမ်းမြေ့ဝင်း ဘာသာပြန်သည်</p>
        <p className={styles.price}>Price: 4500 MMK</p>
      </div>
    </div>
  );
};

export default List;
