import React, { useState } from 'react'
import productservice from '../Service/productservice';

function AddProduct() {

    const [product, setProduct] = useState({
        productName: "",
        description: "",
        price: "",
        status: ""
    })

    //This func is used to set each variable of product obj
    const handleChange = (e) => {
        const value = e.target.value;
        setProduct({ ...product, [e.target.name]: value });
    }

    const [msg, setMsg] = useState("");

    const productRegister = (e) => {
        e.preventDefault();
        productservice.saveProduct(product).then((res) => {
            console.log("Product Added Successfully");
            setMsg("Product Added Successfully");
            //To clear value after saving data
            setProduct({
                productName: "",
                description: "",
                price: "",
                status: ""
            })
        }).catch((error) => {
            console.log(error);
        })
    };

    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card'>
                        <div className='card-header fs-3 text-center'>Add Product </div>
                        {
                            msg && <p className='fs-4 text-center text-success'>{msg}</p>
                        }

                        <div className='card-body'>
                            <form onSubmit={(e) => productRegister(e)
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

                                <button className='btn btn-primary col-md-12' >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct