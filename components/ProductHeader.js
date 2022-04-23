import React from "react";
import Image from "next/image";
import f1 from "./assests/f1.png";
import f2 from "./assests/f2.png";
import f3 from "./assests/f3.png";
import f4 from "./assests/f4.png";
import a1 from "./assests/a1.png";
import a2 from "./assests/a2.png";
import a3 from "./assests/a3.png";
import a4 from "./assests/a4.png";
import a5 from "./assests/a5.png";
import a6 from "./assests/a6.png";
import paant from "./assests/paant.jpg";
import Product from "./Product";

const ProductHeader = () => {
  return (
    <section className="wrapper">
      <div className="section__Image">
        <div className="section__Images-item">
          <Image src={paant} alt="" />
        </div>
      </div>
      <div className="section__Image-details">
        {/* <Product /> */}
        {/* accordion section */}
        <div className="accordion">
          <div className="accordion__left">
            <Image src={a1} alt="" />
            <h3>Description</h3>
          </div>
          <div className="accordion__right">[ + ]</div>
        </div>
        <div className="accordion">
          <div className="accordion__left">
            <Image src={a2} alt="" />
            <h3>How to Measure</h3>
          </div>
          <div className="accordion__right">[ + ]</div>
        </div>
        <div className="accordion">
          <div className="accordion__left">
            <Image src={a3} alt="" />
            <h3>Alterations & returns</h3>
          </div>
          <div className="accordion__right">[ + ]</div>
        </div>

        {/* pant features section */}
        <div className="pant__features">
          <h2>You need these pants because...</h2>
          <div className="pant__features-images">
            <div className="pant__features-images-item">
              <Image src={f1} alt="" />
              <p>Premium stretch Cotton for comfort</p>
            </div>
            <div className="pant__features-images-item">
              <Image src={f2} alt="" />
              <p>Timeless design & individualistic fit</p>
            </div>
            <div className="pant__features-images-item">
              <Image src={f3} alt="" />
              <p>Machine-washable & easy to maintain</p>
            </div>
            <div className="pant__features-images-item">
              <Image src={f4} alt="" />
              <p>Expert tailoring & function-focused</p>
            </div>
          </div>
        </div>
        {/* accordion  */}

        <div className="accordion">
          <div className="accordion__left">
            <Image src={a4} alt="" />
            <h3>Delivery Time</h3>
          </div>
          <div className="accordion__right">[ + ]</div>
        </div>
        <div className="accordion">
          <div className="accordion__left">
            <Image src={a5} alt="" />
            <h3>Fabric details</h3>
          </div>
          <div className="accordion__right">[ + ]</div>
        </div>
        <div className="accordion">
          <div className="accordion__left">
            <Image src={a6} alt="" />
            <h3>Wash Care</h3>
          </div>
          <div className="accordion__right">[ + ]</div>
        </div>
      </div>
    </section>
  );
};

export default ProductHeader;
