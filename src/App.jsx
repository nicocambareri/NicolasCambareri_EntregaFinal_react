import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <NavBarComponent />
      <ItemListContainer greeting="Bienvenidos a mi Tienda de Pesca"/>

    </div>
  );
}

export default App;
