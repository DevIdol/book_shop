import styles from "./List.module.css";

const List = ({ img, title, author, price }) => {
  return (
    <div className={styles.list}>
      <img className={styles.img} src={img} alt="bookImg" />
      <div className={styles.bookDesc}>
        <p className={styles.title}>{title}</p>

        <p className={styles.author}>{author}</p>
        <p className={styles.price}>Price: {price} MMK</p>
      </div>
    </div>
  );
};

export default List;
