import { FaArrowRight } from "react-icons/fa";
import file from "../assets/icons/fileicon.svg"
import logo from "../assets/icons/logoicon.svg"
import { Link } from "react-router-dom";

const ServiceRightContainer = ({servicedetails}) => {
    return (
        <div className="mt-32">

            <div className="w-[24rem] h-[30rem] rounded-xl bg-[#F3F3F3]">
                <h1 className="text-black pt-10 pl-10 text-2xl font-bold">Services</h1>

                <div className="mx-10  cursor-pointer mt-5 h-14 bg-white rounded-md hover:bg-[#FF3811] hover:text-white text-black">
                    <h2 className="font-semibold flex justify-between pr-[1.13rem] items-center pl-[1.13rem] pt-[1rem]">Full Car Repair
                    <FaArrowRight/>
                    </h2>
                </div>
                <div className="mx-10  cursor-pointer mt-5 h-14 bg-white rounded-md hover:bg-[#FF3811] hover:text-white text-black">
                    <h2 className="font-semibold flex justify-between pr-[1.13rem] items-center pl-[1.13rem] pt-[1rem]">Engine Repair
                    <FaArrowRight/>
                    </h2>
                </div>
                <div className="mx-10  cursor-pointer mt-5 h-14 bg-white rounded-md hover:bg-[#FF3811] hover:text-white text-black">
                    <h2 className="font-semibold flex justify-between pr-[1.13rem] items-center pl-[1.13rem] pt-[1rem]">Automatic Services
                    <FaArrowRight/>
                    </h2>
                </div>
                <div className="mx-10  cursor-pointer mt-5 h-14 bg-white rounded-md hover:bg-[#FF3811] hover:text-white text-black">
                    <h2 className="font-semibold flex justify-between pr-[1.13rem] items-center pl-[1.13rem] pt-[1rem]">Engine Oil Change
                    <FaArrowRight/>
                    </h2>
                </div>
                <div className="mx-10  cursor-pointer mt-5 h-14 bg-white rounded-md hover:bg-[#FF3811] hover:text-white text-black">
                    <h2 className="font-semibold flex justify-between pr-[1.13rem] items-center pl-[1.13rem] pt-[1rem]">Battery Charge
                    <FaArrowRight/>
                    </h2>
                </div>

            </div>

            <div className="w-[24rem] h-[17rem] rounded-xl bg-black mt-8">
                <h1 className="text-white text-2xl font-extrabold pt-10 pl-10">Download</h1>
                <div className="flex justify-between items-center px-[2.5rem] mt-5">
                   <div className="flex gap-3 items-center">
                   <img src={file} alt="" />
                    <div>
                        <p className="text-white text-lg font-semibold">Our Brochure</p>
                            <p className="text-[#A2A2A2] ">Download</p>
                    </div>
                    
                   </div>
                   <div className="w-[3.5rem] h-[3.5rem] rounded-md btn-secondary cursor-pointer bg-[#FF3811] flex justify-center items-center text-white text-[1.5rem]">
                        <FaArrowRight></FaArrowRight>

                    </div>
                </div>
                <div className="flex justify-between items-center px-[2.5rem] mt-5">
                   <div className="flex gap-3 items-center">
                   <img src={file} alt="" />
                    <div>
                        <p className="text-white text-lg font-semibold">Company Details</p>
                            <p className="text-[#A2A2A2] ">Download</p>
                    </div>
                    
                   </div>
                   <div className="w-[3.5rem] h-[3.5rem] rounded-md bg-[#FF3811] flex justify-center items-center text-white btn-secondary cursor-pointer text-[1.5rem]">
                        <FaArrowRight></FaArrowRight>

                    </div>
                </div>

                

            </div>



            <div className="w-[24rem] mt-8 flex justify-center items-center flex-col h-[30rem] rounded-xl bg-black">
                <img src={logo} alt="" />
                <h1 className="text-white text-[1.6rem] font-bold">Car Doctor</h1>
                <p className="mt-5 text-xl text-white font-bold text-center">Need Help? We Are Here <br />To Help You</p>
                
                
                <div className="w-[18rem] flex flex-col justify-center items-center relative mt-8 h-[7.8rem] rounded-xl bg-white">
                    <h1 className="text-xl font-bold text-black"><span className="text-[#FF3811]">Car Doctor</span> Special</h1>
                        <p className="text-[#FF3811] font-bold"><span className="text-[#737373]">Save up to </span>60% off</p>

                    <div className="w-[11rem] absolute top-[6rem] h-14 flex justify-center items-center rounded-md btn-secondary cursor-pointer bg-[#FF3811]">
                        <h1 className="text-white font-semibold text-lg">Get A Quote</h1>

                    </div>
                </div>
            </div>
            <h1 className="text-[2.1rem] font-bold my-8">Price ${servicedetails.price}</h1>

            <Link to={`/checkout/${servicedetails._id}`}><button className="btn btn-secondary bg-[#FF3811] flex justify-center items-center text-white text-lg font-semibold w-[24rem] rounded-md h-14">Procced Checkout</button></Link>
            
        </div>
    );
};

export default ServiceRightContainer;