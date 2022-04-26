import Image from "next/image";
import p1 from "./assests/p1.png";
import p2 from "./assests/p2.png";
import star from "./assests/star.png";
import zest from "./assests/zest.png";
const waistSize = [
  {
    id: 1,
    number: 23,
  },
  {
    id: 2,
    number: 29,
  },
  {
    id: 3,
    number: 30,
  },
  {
    id: 4,
    number: 31,
  },
  {
    id: 5,
    number: 32,
  },
  {
    id: 6,
    number: 33,
  },
  {
    id: 7,
    number: 34,
  },
  {
    id: 8,
    number: 35,
  },
  {
    id: 9,
    number: 36,
  },
  {
    id: 10,
    number: 37,
  },
  {
    id: 10,
    number: 38,
  },
  {
    id: 10,
    number: 37,
  },
  {
    id: 10,
    number: 38,
  },
  {
    id: 10,
    number: 39,
  },
  {
    id: 10,
    number: 40,
  },
  {
    id: 10,
    number: 41,
  },
  {
    id: 10,
    number: 42,
  },
  {
    id: 10,
    number: 43,
  },
];
function Product() {
  return (
    <>
      <section className="product">
        <div className="product_details">
          <div className="product_rating">
            <span>Bestseller </span>
            <span>
              <Image src={star} alt="" /> 4/5 (2)
            </span>
          </div>
          <h1 className="product_title">Power Stretch Comet Blue Pants</h1>
          <p className="product_price">
            ₹ 2,490 <strike>₹ 2,490</strike>
            <span>
              Or 3 interest-free payments of <b>₹997</b> with
              <Image src={zest} alt="" />
            </span>
          </p>
          <div className="product_colour">
            <p>Colour</p>
            <div>
              <div className="product_colour_first"></div>
              <div className="product_colour_second"></div>
              <div className="product_colour_third"></div>
              <div className="product_colour_fourth"></div>
            </div>
          </div>

          <section className="product_size">
            <div>
              <p>
                1/<small>2</small> Waist
              </p>
              <p>Sizing guide</p>
            </div>
            <div>
              <p className="product_size__info">
                We suggest measuring your waist using a tape. Size tags of other
                brands may lead to inaccurate measurements.
              </p>
            </div>
            <div className="scrolling-wrapper-flexbox">
              <div className="product_size__numbers card">
                {waistSize.map((size) => (
                  <span key={size.id}>{size.number}</span>
                ))}
              </div>
            </div>
          </section>
          <section className="product_size">
            <div>
              <p>
                1/<small>2</small> Length
              </p>
              <p>Sizing guide</p>
            </div>
            <div></div>
            <div className="scrolling-wrapper-flexbox">
              <div className="product_size__numbers card">
                {waistSize.map((size) => (
                  <span key={size.id}>{size.number}</span>
                ))}
              </div>
            </div>
          </section>

          <section className="product_buy">
            <button>
              <a>Customise Rise, Fit, Monogrammimg & more</a>
            </button>
            <button>
              <a>Add to Cart</a>
            </button>
          </section>
          <section className="product-alter">
            <div>
              <h1>Free alterations</h1>
              <p>We alter them,till you love them</p>
              <p>
                {" "}
                <Image src={p2} alt="" /> Fast Delivery, Dispatch in 7 days
              </p>
            </div>
            <div>
              <Image src={p1} alt="Free Alterations" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Product;
