
type ShoppingCart = {
  [id: string]: number;
};

const SetLocalStorage = (id: string): void => {
  let shoppingCart: ShoppingCart = getShoppingCart();
  const quantity = shoppingCart[id];
  if (!quantity) {
    shoppingCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};

const removeFromDb = (id: string): void => {
  const shoppingCart: ShoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
  }
};

const getShoppingCart = (): ShoppingCart => {
  let shoppingCart: ShoppingCart = {};
  const storedCart = localStorage.getItem('shopping-cart');
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const deleteShoppingCart = (): void => {
  localStorage.removeItem('shopping-cart');
};

export {
  SetLocalStorage,
  removeFromDb,
  getShoppingCart,
  deleteShoppingCart,
};
