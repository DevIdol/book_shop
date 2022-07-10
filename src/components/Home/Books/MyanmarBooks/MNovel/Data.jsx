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
        title="ဝတ္ထု စာအုပ်များ"
        showList={showList}
        toggleShowList={toggleShowList}
      />
    </div>
  );
};

export default Data;
