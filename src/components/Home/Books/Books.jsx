import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Books.module.css";
import Header from "./Header";
import Grid from "./Layout/Grid";
import List from "./Layout/List";
import AutoSwiper from "./HeaderImg";
import { books } from "./Data";
const HeaderTitle = ({ title, link }) => {
  return (
    <div className={styles.header}>
      <h3>{title}</h3>
      <Link className={styles.viewAll} to={`/book_shop/${link}`}>
        View All
      </Link>
    </div>
  );
};

const Books = () => {
  const [showList, setShowList] = useState(false);
  const toggleShowList = () => {
    setShowList(!showList);
  };
  const MBooks = books
    .slice(0)
    .reverse()
    .filter((mya) => mya.type === "myanmar");
  const EBooks = books
    .slice(0)
    .reverse()
    .filter((en) => en.type === "english");

  return (
    <div className={styles.books}>
      <AutoSwiper />
      <Header
        title="All Book"
        showList={showList}
        toggleShowList={toggleShowList}
      />

      {showList ? (
        <Fragment>
          <HeaderTitle title="Myanmar Books" link="myanmar_books" />
          <Link to="/book_shop/view_book" className={styles.listView}>
            {MBooks.slice(0,6).map(({ id, img, title, author, price }) => (
              <List
                key={id}
                img={img}
                title={title}
                author={author}
                price={price}
              />
            ))}
          </Link>
          <HeaderTitle title="English Books" link="english_books" />
          <Link to="/book_shop/view_book" className={styles.listView}>
            {EBooks.map(({ id, img, title, author, price }) => (
              <List
                key={id}
                img={img}
                title={title}
                author={author}
                price={price}
              />
            ))}
          </Link>
        </Fragment>
      ) : (
        <Fragment>
          <HeaderTitle title="Myanmar Books" link="myanmar_books" />
          <Link to="/book_shop/view_book" className={styles.gridView}>
            {MBooks.map(({ id, img, title, author, price }) => (
              <Grid
                key={id}
                img={img}
                title={title}
                author={author}
                price={price}
              />
            ))}
          </Link>
          <HeaderTitle title="English Books" link="english_books" />
          <Link to="/book_shop/view_book" className={styles.gridView}>
            {EBooks.map(({ id, img, title, author, price }) => (
              <Grid
                key={id}
                img={img}
                title={title}
                author={author}
                price={price}
              />
            ))}
          </Link>
        </Fragment>
      )}
    </div>
  );
};

export default Books;
