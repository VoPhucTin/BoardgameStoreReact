import React from 'react'
import {DATA} from '../shared/Data';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const Product = () => {
    
    const cardItem = (item) => {
        return (
            <Card key={item.id} style={{ width: '18rem' }} className='Card h-100 text-center mx-auto mb-4'>
                <Card.Img variant="top" src={item.image} height='300px' />
                <Card.Body>
                    <Card.Title className="mb-0">{item.title}</Card.Title>
                    <Card.Text>
                        ${item.price}
                    </Card.Text>
                    <NavLink to={`/products/${item.id}`} variant="" className="btn btn-outline-success">Buy now</NavLink>
                </Card.Body>
            </Card>
        )
    }
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='text-center'>Product</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    {DATA.map(cardItem)}
                </div>
            </div>
        </div>
    )
}

export default Product;