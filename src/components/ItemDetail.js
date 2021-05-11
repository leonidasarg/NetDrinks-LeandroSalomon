import React from 'react';
import { useState, useEffect, useContext } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react';
import { CartContext } from "./Context";

function ItemDetail(props) {
    const [count, setCount] = useState (0)
    const [products, productsCount, addProduct, delProduct, getGrandTotal] = useContext(CartContext);

    function giveMeCount (c) {
        setCount (c);
    }

    return (
        <div>
            <ItemCount
                func={giveMeCount}
                nombre={props.nombre}
                precio={props.precio}
            />
            <input
                onClick={() => addProduct(props.nombre, count)}
                type='button'
                value={`Añadir al carrito ${count}`}
            />
            <br />
            <Link exact to={`/category/${props.categoria}`}>
                Más productos de {props.categoria}
            </Link>
        </div>
    );
}

export default ItemDetail;