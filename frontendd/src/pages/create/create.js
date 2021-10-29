import React from "react";
import Nav from "src/components/nav/nav";
import styles from "src/create/create.module.scss";

const Create = () => {
  return (
    <>
      <Nav />
      <div className={styles["create-wrapper"]}>
        <h2>Create page</h2>
      </div>
    </>
  );
};
export default Create;
