import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import { useState } from 'react'
import productservice from '../Service/productservice';

function EditProduct() {
    const [product, setProduct] = useState({
        productName: "",
        description: "",
        price: "",
        status: ""
    })

    const {id} = useParams();
 

    //This func is used to set each variable of product obj
    const handleChange = (e) => {
        const value = e.target.value;
        setProduct({ ...product, [e.target.name]: value });
    }

    const [msg, setMsg] = useState("");

    //to show all data in edit form
    useEffect(() =>{
        productservice.getProductById(id).then((res) =>{
            setProduct(res.data);
        }).catch((error) =>{
            console.log(error);
        });
    },[]);

    //to navigate from edit to home page when update button is clicked
    const navigate =useNavigate();

    const productUpdate = (e) => {
        e.preventDefault();
        productservice.editProduct(product).then((res) => {
            navigate("/");
        }).catch((error) => {
            console.log(error);
        })
    };

    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card'>
                        <div className='card-header fs-3 text-center'>Edit Product </div>
                        {
                            msg && <p className='fs-4 text-center text-success'>{msg}</p>
                        }

                        <div className='card-body'>
                            <form onSubmit={(e) => productUpdate(e)
                            }>
                                <div className='mb-3'>
                                    <label>Enter Product Name</label>
                                    <input type='text' name='productName' className='form-control' onChange={(e) => handleChange(e)} value={product.productName}></input>
                                </div>

                                <div className='mb-3'>
                                    <label>Enter Description</label>
                                    <input type='text' name='description' className='form-control' onChange={(e) => handleChange(e)} value={product.description}></input>
                                </div>

                                <div className='mb-3'>
                                    <label>Enter Price</label>
                                    <input type='text' name='price' className='form-control' onChange={(e) => handleChange(e)} value={product.price}></input>
                                </div>

                                <div className='mb-3'>
                                    <label>Enter Status</label>
                                    <input type='text' name='status' className='form-control' onChange={(e) => handleChange(e)} value={product.status}></input>
                                </div>

                                <button className='btn btn-primary col-md-12' >Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProduct