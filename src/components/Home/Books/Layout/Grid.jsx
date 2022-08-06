import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./Grid.module.css";

const Grid = ({img, title, author, price}) => {
  return (
    <Fragment>
      <div className={styles.grid}>
        <img className={styles.img} src={img} alt="bookImg" />
        <p>
          <Link to="/book_shop/ViewBook" className={styles.title}>
          {title}
          </Link>
        </p>
        <p className={styles.author}>{author}</p>
        <p className={styles.price}>Price: {price} MMK</p>
      </div>
    </Fragment>
  );
};

export default Grid;
