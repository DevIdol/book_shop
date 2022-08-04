import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Books.module.css";
import Header from "./Header";
import Grid from "./Layout/Grid";
import List from "./Layout/List";
import AutoSwiper from "./HeaderImg";
const HeaderTitle = ({ title, link }) => {
  return (
    <div className={styles.header}>
      <h3>{title}</h3>
      <Link className={styles.viewAll} to={link}>
        View All
      </Link>
    </div>
  );
};

const AllBook = () => {
  const [showList, setShowList] = useState(false);
  const toggleShowList = () => {
    setShowList(!showList);
  };
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
          <HeaderTitle title="Myanmar Books" link="/book_shop" />
          <div className={styles.listView}>
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
          </div>
          <HeaderTitle title="English Books" link="/book_shop" />
          <div className={styles.listView}>
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <HeaderTitle title="Myanmar Books" link="/book_shop" />
          <div className={styles.gridView}>
            <Grid />
            <Grid />
            <Grid />
            <Grid />
            <Grid />
            <Grid />
            <Grid />
            <Grid />
            <Grid />
            <Grid />
            <Grid />
            <Grid />
            <Grid />
          </div>
          <HeaderTitle title="English Books" link="/book_shop" />
          <div className={styles.gridView}>
            <Grid />
            <Grid />
            <Grid />
            <Grid />
            <Grid />
            <Grid />
            <Grid />
            <Grid />
            <Grid />
            <Grid />
            <Grid />
            <Grid />
            <Grid />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default AllBook;
