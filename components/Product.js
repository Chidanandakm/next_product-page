import Image from "next/image";
import p1 from "./assests/p1.png";
import p2 from "./assests/p2.png";
import star from "./assests/star.png";
import zest from "./assests/zest.png";
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
            <div className="product_size__numbers">
              <span className="product_size__numbers_box">23</span>
              <span className="product_size__numbers_box">29</span>
              <span className="product_size__numbers_box">30</span>
              <span className="product_size__numbers_box active">31</span>
              <span className="product_size__numbers_box">32</span>
              <span className="product_size__numbers_box">33</span>
              <span className="product_size__numbers_box">34</span>
              <span className="product_size__numbers_box">28</span>
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
            <div className="product_size__numbers">
              <span className="product_size__numbers_box">23</span>
              <span className="product_size__numbers_box">29</span>
              <span className="product_size__numbers_box">30</span>
              <span className="product_size__numbers_box ">31</span>
              <span className="product_size__numbers_box active">32</span>
              <span className="product_size__numbers_box">33</span>
              <span className="product_size__numbers_box">34</span>
              <span className="product_size__numbers_box">28</span>
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
