import { Fragment } from "react";
import styles from "./Grid.module.css";

const Grid = ({ img, title, author, price, className }) => {
  return (
    <Fragment>
      <div className={`${styles.grid} ${className}`}>
        <img className={styles.img} src={img} alt="bookImg" />

        <p className={styles.title}>{title}</p>
        <p className={styles.author}>{author}</p>
        <p className={styles.price}>Price: {price} MMK</p>
      </div>
    </Fragment>
  );
};

export default Grid;
