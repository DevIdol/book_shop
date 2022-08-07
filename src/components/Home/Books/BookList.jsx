import { Pagination, Stack } from "@mui/material";
import React, {useState } from "react";
import usePagination from "../Pagination/Pagination";
import styles from "./BookList.module.css";
import Header from "./Header";
import Grid from "./Layout/Grid";
import List from "./Layout/List";

const BookList = ({ bookList }) => {
  const [showList, setShowList] = useState(false);
  const toggleShowList = () => {
    setShowList(!showList);
  };
  let [page, setPage] = useState(1);
  const PER_PAGE = 6;

  const count = Math.ceil(bookList.length / PER_PAGE);
  const _DATA = usePagination(bookList, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
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
          {_DATA.currentData().map(({ id, img, title, author, price }) => (
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
          {_DATA.currentData().map(({ id, img, title, author, price }) => (
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
      <div className={styles.pagination}>
      <Stack spacing={2}>
        <Pagination
          count={count}
          page={page}
          shape="circular"
          onChange={handleChange}
        />
      </Stack>
      </div>
    </div>
  );
};

export default BookList;
