import { Link } from "react-router-dom";
import bookImg from "../../../../assets/img.jpg";
import styles from "./List.module.css";

const List = () => {
  return (
    <div className={styles.listView}>
      <div className={styles.list}>
        <img className={styles.img} src={bookImg} alt="bookImg" />
        <div>
          <p className={styles.title}>ဂရုမစိုက်ခြင်း အနုပညာ</p>
          <p className={styles.author}>ဆရာ ချမ်းမြေ့ဝင်း ဘာသာပြန်သည်</p>
          <p className={styles.price}>Price: 4500 MMK</p>
        </div>
      </div>  <div className={styles.list}>
        <img className={styles.img} src={bookImg} alt="bookImg" />
        <div>
          <p><Link to="/ViewBook" className={styles.title}>ဂရုမစိုက်ခြင်း အနုပညာ</Link></p>
          <p className={styles.author}>ဆရာ ချမ်းမြေ့ဝင်း ဘာသာပြန်သည်</p>
          <p className={styles.price}>Price: 4500 MMK</p>
        </div>
      </div>  <div className={styles.list}>
        <img className={styles.img} src={bookImg} alt="bookImg" />
        <div>
          <p className={styles.title}>ဂရုမစိုက်ခြင်း အနုပညာ</p>
          <p className={styles.author}>ဆရာ ချမ်းမြေ့ဝင်း ဘာသာပြန်သည်</p>
          <p className={styles.price}>Price: 4500 MMK</p>
        </div>
      </div>  <div className={styles.list}>
        <img className={styles.img} src={bookImg} alt="bookImg" />
        <div>
          <p className={styles.title}>ဂရုမစိုက်ခြင်း အနုပညာ</p>
          <p className={styles.author}>ဆရာ ချမ်းမြေ့ဝင်း ဘာသာပြန်သည်</p>
          <p className={styles.price}>Price: 4500 MMK</p>
        </div>
      </div>  <div className={styles.list}>
        <img className={styles.img} src={bookImg} alt="bookImg" />
        <div>
          <p className={styles.title}>ဂရုမစိုက်ခြင်း အနုပညာ</p>
          <p className={styles.author}>ဆရာ ချမ်းမြေ့ဝင်း ဘာသာပြန်သည်</p>
          <p className={styles.price}>Price: 4500 MMK</p>
        </div>
      </div>  <div className={styles.list}>
        <img className={styles.img} src={bookImg} alt="bookImg" />
        <div>
          <p className={styles.title}>ဂရုမစိုက်ခြင်း အနုပညာ</p>
          <p className={styles.author}>ဆရာ ချမ်းမြေ့ဝင်း ဘာသာပြန်သည်</p>
          <p className={styles.price}>Price: 4500 MMK</p>
        </div>
      </div>
    </div>
  );
};

export default List;
