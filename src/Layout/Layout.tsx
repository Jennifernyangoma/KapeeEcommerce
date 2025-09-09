import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Aftersell from "../components/Aftersell";
import FeaturedProducts from "../components/Featureproduct";
 // updated import

const LayoutHandling: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FeaturedProducts />
      <Aftersell />
      <Footer />
    </>
  );
};

export default LayoutHandling;
