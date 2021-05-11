import React from 'react';
import { useState, useEffect } from 'react';
import Item from "./item"

function ItemList (props) {
    const [items, setItems] = useState (false)

    useEffect(() => {
        setTimeout (() => {
            fetch(`https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    setItems(data);
                });
            }, 3000);
    }, []);

    return (
        <div>
            {items ? (
                items.map((i, index) => (
                    <Item
                        id={i.id}
                        key={index}
                        nombre={i.nombre}
                        precio={i.precio}
                        categoria={i.categoria}
                    />
                ))
            ) : (
                <p>Descargando información desde la base de datos...</p>
            )}
        </div>
    );
}

export default ItemList;