import About from "./About";
import Addresses from "./Addresses";
import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import OurProducts from "./OurProducts";
import Review from "./Review";
import Services from "./Services";
import Team from "./Team";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Services></Services>
           <Addresses></Addresses>
           <OurProducts></OurProducts>
           <Team></Team>
           <ChooseUs></ChooseUs>
           <Review></Review>
        </div>
    );
};

export default Home;