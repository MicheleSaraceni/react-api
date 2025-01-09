import Form from "./Form";
import Card from "./Card";
import AddCard from "./addCard";
//import cardList from "../data/cardList";
import axios from "axios";
import React, { useState, useEffect } from 'react';

function Main() {

    const [postList, setPostList] = useState([]);
    const apiURL = "http://localhost:3000/posts";

    useEffect(() => { getData() }, []);

    function getData() {
        axios
            .get(apiURL)
            .then((res) => {
                console.log(res.data);
                setPostList(res.data);
            });
    }

    function handleRemoveItem(id) {
        getData();
        // setPostList((prevPosts) => prevPosts.filter((item) => item.id !== id));
    }


    /**
     * Refreshes the post list by re-fetching data from the server.
     * This function is typically called after a new post is added to ensure the UI reflects the most current data.
     */

    function onAdd() {
        /// Piu istruzioni
        getData();
    }

    return (
        <main className="d-flex flex-column justify-content-center align-items-center">
            <h1>Lista Card </h1>
            <Form />
            <div className="d-flex justify-content-center align-items-center flex-wrap">
                {/*cardList*/postList.map((post) => (
                    <Card item={post} key={post.id} onRemove={handleRemoveItem} />
                ))}
            </div>
            <AddCard onAdd={onAdd} />
        </main>
    )
}

export default Main;