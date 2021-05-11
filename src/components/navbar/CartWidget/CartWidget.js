export const CartWidget = () => { 

    const handleClick = () =>
        alert (`Todavía no agregaste productos a tu carrito`);

    return (
    <div onClick={handleClick}>
            <img  src="https://image.flaticon.com/icons/png/512/107/107831.png" className="iconoCarrito"/>
    </div>
    )
}