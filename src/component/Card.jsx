function Card({ items }) {
    return (
        items.map((item) => (
            <div className="card" key={item.id} style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{item.titolo}</h5>
                    <p className="card-text">{item.content}</p>
                </div>
            </div>
        ))
    )
}

export default Card;