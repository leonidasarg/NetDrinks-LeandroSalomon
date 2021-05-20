import './App.css';
import { Navbar } from './components/navbar/navbar'
import React from 'react';
import ItemListContainer from './components/ItemListContainer'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import CatList from './components/itemListCategory'
import CartContextProvider from './components/Context'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'


  function App() {

  return (
  <div>
    <CartContextProvider>
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route path="/itemdetail/:id" component={ItemDetailContainer} />
          <Route path="/cart" component={Cart} />
          <Route path="/category/:cat" component={CatList}/>
        </Switch>
      </BrowserRouter>
    </CartContextProvider>
  </div>
  );
  }

export default App;
