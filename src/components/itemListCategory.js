import React from 'react'
import {useState, useEffect } from 'react';
import Item from './item';
import { firestore } from '../firebase'

const CatList = props => {
    const [items, setItems] = useState ([]);


   // const [isEmptyCategory, setIsEmptyCategory] = useState (false)
  //  useEffect(() => {
   //     const db = getFirestore()
   //     const ItemCollection = db.collection ('items')
  //      ItemCollection.get().then(
   //         if(querySnapshot.size ===0){
   //             setIsEmptyCategory(true)
   //         }
    //    )
   // }, [])

    if (items.length > 0) {
        return items.map ((p,i) => (
            <div id="itemContainer" key= {( i )}>
                <Item 
                    key={i}
                    id={p.id}
                    nombre={p.nombre}
                    precio={p.precio}
                    categoria={p.categoria}
                />
            </div>
        ));
    }

    return (
        <div>'Cargando'</div>
    );
};

export default CatList