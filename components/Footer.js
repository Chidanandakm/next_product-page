import React from "react";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__customer-help">
        <h2>Customer Help</h2>
        <ul>
          {[
            "Request an Alteration",
            "Shipping, Exchanges Returns",
            "Refund Policy",
            "FAQ",
            "Looking for your perfect size",
            "Pants Size Guide",
            "Shorts Size Guide",
            "Fabric Glossary",
          ].map((item) => (
            <li key={item}>
              <a href={`#${item}`} onClick={() => setToggle(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer__customer-help">
        <h2>Get to know us</h2>
        <ul>
          {[
            "About",
            "Privacy Policy",
            "Terms & Conditions",
            "FAQ",
            "Contact Us",
            "Pantology-Blog",
          ].map((item) => (
            <li key={item}>
              <a href={`#${item}`} onClick={() => setToggle(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/*  */}
      <div className="footer__customer-social">
        <h2>Connect On Social</h2>
        <ul>
          <li>
            <RiFacebookFill />
          </li>
          <li>
            <RiTwitterFill />
          </li>
          <li>
            <RiInstagramFill />
          </li>
          <li>
            <RiYoutubeFill />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
