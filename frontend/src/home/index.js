import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { baseURL, headers } from "src/services/menu.service";
import Nav from "src/components/nav/nav";

import "./index.css";

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
      <div className="main-wrapper">
        <div className="left-wrapper">
          <div className="title-wrapper">
            <i className="bi bi-chevron-left arrow-left"></i>
            <h1 className="date">8월 21일</h1>
            <i className="bi bi-chevron-right arrow-right"></i>
          </div>
        </div>

        <div className="right-wrapper">
          <div className="title-wrapper">
            <i className="bi bi-chevron-left arrow-left"></i>
            <h1 className="month">AUGUST 2021</h1>
            <i className="bi bi-chevron-right arrow-right"></i>
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
