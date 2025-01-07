import Form from "./Form";
import Card from "./Card";
import cardList from "../data/cardList";
import axios from "axios";
import React, { useState, useEffect } from 'react';

function Main() {

    const [postList, setPostList] = useState([]);
    const apiURL = "http://localhost:3000/posts";

    useEffect(() => {
        getData();
    }, []);

    function getData() {
        axios
            .get(apiURL)
            .then((res) => {
                console.log(res.data);
                setPostList(res.data);
            });
    }

    return (
        <main className="d-flex flex-column justify-content-center align-items-center">
            <h1>Lista Card </h1>
            <Form />
            <div className="d-flex justify-content-center align-items-center flex-wrap">
                {/*cardList*/postList.map((post) => (
                    <Card item={post} key={post.id} />
                ))}
            </div>
        </main>
    )
}

export default Main;