import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';



function App () {
  console.log('App component is rendering');
  return (
    <>
      <NavBar/>
      <ItemListContainer text={"Proximamente!!"}/>
    </>
  );
}

export default App;

