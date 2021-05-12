import React from 'react';
import { Link } from "react-router-dom"
import './Item.css'

function Item (props) {
    return (
        <div className="item-container">
            <div className="item">
                <Link to={{ pathname: `/itemdetail/${props.id}`, state: { test: "test" } }}>
                    <h5>{props.nombre}</h5>
                </Link>
                <li>Precio: {props.precio}</li>
                <li>Categoría: {props.categoria}</li>
            </div>
        </div>
    );
};

export default Item;