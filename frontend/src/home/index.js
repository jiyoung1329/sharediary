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
        axios.get(`${baseURL}/diary/`, {
            headers : {
                headers,
            },
        })
        .then((res) => {
            setArticles(response.data);
        })
        .catch((e) => {
            console.error(e);
        });
    };

    return (
        <div>
        {articles && articles.map((article, index) => (
            <div>
                <h2>{article.title}</h2>
                <p>{article.descriptions}</p>
                <p>{article.date}</p>
            </div>

        ))}

        </div>
        

    )
}

export default Home;
