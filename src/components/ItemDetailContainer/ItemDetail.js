import {Product} from '../product/product'

function ItemDetail ({product}) {

    return (
        <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    )
}