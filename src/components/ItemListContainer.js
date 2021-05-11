import React from 'react';
import ItemList from './ItemList'

export default function ItemListContainer(props) {
    
    return (

        <div className="ItemListContainer">
            <p>
                Buenvenido a nuestra lista de productos
            </p>
            <ItemList />
        </div>
    )

};