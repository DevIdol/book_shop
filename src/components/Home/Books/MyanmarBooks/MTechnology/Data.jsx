import { useState } from "react";
import styles from "../All.module.css";
import Header from "../../Header";
import Grid from "../../Layout/Grid";
import List from "../../Layout/List";
import { books } from "../../Data";
const Data = () => {
  const [showList, setShowList] = useState(false);
  const toggleShowList = () => {
    setShowList(!showList);
  };
  const MBooks = books
    .slice(0)
    .reverse()
    .filter((mya) => mya.type === "myanmar");
  return (
    <div className={styles.books}>
      <div className={styles.newRelease}>
        <h3>Most Popular</h3>
        <div className={styles.releaseBook}>
          {MBooks.slice(0, 6).map(({ id, img, title, author, price }) => (
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
        title="နည်းပညာ စာအုပ်များ"
        showList={showList}
        toggleShowList={toggleShowList}
      />
      {showList ? (
        <div className={styles.list}>
          {MBooks.slice(0, 6).map(({ id, img, title, author, price }) => (
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
          {MBooks.slice(0, 6).map(({ id, img, title, author, price }) => (
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

export default Data;
