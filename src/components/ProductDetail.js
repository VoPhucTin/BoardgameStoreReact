import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { DATA } from '../shared/Data'
import { useDispatch } from 'react-redux'
import { addItem, delItem } from '../redux/action/index'

const ProductDetail = () => {
    const [cart, setCart] = useState("Add to Cart");
    const proid = useParams();
    const proDetail = DATA.filter(data => data.id === proid.id);
    const product = proDetail[0];
    console.log(product);

    const dispatch = useDispatch();

    const handleCart = (product) => {
        if (cart === "Add to Cart"){
            dispatch(addItem(product));
            setCart("Remove from Cart");
        }
        else{
            dispatch(delItem(product));
            setCart("Add to Cart");
        }
            
    }
    return (
        <div>
            <div className='container my-5 py-3'>
                <div className='row'>
                    <div className='col-md-6 d-fex justify-content-center mx-auto product'>
                        <img src={product.image} alt={product.title} height="400px" />
                    </div>
                    <div className='col-md-6 d-fex flex-column justify-content-center'>
                        <h1 className='display-5 fw-blod'>{product.title}</h1>
                        <hr />
                        <h2 className='my-4'>${product.price}</h2>
                        <p className='lead'>{product.desc}</p>
                        <button className='btn btn-outline-primary' onClick={() => handleCart(product)}>{cart}</button>
                        <NavLink to='/Cart' className='btn btn-outline-success ms-2 px-3 py-2'>Go to Cart</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail