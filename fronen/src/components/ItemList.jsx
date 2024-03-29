import React, {useState, useEffect} from "react"
import axios from "axios";
import { Link } from "react-router-dom";

const ItemList = () => {
const [items, setItem] = useState([]);

useEffect(() => {
    getItems();
}, []);

const getItems = async () =>{
    const response = await axios.get("http://localhost:5000/users");
    setItem(response.data);
};

const deleteItem = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/users/${id}`);
        getItems();
    } catch (error) {
        console.log(error);
    }
};

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <Link to={`add`} className="button is-success">
                Tambah Barang
            </Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Barang</th>
                        <th>Kode</th>
                        <th>Harga</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.barang}</td>
                            <td>{item.kode}</td>
                            <td>{item.harga}</td>
                            <td>
                                <Link
                                    to={`edit/${item.id}`}
                                    className="button is-small is-info"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={()=> deleteItem(item.id)}
                                    className="button is-small is-danger"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ItemList;
