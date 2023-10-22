import { useEffect, useState } from "react";
import arrow from "../../assets/icons/arrow.svg"

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    }, [])

    
    return (
        <div>
            <div className="text-center">
                <p className="text-[#FF3811] text-xl font-bold">Service</p>
                <h1 className="mt-5 text-[2.8rem] font-bold">Our Service Area</h1>
                <p className="mt-5 mx-auto w-[50rem] text-[#737373]">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center items-center">

                    {
                        services?.map(item=><div key={item._id} className="w-[22.75rem] h-[21.75rem] rounded-xl border-2 border-[#E8E8E8]">
                        <img className="w-[19.625rem] h-[13rem] mx-auto mt-[1.56rem] rounded-xl" src={item?.img} alt="" />

                        <h1 className="text-[#444444] text-2xl pl-5 font-semibold my-5">{item.title}</h1>

                        <div className="flex justify-between items-center pr-5">
                        <p className="text-[#FF3811] pl-5 text-xl font-semibold">Price : ${item.price}</p>
                        <img className="cursor-pointer" src={arrow} alt="" />
                        </div>

                </div>)
                    }
            </div>
        </div>
    );
};

export default Services;