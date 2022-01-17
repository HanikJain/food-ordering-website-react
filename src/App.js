import react, {Fragment, useState, useContext} from "react";

import Header from "./components/Layout/Header"
import LandingCard from "./components/Layout/LandingCard";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";



function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const ctx = useContext(CartProvider);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart = {hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <LandingCard />
      <Meals />
    </CartProvider>
  );
}

export default App;
