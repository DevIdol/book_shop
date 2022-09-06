import { Pagination, Stack } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addProduct } from "../../../redux/CartRedux";
import usePagination from "../Pagination/Pagination";
import styles from "./BookList.module.css";
import { useDispatch } from "react-redux";
import List from "./Layout/List";

const BookList = ({ bookList, title }) => {
  console.log(bookList);
  const product = Object.assign({}, ...bookList);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  // const handleQuantity = (type) => {
  //   if (type === "dec") {
  //     quantity > 1 && setQuantity((pre) => pre - 1);
  //   }
  //   if (type === "inc") {
  //     quantity < 4 && setQuantity((pre) => pre + 1);
  //   }
  // };
  const handleClick = () => {
    dispatch(
      addProduct({
        ...product,
        quantity,
        price: product.price * quantity,
      })
    );
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
            <div className={styles.bookDesc}>
              <Link to="/book_shop/view_book">
                <img className={styles.bookImg} src={img} alt="book_img" />
              </Link>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  paddingBottom: "4px",
                }}
              >
                <Link to="/book_shop/view_book" className={styles.bookDesRight}>
                  <p className={styles.bookName}>{title}</p>
                  <p className={styles.author}>{author}</p>
                  <p className={styles.price}>{price} MMK</p>
                </Link>
                <div className={styles.shopBtnMax}>
                  {/* <button className={styles.shopNow}>Buy Now</button> */}
                  <button onClick={handleClick} className={styles.addCart}>
                    Add To Cart
                  </button>
                </div>
              </div>
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
