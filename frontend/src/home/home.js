import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { baseURL, headers } from "src/services/menu.service";
import Nav from "src/components/nav/nav";

import styles from "src/home/home.module.scss";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const history = useHistory();
  const countRef = useRef(0);

  useEffect(() => {
    retrieveAllArticles();
  }, [countRef]);

  const retrieveAllArticles = () => {
    console.log(`${baseURL}/diary/`);
    axios
      .get(`${baseURL}/diary/`)
      .then((res) => {
        console.log("111");
        setArticles(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <>
      <Nav />
      <div className={styles["main-wrapper"]}>
        <div className={styles["left-wrapper"]}>
          <div className={styles["title-wrapper"]}>
            <i className={`bi bi-chevron-left ${styles["arrow-left"]}`}></i>
            <h2 className="date">8월 21일</h2>
            <i className={`bi bi-chevron-right ${styles["arrow-right"]}`}></i>
          </div>
          <div className={styles["card-wrapper"]}>
            <div className={styles["card-title"]}>
              <p className={styles["time"]}>09:00</p>
              <p className={styles["title"]}>
                제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.
              </p>
            </div>
            <div className={styles["card-content"]}>
              내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
            </div>
          </div>
        </div>

        <div className={styles["right-wrapper"]}>
          <div className={styles["title-wrapper"]}>
            <i className={`bi bi-chevron-left ${styles["arrow-left"]}`}></i>
            <h1 className={styles["month"]}>AUGUST 2021</h1>
            <i className={`bi bi-chevron-right ${styles["arrow-right"]}`}></i>
          </div>
        </div>
        {/* <h1> Hello</h1>
        {articles &&
          articles.map((article, index) => (
            <div key={index}>
              <h2>{article.title}</h2>
              <p>{article.descriptions}</p>
              <p>{article.date}</p>
            </div>
          ))} */}
      </div>
    </>
  );
};

export default Home;
