import { useState } from "react";
import styles from "../../Books.module.css";
import Header from "../../Header";

const Data = () => {
  const [showList, setShowList] = useState(false);
  const toggleShowList = () => {
    setShowList(!showList);
  };
  return (
    <div className={styles.books}>
      <Header
        title="ပုံပြင် စာအုပ်များ"
        showList={showList}
        toggleShowList={toggleShowList}
      />
    </div>
  );
  // return (
  //   <div className={styles.books}>
  //     <h1 className={styles.headerTitle}></h1>
  //   </div>
  // );
};

export default Data;
