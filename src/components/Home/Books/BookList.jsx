import { Pagination, Stack } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import usePagination from "../Pagination/Pagination";
import styles from "./BookList.module.css";

import List from "./Layout/List";


const BookList = ({ bookList, title }) => {
 
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
        <Link to="/book_shop/view_book" className={styles.releaseBook}>
          {bookList.slice(0, 6).map(({ id, img, title, author, price }) => (
            <List
              key={id}
              img={img}
              title={title}
              author={author}
              price={price}
            />
          ))}
        </Link>
      </div>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>{title}</h1>
      </div>

      <div className={styles.grid}>
        {_DATA.currentData().map(({ id, img, title, author, price }) => (
          <div className={styles.wrapper} key={id}>
            <Link to="/book_shop/view_book" className={styles.bookDesc}>
              <img className={styles.bookImg} src={img} alt="book_img" />
              <div className={styles.bookDesRight}>
                <p className={styles.bookName}>{title}</p>
                <p className={styles.author}>{author}</p>
                <p className={styles.price}>{price} MMK</p>
              </div>
            </Link>
            <div className={styles.shopBtnMax}>
              <button className={styles.shopNow}>Buy Now</button>
              <button className={styles.addCart}>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <Stack spacing={2}>
          <Pagination
            color="primary"
            size="large"
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
