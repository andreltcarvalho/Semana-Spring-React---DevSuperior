import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <h1 className="text-primary">Ola mundo!</h1>
      <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
