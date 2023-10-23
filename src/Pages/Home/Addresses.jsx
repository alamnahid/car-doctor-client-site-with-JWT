import calendar from "../../assets/icons/date.svg"
import call from "../../assets/icons/call.svg"
import location from "../../assets/icons/location.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Addresses = () => {

    useEffect(() => {
        // Initialize AOS
        AOS.init();
      }, []);
    return (
        <div className="mt-32 w-full flex justify-evenly items-center h-[16rem] rounded-xl bg-black">
            <div data-aos="fade-left" className="flex items-center gap-4">
                <img src={calendar} alt="" />
                <div>
                    <p className="font-medium text-white">We are open monday-friday</p>
                    <h1 className="text-white font-bold text-2xl">7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4">
                <img src={call} alt="" />
                <div>
                    <p className="font-medium text-white">Have a question?</p>
                    <h1 className="text-white font-bold text-2xl">+2546 251 2658 </h1>
                </div>
            </div>
            <div data-aos="fade-right" className="flex items-center gap-4">
                <img src={location} alt="" />
                <div>
                    <p className="font-medium text-white">Need a repair? our address</p>
                    <h1 className="text-white font-bold text-2xl">Liza Street, New York </h1>
                </div>
            </div>
            
        </div>
    );
};

export default Addresses;