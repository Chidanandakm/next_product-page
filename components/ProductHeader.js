import { useState } from "react";
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
import image1 from "./assests/image1.png";
import Product from "./Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProductHeader = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="wrapper">
      <div className="section__Image">
        {/* <div className="slider__container"> */}
        <div>
          <Image src={paant} alt="" />
        </div>
        {/* <div className="slider__Images"> */}
        {/* <Image src={image1} layout="fill" alt="" /> */}
        {/* </div> */}
        {/* <Slider {...settings}> */}
        {/* <div className="single__Image"> */}
        {/* <Image src={paant} alt="" /> */}
        {/* </div> */}
        {/* <div className="single__Image">
              <Image src={paant} alt="" />
            </div>
            <div className="single__Image">
              <Image src={paant} alt="" />
            </div> */}
        {/* </Slider> */}
        {/* </div> */}
      </div>
      <div className="section__Image-details">
        <Product />
        {/* accordion section */}

        <details className="accordion">
          <summary
            className="accordion__btn"
            aria-expanded={open}
            // onClick={handleClick}
          >
            <div className="accordion__left">
              <Image src={a1} alt="" />
              <h3>Description</h3>
            </div>
            <div className="accordion__right">[ + ]</div>
          </summary>
          <div className="content" aria-expanded={!open}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              dolor laboriosam provident atque exercitationem deserunt
              cupiditate, dolore sunt, aspernatur ipsa optio debitis architecto
              rem nisi ad velit quibusdam impedit esse!
            </p>
          </div>
        </details>
        <details className="accordion">
          <summary className="accordion__btn" onClick={handleClick}>
            <div className="accordion__left">
              <Image src={a2} alt="" />
              <h3>How to Measure</h3>
            </div>
            <div className="accordion__right">[ + ]</div>
          </summary>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              dolor laboriosam provident atque exercitationem deserunt
              cupiditate, dolore sunt, aspernatur ipsa optio debitis architecto
              rem nisi ad velit quibusdam impedit esse!
            </p>
          </div>
        </details>
        <details className="accordion">
          <summary className="accordion__btn" onClick={handleClick}>
            <div className="accordion__left">
              <Image src={a3} alt="" />
              <h3>Alterations & returns</h3>
            </div>
            <div className="accordion__right">[ + ]</div>
          </summary>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              dolor laboriosam provident atque exercitationem deserunt
              cupiditate, dolore sunt, aspernatur ipsa optio debitis architecto
              rem nisi ad velit quibusdam impedit esse!
            </p>
          </div>
        </details>

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

        <details className="accordion">
          <summary className="accordion__btn" onClick={handleClick}>
            <div className="accordion__left">
              <Image src={a4} alt="" />
              <h3>Delivery Time</h3>
            </div>
            <div className="accordion__right">[ + ]</div>
          </summary>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              dolor laboriosam provident atque exercitationem deserunt
              cupiditate, dolore sunt, aspernatur ipsa optio debitis architecto
              rem nisi ad velit quibusdam impedit esse!
            </p>
          </div>
        </details>
        <details className="accordion">
          <summary className="accordion__btn" onClick={handleClick}>
            <div className="accordion__left">
              <Image src={a5} alt="" />
              <h3>Fabric details</h3>
            </div>
            <div className="accordion__right">[ + ]</div>
          </summary>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              dolor laboriosam provident atque exercitationem deserunt
              cupiditate, dolore sunt, aspernatur ipsa optio debitis architecto
              rem nisi ad velit quibusdam impedit esse!
            </p>
          </div>
        </details>
        <details className="accordion">
          <summary className="accordion__btn" onClick={handleClick}>
            <div className="accordion__left">
              <Image src={a6} alt="" />
              <h3>Wash Care</h3>
            </div>
            <div className="accordion__right">[ + ]</div>
          </summary>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              dolor laboriosam provident atque exercitationem deserunt
              cupiditate, dolore sunt, aspernatur ipsa optio debitis architecto
              rem nisi ad velit quibusdam impedit esse!
            </p>
          </div>
        </details>
      </div>
    </section>
  );
};

export default ProductHeader;
