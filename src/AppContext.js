import React, {useState, useContext, createContext} from "react";

const AppContext = createContext()

function AppProvider(props) {
const [cart, setCart] = useState([]);

const  handleProductDelete = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
}

const handleProductAdd = (newProduct) => {
  // check if item exists
  const existingProduct = cart.find(
      (product) => product.id === newProduct.id
  );
  if (existingProduct) {
    // increase quantity
    const updatedCart = cart.map((product) => {
      if (product.id === newProduct.id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });
    setCart(updatedCart);
  } else {
    // product is new to the cart
    setCart([
      ...cart,
      {
        ...newProduct,
        quantity: 1,
      },
    ]);
  }
}

const getCartCount = () =>  cart.reduce(
    (total, product) => total + product.quantity,
    0
);

  const getTotalPrice = () =>  cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
  );

  const getProductFromCart = (productId) => cart.find(
    (product) => product.id === productId
  );

const value = {
  cart,
  onProductAdd: handleProductAdd,
  onProductDelete: handleProductDelete,
  getCartCount,
  getTotalPrice,
  getProductFromCart
}

return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
);
};

export { AppContext, AppProvider };