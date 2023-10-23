import ch1 from "../../assets/icons/group.svg"
import ch2 from "../../assets/icons/Wrench.svg"
import ch3 from "../../assets/icons/person.svg"
// import ch4 from "../../assets/icons/time.svg"
import ch5 from "../../assets/icons/check.svg"
import ch6 from "../../assets/icons/deliveryt.svg"
const ChooseUs = () => {
    return (
        <div className="mt-32">
            <div className="text-center">
                <p className="text-[#FF3811] text-xl font-bold">Core Features</p>
                <h1 className="mt-5 text-[2.8rem] font-bold">Why Choose Us</h1>
                <p className="mt-5 mx-auto w-[50rem] text-[#737373]">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div className="flex gap-5 justify-between items-center flex-wrap mt-12">
                <div className="w-[10.6rem] h-[9.75rem] rounded-xl border-2 flex flex-col justify-center items-center text-[#444444] hover:bg-[#FF3811] hover:text-white cursor-pointer">
                    <img src={ch1} alt="" />
                    <h1 className=" font-bold text-lg text-center mt-5">Expert Team</h1>
                </div>
                <div className="w-[10.6rem] h-[9.75rem] rounded-xl border-2 flex flex-col justify-center items-center text-[#444444] hover:bg-[#FF3811] hover:text-white cursor-pointer">
                    <img src={ch5} alt="" />
                    <h1 className=" font-bold text-lg text-center mt-5">Timely Delivery</h1>
                </div>
                <div className="w-[10.6rem] h-[9.75rem] rounded-xl border-2 flex flex-col justify-center items-center text-[#444444] hover:bg-[#FF3811] hover:text-white cursor-pointer">
                    <img src={ch3} alt="" />
                    <h1 className=" font-bold text-lg text-center mt-5">24/7 Support</h1>
                </div>
                <div className="w-[10.6rem] h-[9.75rem] rounded-xl border-2 flex flex-col justify-center items-center text-[#444444] hover:bg-[#FF3811] hover:text-white cursor-pointer">
                    <img src={ch2} alt="" />
                    <h1 className=" font-bold text-lg text-center mt-5">Best Equipment</h1>
                </div>
                <div className="w-[10.6rem] h-[9.75rem] rounded-xl border-2 flex flex-col justify-center items-center text-[#444444] hover:bg-[#FF3811] hover:text-white cursor-pointer">
                    <img src={ch5} alt="" />
                    <h1 className=" font-bold text-lg text-center mt-5">100% Guranty</h1>
                </div>
                <div className="w-[10.6rem] h-[9.75rem] rounded-xl border-2 flex flex-col justify-center items-center text-[#444444] hover:bg-[#FF3811] hover:text-white cursor-pointer">
                    <img src={ch6} alt="" />
                    <h1 className=" font-bold text-lg text-center mt-5">Timely Delivery</h1>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;