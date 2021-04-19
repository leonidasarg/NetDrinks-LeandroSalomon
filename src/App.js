import logoNet from './images/Logonet.png';
import './App.css';

function App() {
// const ecommerceName = 'NetDrinks';
// const handleLogo = () => alert(`Bienvenido a ${ecommerceName}`)
// <p className="logo" onClick={handleLogo}>{ecommerceName}</p>  

return (
    <div className="App">
      <header className="topbar">
        <a href="#">
          <img src={logoNet} className="logoImg" />
        </a>
        <nav className="navbar">
          <ul className="links">
            <li className="link">
              <a href='#'>HOME</a>
            </li>
            <li className="link">
              <a href='#'>Productos</a>
            </li>
            <li className="link">
              <a href='#'>Nosotros</a>
            </li>
            <li className="link">
              <a href='#'>Contacto</a>
            </li>
            <li>
              <a href="#">
                <img src="https://image.flaticon.com/icons/png/512/107/107831.png" className="iconoCarrito"/>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
