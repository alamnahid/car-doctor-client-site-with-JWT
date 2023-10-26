import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import error from "../../assets/images/error.png"

const ErrorElement = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div>
                <img className="w-[70vw] mx-auto pt-32" src={error} alt="" />
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default ErrorElement;