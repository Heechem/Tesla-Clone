// import modelS from "../../assets/modelS.jpg";
import modelX from "../../assets/ModelX.jpeg";
import model3 from "../../assets/model3.jpg";
import Truck from "../../assets/truck.jpg";
import Charger from "../../assets/charger.jpg";
import modelY from "../../assets/Doors.jpg";
import Products from "../product/Products";

const products = [
  {
    id: 1,
    image: Truck,
    title: "Cybertruck",
    description: "Description of Product 1",
    price: 19.99,
  },
  // {
  //   id: 2,
  //   image: modelS,
  //   title: "Model S",
  //   description: "Description of Product 2",
  //   price: 29.99,
  // },
  {
    id: 3,
    image: modelX,
    title: "Model X",
    description: "Description of Product 3",
    price: 39.99,
  },
  {
    id: 4,
    image: Charger,
    title: "Charger",
    description: "Description of Product 4",
    price: 49.99,
  },
  {
    id: 5,
    image: modelY,
    title: "Model Y",
    description: "Description of Product 5",
    price: 59.99,
  },
  {
    id: 6,
    image: model3,
    title: "Model 3",
    description: "Description of Product 6",
    price: 69.99,
  },
];

const ProductContainer = () => {
  return (
    <div className="mt-10 flex  flex-wrap items-center justify-center sm:gap-12 ">
      {products.map((pr) => (
        <Products
          key={pr.id}
          img={pr.image}
          title={pr.title}
          price={pr.price}
          description={pr.description}
        />
      ))}
    </div>
  );
};

export default ProductContainer;
