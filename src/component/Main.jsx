import Form from "./Form";
import Card from "./Card";
import cardList from "../data/cardList";

function Main() {
    return (
        <main className="d-flex flex-column justify-content-center align-items-center">
            <h1>Lista Card </h1>
            <Form />
            <div className="d-flex justify-content-center align-items-center flex-wrap">
                <Card items={cardList} />
            </div>
        </main>
    )
}

export default Main;