// props = {
// items: [{}, ...],
// }

// import { useState } from "react";

// Possiamo destrutturare le props come segue:
function Card({ item }) {
    /* const [count, setCount] = useState(0);

    function handleIncCount() {
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
    }

    function handleSubCount() {
        setCount(prev => prev > 0 ? prev - 1 : prev);
    } */

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{item.titolo}</h5>
                <p className="card-text">{item.content}</p>
                {/* <button onClick={handleSubCount}>-</button>
                <p>{count}</p>
                <button onClick={handleIncCount}>+</button> */}
            </div>
        </div>
    )
}

export default Card;