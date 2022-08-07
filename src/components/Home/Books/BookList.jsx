import React, { useState } from "react";
import styles from "./BookList.module.css";
import Header from "./Header";
import Grid from "./Layout/Grid";
import List from "./Layout/List";

const BookList = ({ bookList }) => {
  const [showList, setShowList] = useState(false);
  const toggleShowList = () => {
    setShowList(!showList);
  };

  return (
    <div className={styles.books}>
      <div className={styles.newRelease}>
        <h3>Most Popular</h3>
        <div className={styles.releaseBook}>
          {bookList.slice(0, 6).map(({ id, img, title, author, price }) => (
            <List
              key={id}
              img={img}
              title={title}
              author={author}
              price={price}
            />
          ))}
        </div>
      </div>
      <Header
        title="Myanmar Books"
        showList={showList}
        toggleShowList={toggleShowList}
      />
      {showList ? (
        <div className={styles.list}>
          {bookList.map(({ id, img, title, author, price }) => (
            <List
              key={id}
              img={img}
              title={title}
              author={author}
              price={price}
            />
          ))}
        </div>
      ) : (
        <div className={styles.grid}>
          {bookList.map(({ id, img, title, author, price }) => (
            <Grid
              key={id}
              img={img}
              title={title}
              author={author}
              price={price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
