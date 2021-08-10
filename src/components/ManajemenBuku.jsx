import {useState} from "react";

function ManajemenBuku({bookList,store,update,remove}){
    // Form Create
    const [form,setForm]=useState();

    function showCreate(){
        setForm("create");
    }
    // End Form Create

    // Add Book
    const [inputBook,SetInputBook]=useState();

    function handleJudul(event){
        SetInputBook({...inputBook,judul: event.target.value});
    }

    function handlePengarang(event){
        SetInputBook({...inputBook,pengarang: event.target.value});
    }

    function handleHarga(event){
        SetInputBook({...inputBook,harga: event.target.value});
    }

    function handleStok(event){
        SetInputBook({...inputBook,stok: event.target.value});
    }

    function submitAdd(event){
        event.preventDefault();
        store(inputBook);
    }
    // End Add Book

    // Edit Book
    function showEdit(book){
        SetInputBook(book);
        setForm("edit");
    }

    function submitChange(event){
        event.preventDefault();
        update(inputBook);
        setForm("");
    }
    // End Edit Book

    // Remove Book Item
    function deleteBook(book){
        remove(book);
    }
    // End Remove Book Item
    
    console.log(bookList);
    return(
        <div className="container mt-3">
            <h1 className="text-center">Manajemen Buku</h1>

            {form === "create" && ( // Show Tambah Buku
            <div id="formTambah">
                <h5>Tambah Buku</h5>
                <hr/>
                <form className="form-group row" onSubmit={submitAdd}>
                    <div className="col-3">
                        <input type="text" name="judul" className="form-control mx-2" placeholder="Judul" onChange={handleJudul}/>
                    </div>
                    <div className="col-3">
                        <input type="text" name="pengarang" className="form-control mx-2" placeholder="Pengarang" onChange={handlePengarang}/>
                    </div>
                    <div className="col-2">
                        <input type="number" name="harga" className="form-control mx-2" placeholder="Harga" onChange={handleHarga}/>
                    </div>
                    <div className="col-2">
                        <input type="number" name="stok" className="form-control mx-2" placeholder="Stok" onChange={handleStok}/>
                    </div>
                    <div className="col-2">
                        <input type="submit" className="btn btn-primary ml-5" value="Simpan"/>
                    </div>
                </form>
                </div>
            )}

            {form === "edit" && ( // Show Ubah Buku
            <div id="formUbah">
                <h5>Ubah Buku</h5>
                <hr/>
                <form className="form-group row" onSubmit={submitChange}>
                    <div className="col-3">
                        <input type="text" name="judul" className="form-control mx-2" placeholder="Judul" onChange={handleJudul} value={inputBook.judul}/>
                    </div>
                    <div className="col-3">
                        <input type="text" name="pengarang" className="form-control mx-2" placeholder="Pengarang" onChange={handlePengarang} value={inputBook.pengarang}/>
                    </div>
                    <div className="col-2">
                        <input type="number" name="harga" className="form-control mx-2" placeholder="Harga" onChange={handleHarga} value={inputBook.harga}/>
                    </div>
                    <div className="col-2">
                        <input type="number" name="stok" className="form-control mx-2" placeholder="Stok" onChange={handleStok} value={inputBook.stok}/>
                    </div>
                    <div className="col-2">
                        <input type="submit" className="btn btn-primary ml-5" value="Simpan"/>
                    </div>
                </form>
                
            </div>
            )}

            <div id="daftarBuku"> {/* List Buku */}
                <h2 className="mt-3"></h2>
                <hr />
                <button className="btn btn-primary m-2" onClick={showCreate}>Tambah Buku</button>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Judul</th>
                            <th>Pengarang</th>
                            <th>Harga</th>
                            <th>Stok</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookList.map((book,index) => (
                        <tr key={index}>
                            <th> {index+1} </th>
                            <th> {book.judul} </th>
                            <th> {book.pengarang} </th>
                            <th> {book.harga} </th>
                            <th> {book.stok} </th>
                            <th> 
                                <button className="btn btn-info mr-3" onClick={() => showEdit(book)}>Edit</button>&nbsp;
                                <button className="btn btn-danger" onClick={() => deleteBook(book)}>Hapus</button>
                            </th>
                        </tr>
                         ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ManajemenBuku;