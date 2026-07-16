import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { featuredProducts } from "../data/featuredProducts";

const CartContext = createContext(null);

const defaultCartItems = [
  {
    id: featuredProducts[1]?.id ?? 2,
    title: featuredProducts[1]?.title ?? "Apple iPhone 16 Pro",
    subtitle: "Titanium • 256GB • Midnight",
    price: featuredProducts[1]?.price ?? 27999,
    quantity: 1,
    image: featuredProducts[1]?.image ?? featuredProducts[0]?.image,
  },
  {
    id: featuredProducts[3]?.id ?? 4,
    title: featuredProducts[3]?.title ?? "MacBook Air M4",
    subtitle: "14-inch • Silver • 16GB RAM",
    price: featuredProducts[3]?.price ?? 31999,
    quantity: 1,
    image: featuredProducts[3]?.image ?? featuredProducts[0]?.image,
  },
];

function readStoredState(key, fallback) {
  if (typeof window === "undefined") return fallback;

  try {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : fallback;
  } catch {
    return fallback;
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => readStoredState("mega-mall-cart", defaultCartItems));
  const [wishlistItems, setWishlistItems] = useState(() => readStoredState("mega-mall-wishlist", []));
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponMessage, setCouponMessage] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("mega-mall-cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("mega-mall-wishlist", JSON.stringify(wishlistItems));
    }
  }, [wishlistItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        );
      }

      return [
        ...currentItems,
        {
          id: product.id,
          title: product.title,
          subtitle: product.subtitle ?? product.badge ?? "Premium selection",
          price: product.price,
          quantity,
          image: product.image,
        },
      ];
    });
  };

  const updateQuantity = (id, delta) => {
    setCartItems((currentItems) =>
      currentItems.flatMap((item) => {
        if (item.id !== id) return [item];
        const nextQuantity = item.quantity + delta;
        return nextQuantity > 0 ? [{ ...item, quantity: nextQuantity }] : [];
      }),
    );
  };

  const removeFromCart = (id) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleWishlist = (product) => {
    setWishlistItems((currentItems) => {
      const exists = currentItems.some((item) => item.id === product.id);
      if (exists) {
        return currentItems.filter((item) => item.id !== product.id);
      }

      return [
        ...currentItems,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          badge: product.badge,
        },
      ];
    });
  };

  const isWishlisted = (productId) => wishlistItems.some((item) => item.id === productId);

  const applyCoupon = (code) => {
    const normalized = code.trim().toUpperCase();
    if (normalized === "SAVE10") {
      setCouponApplied(true);
      setCouponCode(normalized);
      setCouponMessage("10% discount applied.");
      return true;
    }

    setCouponApplied(false);
    setCouponCode(normalized);
    setCouponMessage("Coupon code not recognized.");
    return false;
  };

  const resetCoupon = () => {
    setCouponApplied(false);
    setCouponCode("");
    setCouponMessage("");
  };

  const subtotal = useMemo(() => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0), [cartItems]);
  const discount = useMemo(() => (couponApplied ? subtotal * 0.1 : 0), [couponApplied, subtotal]);
  const shipping = subtotal > 0 ? 0 : 0;
  const total = subtotal - discount + shipping;

  const value = useMemo(
    () => ({
      cartItems,
      wishlistItems,
      couponCode,
      couponApplied,
      couponMessage,
      subtotal,
      discount,
      shipping,
      total,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      setCouponCode,
      applyCoupon,
      resetCoupon,
      toggleWishlist,
      isWishlisted,
    }),
    [cartItems, wishlistItems, couponCode, couponApplied, couponMessage, subtotal, discount, shipping, total],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
