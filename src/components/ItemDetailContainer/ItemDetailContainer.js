export const ItemDetailContainer = () => {

    const storeBebidas =  [
  {
    title: 'Fernet Branca',
    price: 450 ,
    description: 'La mejor bebida',

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

    const [ item, setItem ] = useState ([])

    useEffect(() => {
        const showBebidasDetail = async () => {
            const response = await fetch(storeBebidas)
            const stockBebidas = await response.json()

            setItem(itemProduct)
        }
    }, [])
}
