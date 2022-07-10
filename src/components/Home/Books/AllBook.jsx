import { useState } from "react";
import styles from "./Books.module.css";
import Header from "./Header";

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
    </div>
  );
};

export default AllBook;
