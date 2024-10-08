import React, { useEffect, useState } from 'react'
import productservice from '../Service/productservice';
import { Link } from 'react-router-dom';

function Home() {
    const [productList, setProductList] = useState([]);
    const [msg, setMsg] = useState("");

    useEffect(() => {
        init();
    }, []);

    const deleteProduct = (id) =>{
        productservice.deleteProduct(id).then((res) =>{
            setMsg("Product deleted Successfully");
            init();
        }).catch((error) =>{
            console.log(error);
        });
    }

    //after deleting product product is not removed from ui. To remove we have ro refresh it so for solving it we use below func
    const init = () =>{
        productservice.getAllProduct().then((res) => {
            setProductList(res.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='card'>
                            <div className="card-header fs-3 text-center">
                                All Products List
                                {
                            msg && <p className='fs-4 text-center text-success'>{msg}</p>
                        }
                            </div>
                            <div className='card-body'>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sr. No</th>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            productList.map((p, index) => (
                                                <tr>
                                                    <td>{index+1}</td>
                                                    <td>{p.productName}</td>
                                                    <td>{p.description}</td>
                                                    <td>{p.price}</td>
                                                    <td>{p.status}</td>
                                                    <td>
                                                        <Link to= {'/editProduct/'+p.id} className='btn btn-sm btn-primary m-2'>Edit</Link>
                                                        <button onClick={() => deleteProduct(p.id)} className='btn btn-sm btn-danger'>Delete</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home