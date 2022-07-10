import { useState } from "react";
import styles from "./Books.module.css";
import Header from "./Header";
import Grid from "./Layout/Grid";
import List from "./Layout/List";

const AllBook = () => {
  const [showList, setShowList] = useState(false);
  const toggleShowList = () => {
    setShowList(!showList);
  };
  return (
    <div className={styles.books}>
      <Header
        title="All Book"
        showList={showList}
        toggleShowList={toggleShowList}
      />
      {showList ? <List /> : <Grid />}
    </div>
  );
};

export default AllBook;
