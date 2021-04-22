import './App.css';
import { Navbar } from './components/navbar/navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function App() {
// const ecommerceName = 'NetDrinks';
// const handleLogo = () => alert(`Bienvenido a ${ecommerceName}`)
// <p className="logo" onClick={handleLogo}>{ecommerceName}</p>  

const products = [
  {
    title: 'Fernet Branca',
    price: 450 ,
    description: 'La mejor bebida'
  },

  {
    title: 'Vodka Absolut',
    price: 1500,
    description: 'Vodka importado'
  },

  {
    title: 'Gin Beefeater',
    price: 1300,
    description: 'Gin de calidad'
  },

  {
    title: 'Santa Julia Chenin Dulce',
    price: 400,
    description: 'Vino dulce de cosecha tardía'
  },

  {
    title: 'Vodka Smirnoff',
    price: 500,
    description: 'El vodka ideal para tu previa'
  }
]

return (
  
    <div className="App">
      <Navbar />
      <ItemListContainer products={products} />
    </div>
  )
}

export default App;
