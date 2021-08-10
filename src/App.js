import { BrowserRouter,Switch,Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/Navbar";
import Beranda from "./components/Beranda";
import ManajemenBuku from "./components/ManajemenBuku";

function App() {

  // Store Book Data
  function storeData(inputBook){
    console.log(inputBook);
    alert("Data Berhasil Ditambahkan!");
  }
  // End Store Book Data

  // Update Book Data
  function updateData(inputBook){
    console.log(inputBook);
    alert("Data Berhasil Diperbarui!");
  }
  // End Update Book Data

  function deleteData(book){
    console.log(book);
    alert("Data Berhasil Dihapus!");
  }

  const [books,setBooks] = useState([
    {_id: 1, judul: "Laskar Pelangi", pengarang: "Andrea Hirata", harga: 80000, stok: 7},
    {_id: 2, judul: "Bumi", pengarang: "Tere Liye", harga: 85000, stok: 5},
    {_id: 3, judul: "Earth", pengarang: "Valentino", harga: 100000, stok: 8}
  ]);

  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route path="/" exact>
            <Beranda bookList={books}/>        
          </Route>

          <Route path="/manajemen-buku">
            <ManajemenBuku bookList={books} store={storeData} update={updateData} remove={deleteData}/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
