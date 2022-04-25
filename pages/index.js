import AlsoLike from "../components/AlsoLike";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductHeader from "../components/ProductHeader";

export default function Home() {
  return (
    <>
      <Navbar />
      <ProductHeader />
      <AlsoLike />
      <Footer />
    </>
  );
}
