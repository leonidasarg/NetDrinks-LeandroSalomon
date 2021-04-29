import { useState } from 'react'

export const Item = () => {
    const [bebidas, setBebidas] = useState ()

    const bebidasData = [
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
          }]

    const getBebidas = (data) => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                return resolve(data)
            }, 3000)
        })
    }

    useEffect(() => {
        getBebidas( bebidasData ).then(result => {
            console.log(result)
            setBebidas(result);
        });
    }, [])

}