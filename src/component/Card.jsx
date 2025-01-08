// props = {
// items: [{}, ...],
// }

// import { useState } from "react";

// Possiamo destrutturare le props come segue:
function Card({ item, onRemove }) {
    /* const [count, setCount] = useState(0);

    function handleIncCount() {
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
    }

    function handleSubCount() {
        setCount(prev => prev > 0 ? prev - 1 : prev);
    } */

    function deletePost() {
        fetch("http://localhost:3000/posts/" + item.id, { method: "DELETE" })
            .then(() => {
                onRemove(item.id);
            })
            .catch((err) => {
                console.error("Errore durante la cancellazione:", err);
            });
    }

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <img src={item.img} className="card-img-top" alt={item.img} />
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.content}</p>
                <button onClick={deletePost}>X</button>
                {/* <button onClick={handleSubCount}>-</button>
                <p>{count}</p>
                <button onClick={handleIncCount}>+</button> */}
            </div>
        </div>
    )
}

export default Card;