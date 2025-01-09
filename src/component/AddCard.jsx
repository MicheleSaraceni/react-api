import axios from 'axios';

function AddCard({ onAdd }) {

    function saveData() {
        const title = document.querySelector('input[name="title"]').value;
        const content = document.querySelector('input[name="content"]').value;
        console.log(title, content);


        // Invio i dati al server tramite chiamata POST:
        axios.post('http://localhost:3000/posts', {
            title: title,
            content: content
        }).then(response => {
            console.log('Dati inviati con successo:', response.data);
            onAdd();
        }).catch(error => {
            console.error('Errore durante l\'invio dei dati:', error);
        });
    }

    return (
        <>
            <input type="text" name="title" placeholder="Titolo" />
            <input type="text" name="content" placeholder="Contenuto" />
            <button className="btn btn-primary" onClick={saveData}>Aggiungi Card</button>


        </>
    )
}

export default AddCard;