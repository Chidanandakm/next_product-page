import { BsList } from "react-icons/bs";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import title from "./assests/title.png";

const Navbar = () => {
  return (
    <nav className="nav__container">
      <div className="nav__icon ">
        <BsList />
      </div>
      <div className="nav__logo ">
        {/* <h1>The[Pant]Pro.ject</h1> */}
        <Image src={title} alt="" />
      </div>
      <div className="nav__items">
        <IoIosSearch />
        <BsBag />
      </div>
    </nav>
  );
};

export default Navbar;
