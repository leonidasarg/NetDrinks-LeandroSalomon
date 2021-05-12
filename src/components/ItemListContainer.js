import React from 'react';
import ItemList from './ItemList'
import './ItemListContainer.css'

export default function ItemListContainer(props) {
    
    return (

        <div className="item-list-container">
            <p>
                Bienvenido a nuestra lista de productos
            </p>
            <ItemList />
        </div>
    )

};