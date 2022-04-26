import Image from "next/image";
import pant from "./assests/paant.jpg";
const productList = [
  {
    id: 1,
    image: pant,
    name: "Bangalore Black Power-Stretch Pants",
    price: "2,990",
  },
  {
    id: 2,
    image: pant,
    name: "Bangalore Black Power-Stretch Pants",
    price: "2,990",
  },
  {
    id: 3,
    image: pant,
    name: "Bangalore Black Power-Stretch Pants",
    price: "2,990",
  },
  {
    id: 4,
    image: pant,
    name: "Bangalore Black Power-Stretch Pants",
    price: "2,990",
  },
];
const AlsoLike = () => {
  return (
    <>
      <h1 className="heading">You May also Like</h1>
      <section className="you__may-like">
        {productList.map((product) => (
          <div className="section__product" key={product.id}>
            {/* <div> */}
            <Image src={product.image} alt="" />
            {/* </div> */}
            <h2>{product.name}</h2>
            <p>Rs.{product.price}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default AlsoLike;
