import { useState } from "react";
import styles from "../Data.module.css";
import Header from "../../Header";
import Grid from "../../Layout/Grid";
import List from "../../Layout/List";
const Data = () => {
  const [showList, setShowList] = useState(false);
  const toggleShowList = () => {
    setShowList(!showList);
  };
  return (
    <div className={styles.books}>
      <div className={styles.newRelease}>
        <h3>Most Popular</h3>
        <div className={styles.releaseBook}>
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
        </div>
      </div>
      <Header
        title="ဘာသာရေး စာအုပ်များ"
        showList={showList}
        toggleShowList={toggleShowList}
      />
       {showList ? (
        <div className={styles.list}>
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
        </div>
      ) : (
        <div className={styles.grid}>
          <Grid />
          <Grid />
          <Grid />
          <Grid />
          <Grid />
          <Grid />
        </div>
      )}
    </div>
  );
};

export default Data;
