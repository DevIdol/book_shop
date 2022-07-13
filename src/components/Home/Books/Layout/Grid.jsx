import { Fragment } from "react";
import { Link } from "react-router-dom";
import bookImg from "../../../../assets/img.jpg";
import styles from "./Grid.module.css";

const Grid = () => {
  return (
    <Fragment>
      <div className={styles.gridView}>
        <div className={styles.grid}>
          <img className={styles.img} src={bookImg} alt="bookImg" />
          <p>
            <Link to="/book_shop/ViewBook" className={styles.title}>
              ဂရုမစိုက်ခြင်း အနုပညာ
            </Link>
          </p>
          <p className={styles.author}>ဆရာ ချမ်းမြေ့ဝင်း ဘာသာပြန်သည်</p>
          <p className={styles.price}>Price: 4500 MMK</p>
        </div>
        <div className={styles.grid}>
          <img className={styles.img} src={bookImg} alt="bookImg" />
          <p className={styles.title}>ဂရုမစိုက်ခြင်း အနုပညာ</p>
          <p className={styles.author}>ဆရာ ချမ်းမြေ့ဝင်း ဘာသာပြန်သည်</p>
          <p className={styles.price}>Price: 4500 MMK</p>
        </div>
        <div className={styles.grid}>
          <img className={styles.img} src={bookImg} alt="bookImg" />
          <p className={styles.title}>ဂရုမစိုက်ခြင်း အနုပညာ</p>
          <p className={styles.author}>ဆရာ ချမ်းမြေ့ဝင်း ဘာသာပြန်သည်</p>
          <p className={styles.price}>Price: 4500 MMK</p>
        </div>
        <div className={styles.grid}>
          <img className={styles.img} src={bookImg} alt="bookImg" />
          <p className={styles.title}>ဂရုမစိုက်ခြင်း အနုပညာ</p>
          <p className={styles.author}>ဆရာ ချမ်းမြေ့ဝင်း ဘာသာပြန်သည်</p>
          <p className={styles.price}>Price: 4500 MMK</p>
        </div>
        <div className={styles.grid}>
          <img className={styles.img} src={bookImg} alt="bookImg" />
          <p className={styles.title}>ဂရုမစိုက်ခြင်း အနုပညာ</p>
          <p className={styles.author}>ဆရာ ချမ်းမြေ့ဝင်း ဘာသာပြန်သည်</p>
          <p className={styles.price}>Price: 4500 MMK</p>
        </div>
        <div className={styles.grid}>
          <img className={styles.img} src={bookImg} alt="bookImg" />
          <p className={styles.title}>ဂရုမစိုက်ခြင်း အနုပညာ</p>
          <p className={styles.author}>ဆရာ ချမ်းမြေ့ဝင်း ဘာသာပြန်သည်</p>
          <p className={styles.price}>Price: 4500 MMK</p>
        </div>
        <div className={styles.grid}>
          <img className={styles.img} src={bookImg} alt="bookImg" />
          <p className={styles.title}>ဂရုမစိုက်ခြင်း အနုပညာ</p>
          <p className={styles.author}>ဆရာ ချမ်းမြေ့ဝင်း ဘာသာပြန်သည်</p>
          <p className={styles.price}>Price: 4500 MMK</p>
        </div>
        <div className={styles.grid}>
          <img className={styles.img} src={bookImg} alt="bookImg" />
          <p className={styles.title}>ဂရုမစိုက်ခြင်း အနုပညာ</p>
          <p className={styles.author}>ဆရာ ချမ်းမြေ့ဝင်း ဘာသာပြန်သည်</p>
          <p className={styles.price}>Price: 4500 MMK</p>
        </div>
        <div className={styles.grid}>
          <img className={styles.img} src={bookImg} alt="bookImg" />
          <p className={styles.title}>ဂရုမစိုက်ခြင်း အနုပညာ</p>
          <p className={styles.author}>ဆရာ ချမ်းမြေ့ဝင်း ဘာသာပြန်သည်</p>
          <p className={styles.price}>Price: 4500 MMK</p>
        </div>
        <div className={styles.grid}>
          <img className={styles.img} src={bookImg} alt="bookImg" />
          <p className={styles.title}>ဂရုမစိုက်ခြင်း အနုပညာ</p>
          <p className={styles.author}>ဆရာ ချမ်းမြေ့ဝင်း ဘာသာပြန်သည်</p>
          <p className={styles.price}>Price: 4500 MMK</p>
        </div>
        <div className={styles.grid}>
          <img className={styles.img} src={bookImg} alt="bookImg" />
          <p className={styles.title}>ဂရုမစိုက်ခြင်း အနုပညာ</p>
          <p className={styles.author}>ဆရာ ချမ်းမြေ့ဝင်း ဘာသာပြန်သည်</p>
          <p className={styles.price}>Price: 4500 MMK</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Grid;
