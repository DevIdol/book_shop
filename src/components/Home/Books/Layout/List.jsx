import { Link } from "react-router-dom";
import styles from "./List.module.css";

const List = ({img, title, author, price}) => {
  return (
    <div className={styles.list}>
      <img className={styles.img} src={img} alt="bookImg" />
      <div className={styles.bookDesc}>
        <p>
          <Link to="/book_shop/ViewBook" className={styles.title}>
           {title}
          </Link>
        </p>

        <p className={styles.author}>{author}</p>
        <p className={styles.price}>Price: {price} MMK</p>
      </div>
    </div>
  );
};

export default List;
