import React from 'react';
import { useContext, useEffect } from 'react';
import { CartContext } from './Context';

function Cart() {
    const [products, productsCount, addProduct, delProduct, getGrandTotal] =
    useContext (CartContext);
    useEffect (() => {
        console.log(products)
    })
    return <div>
        Este es su carrito
        {products.map((product) => (
            <div>
                <p>Item: {product.nombre}</p>
                <p>Cantidad: {product.quantity}</p>
            </div>
        ))}</div>;
}

export default Cart; 