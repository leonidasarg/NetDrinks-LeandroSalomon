export const CartWidget = () => { 

    const handleClick = () =>
        alert (`Todavía no agregaste productos a tu carrito`);

    return (
    <div onClick={handleClick}>
        <a href="#">
            <img  src="https://image.flaticon.com/icons/png/512/107/107831.png" className="iconoCarrito"/>
        </a>
    </div>
    )
}