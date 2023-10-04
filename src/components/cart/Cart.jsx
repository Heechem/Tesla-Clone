import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../../global-state/cartItems";

const Cart = () => {
  const [cartItems, setCartItems] = useRecoilState(cartState);
  const handleBuyEverything = () => {
    setCartItems([]);
  };

  if (cartItems.length === 0) {
    return (
      <div className=" flex h-screen w-screen items-center justify-center">
        There are no items in the cart
      </div>
    );
  }

  function removeFromCart(id) {
    setCartItems((item) => item.filter((cartItem) => cartItem.id !== id));
  }

  return (
    <div className="my-auto flex h-screen w-screen flex-col items-center justify-center">
      <h2 className="m-8 text-2xl">Cart</h2>
      <ul className=" flex flex-wrap items-center justify-center gap-6 p-4">
        {cartItems.map((item, idx) => (
          <li
            key={`${item.id}-${idx}`}
            className="   border-2 p-2 shadow-md shadow-gray-100"
          >
            <div className="flex flex-col items-center justify-center">
              <div>{item.title}</div>
              <div>{item.price}</div>
              <button
                className="m-2 cursor-pointer border-2 border-gray-100 bg-none px-3 py-2 hover:scale-105"
                onClick={() => removeFromCart(item.id)}
              >
                Remove from cart
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="m-2 cursor-pointer border-2 border-gray-100 bg-none px-10 py-2 hover:scale-105"
        onClick={handleBuyEverything}
      >
        Buy
      </button>
    </div>
  );
};

export default Cart;
