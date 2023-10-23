import About from "./About";
import Addresses from "./Addresses";
import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import OurProducts from "./OurProducts";
import Review from "./Review";
import Services from "./Services";
import Team from "./Team";
import Navbar from "../Shared/Navbar"
import Footer from "../Shared/Footer";


const Home = () => {
    return (
        <div >
        <Navbar></Navbar>
          <div className='max-w-[95rem] mx-auto'>
          <Banner></Banner>
           <About></About>
           <Services></Services>
           <Addresses></Addresses>
           <OurProducts></OurProducts>
           <Team></Team>
           <ChooseUs></ChooseUs>
           <Review></Review>
          </div>
           <Footer></Footer>
        </div>
    );
};

export default Home;

