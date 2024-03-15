import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
    const [barang, setBarang] = useState("");
    const [kode, setKode] = useState("");
    const [harga, setHarga] = useState("");
    const navigate = useNavigate();

    const saveItem = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                barang,
                kode,
                harga
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveItem}>
                <div className="field">
                    <label className="label">Barang</label>
                    <div className="control">
                        <input
                            type="text"
                            className="input"
                            value={barang}
                            onChange={(e)=> setBarang(e.target.value)}
                            placeholder='Barang'
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Kode</label>
                    <div className="control">
                        <input
                            type="number"
                            className="input"
                            value={kode.toString()}
                            onChange={(e)=> setKode(parseInt(e.target.value))}
                            placeholder='Kode'
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Harga</label>
                    <div className="control">
                        <input
                            type="number"
                            className="input"
                            value={harga.toString()}
                            onChange={(e)=> setHarga(parseInt(e.target.value))}
                            placeholder='Harga'
                        />
                    </div>
                </div>
                <div className="field">
                    <button type='submit' className='button is-success'>Save</button>
                </div>
            </form>
        </div>
    </div>
  )
};

export default AddItem;
