import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import CheckoutBanner from "./ChekoutBanner"
import CheckOutForm from "./CheckOutForm";
import Footer from "../Shared/Footer";


const CheckOut = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-[95rem] mx-auto ">

            <CheckoutBanner></CheckoutBanner>
            <CheckOutForm data={data}></CheckOutForm>
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default CheckOut;