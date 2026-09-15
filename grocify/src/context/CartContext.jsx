import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const storageKey = "grocify-cart";

const getCartItemId = (item) => `${item.route || "store"}-${item.id}-${item.name}`;
const getNumericPrice = (price) => Number(String(price).replace(/[^0-9.]/g, "")) || 0;

const readStoredCart = () => {
  try {
    const storedCart = window.localStorage.getItem(storageKey);
    return storedCart ? JSON.parse(storedCart) : [];
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(readStoredCart);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const cartItemId = getCartItemId(item);

    setCartItems((currentItems) => {
      const existingItem = currentItems.find((cartItem) => cartItem.cartItemId === cartItemId);

      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.cartItemId === cartItemId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }

      return [...currentItems, { ...item, cartItemId, quantity: 1 }];
    });
  };

  const updateQuantity = (cartItemId, quantity) => {
    setCartItems((currentItems) =>
      quantity < 1
        ? currentItems.filter((item) => item.cartItemId !== cartItemId)
        : currentItems.map((item) =>
            item.cartItemId === cartItemId ? { ...item, quantity } : item,
          ),
    );
  };

  const removeFromCart = (cartItemId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.cartItemId !== cartItemId));
  };

  const clearCart = () => setCartItems([]);

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  );

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + getNumericPrice(item.price) * item.quantity, 0),
    [cartItems],
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        subtotal,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};
