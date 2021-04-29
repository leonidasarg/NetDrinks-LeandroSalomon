import { Product } from '../product/product'

export const ItemListContainer = (props) =>
     props.products.map((product) => (
        <Product 
            title={product.title} 
            price={product.price}
            description={product.description}
        />
    )
)

export default ItemListContainer