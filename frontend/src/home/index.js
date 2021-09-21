import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { baseURL, headers } from "src/services/menu.service";
import { useHistory } from "react-router-dom";

const Home = () => {
    const [articles, setArticles] = useState([]);
    const history = useHistory();
    const countRef = useRef(0);

    useEffect(() => {
        retrieveAllArticles();
    }, [countRef]);

    const retrieveAllArticles = () => {
        console.log(`${baseURL}/diary/`)
        axios.get(`${baseURL}/diary/`)
        .then((res) => {
            console.log("111")
            setArticles(res.data);
        })
        .catch((e) => {
            console.error(e);
        });
    };

    return (
        <div>
            <h1> HEllo</h1>
        {articles && articles.map((article, index) => (
            <div key={index}>
                <h2>{article.title}</h2>
                <p>{article.descriptions}</p>
                <p>{article.date}</p>
            </div>

        ))}

        </div>
        

    )
}

export default Home;
