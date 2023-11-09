import "bulma/css/bulma.css";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
    return (
        <div>
            <NavBar/>
            <ItemListContainer greeting={"Bienvenidos miembros de la Foressi League"}/>
        </div>
    )
}

export default App;