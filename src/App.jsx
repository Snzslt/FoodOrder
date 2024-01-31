import Header from "./Components/Header";
import Meals from "./Components/Meals";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import {CartContextProvider} from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";
function App() {
  return (
    
    <UserProgressContextProvider>
    <CartContextProvider>
     <Header />
     <Meals />
     <Cart />
     <Checkout />
    </CartContextProvider>
    </UserProgressContextProvider>
    
  );
}

export default App;
