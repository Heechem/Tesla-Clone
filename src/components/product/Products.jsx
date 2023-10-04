import { useRecoilState, useSetRecoilState } from "recoil";
import { cartState } from "../../global-state/cartItems";
import { v4 as uuidv4 } from "uuid";

const Products = (product) => {
  const { description, price, title, img } = product;
  const setCart = useSetRecoilState(cartState);
  const uniqueId = uuidv4();
  const uniqueIdV2 = Date.now().toString();

  function addToCart() {
    setCart((prevCart) => [...prevCart, { ...product, id: uniqueIdV2 }]);
  }
  return (
    <div className="mb-10 flex flex-col items-center justify-center rounded-lg border-2 border-gray-100 p-10 shadow-lg shadow-gray-100 transition duration-300 ease-in-out hover:scale-[1.01]">
      <img src={img} alt="" className="mb-3 h-[200px] w-[200px] object-cover" />
      <h2 className="mb-3 text-center text-xl">{title}</h2>
      <p className="mb-3 text-center">{description}</p>
      <p className="font-bold">{price}</p>
      <button
        className="m-2 cursor-pointer border-2 border-gray-100 bg-none px-3 py-2 hover:scale-105"
        onClick={() => {
          addToCart();
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Products;
