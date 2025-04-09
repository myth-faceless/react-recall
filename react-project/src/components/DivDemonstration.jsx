import React from "react";
import styles from "../styles/DivDemonstration.module.css";

export const DivDemonstration = () => {
  return (
    <div className={styles.parentDiv}>
      <div className={styles.child1}>Child 1</div>
      <div className={styles.child2}>Child 2</div>
      <div className={styles.child3}>Child 3</div>
      <div className={styles.child4}>Child 4</div>
      <div className={styles.child5}>Child 5</div>
    </div>
  );
};
