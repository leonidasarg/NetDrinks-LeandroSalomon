import React from 'react';
import { useState, useEffect, useParams } from 'react'
import ItemDetail from "./ItemDetail";

function ItemDetailContainer(props) {
  const [item, setItem1] = useState(false);
  let id = props.match.params.id;

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://609acd920f5a13001721bebf.mockapi.io/NetDrinks/items/${id}`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          setItem1(data);
        });
    }, 1000);
    console.log(item);
  }, []);

  return (
    <div>
      {item ? (
        <ItemDetail
          nombre={item.nombre}
          precio={item.precio}
          id={item.id}
          categoria={item.categoria}
        />
      ) : (
        <p>Trayendo información desde base de datos...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;