import React from 'react';
import { Link } from "react-router-dom"

function Item (props) {
    return (
        <div>
            <div>
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