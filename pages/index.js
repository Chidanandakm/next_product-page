import AlsoLike from "../components/AlsoLike";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductHeader from "../components/ProductHeader";
import Review from "../components/Review";

export default function Home() {
  return (
    <>
      <Navbar />
      <ProductHeader />
      <Review />
      <AlsoLike />
      <Footer />
    </>
  );
}
