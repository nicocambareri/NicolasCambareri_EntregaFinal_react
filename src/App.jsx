import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./App.css";




function App() {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <NavBarComponent />
      <ItemListContainer greeting={"Bienvenidos a mi tienda de Pesca Deportiva"}/>

    </div>
  );
}

export default App;
