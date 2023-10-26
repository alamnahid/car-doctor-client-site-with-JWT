import { useEffect, useState } from "react";
import arrow from "../../assets/icons/arrow.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://car-doctor-server-97ahxp1ro-nahid-alams-projects.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    }, [])

    useEffect(() => {
        // Initialize AOS
        AOS.init();
      }, []);

    
    return (
        <div>
            <div className="text-center mt-8 lg:mt-0">
                <p className="text-[#FF3811] text-xl font-bold">Service</p>
                <h1 className="mt-5 text-2xl lg:text-[2.8rem] font-bold">Our Service Area</h1>
                <p className="mt-5 mx-auto lg:w-[50rem] text-[#737373]">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center items-center">

                    {
                        services?.map(item=><Link key={item._id} to={`/servicedetails/${item._id}`}><div data-aos="fade-up" className="w-[22.75rem] h-[21.75rem] rounded-xl border-2 border-[#E8E8E8] hover:bg-[#7c6f6d44] hover:scale-105 cursor-pointer">
                        <img className="w-[19.625rem] h-[13rem] mx-auto mt-[1.56rem] rounded-xl" src={item?.img} alt="" />

                        <h1 className="text-[#444444] text-2xl pl-5 font-semibold my-5">{item.title}</h1>

                        <div className="flex justify-between items-center pr-5">
                        <p className="text-[#FF3811] pl-5 text-xl font-semibold">Price : ${item.price}</p>
                        <img className="cursor-pointer" src={arrow} alt="" />
                        </div>

                </div></Link>)
                    }
            </div>

            
        </div>
    );
};

export default Services;