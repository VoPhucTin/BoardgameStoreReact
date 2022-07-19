import React from 'react'
import { Nav } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { delItem } from '../redux/action/index'

const CartComponent = () => {
    const state = useSelector((state) => state.addItem)
    const dispatch = useDispatch()

    const handleClose = (product) => {
        dispatch(delItem(product))
    }

    const cartItems = (cartItem) => {
        return (
            <div className='px-4 my-5 bg-light rounded-3'>
                <div className='container py-4'>
                    <button onClick={() => handleClose(cartItem)} className='btn-close float-right-end' aria-label='Close'></button>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <img src={cartItem.image} alt={cartItem.title} height='200px' width='180px' />
                        </div>

                        <div className='col-md-4'>
                            <h3>{cartItem.title}</h3>
                            <p className='lead fw-blod'>${cartItem.price}</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    const emptyCart = () => {
        return (
            <div className='px-4 my-5 bg-light rounded-3'>
                <div className='container py-4'>
                    <div className='row'>
                        <h3>Your cart is empty</h3>
                    </div>
                </div>
            </div>
        )
    }

    const button = () => {
        return (
            <div className='row'>
                <div className='row'>
                    <NavLink to='/checkout' className='btn btn-success'>Payment orders</NavLink>
                </div>
            </div>
        )
    }
    return (
        <div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </div>
    )
}

export default CartComponent