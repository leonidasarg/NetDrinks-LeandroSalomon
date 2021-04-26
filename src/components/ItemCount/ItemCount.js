import { useState } from 'react'

export const ItemCount = () => {

    const [count, SetCount] = useState(1)

    return (
        <div className="itemCount">
            <p>{ count }</p>
            <div>
                <button onClick={()=>SetCount(count-1)}> - </button>
                <button onClick={()=>SetCount(count+1)}> + </button>
            </div>
        </div>
    );

}

export default ItemCount;