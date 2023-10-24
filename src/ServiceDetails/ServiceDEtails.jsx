import { useLoaderData } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import ServiceDetailsBanner from "./ServiceDetailsBanner";
import ServiceLeftContainer from "./ServiceLeftContainer";
import ServiceRightContainer from "./ServiceRightContainer";


const ServiceDEtails = () => {
    const servicedetails = useLoaderData();
    
    return (
        <div>
            <div className="pb-32">
                <Navbar></Navbar>
            </div>

            <div className="max-w-[95rem] mx-auto ">

                <ServiceDetailsBanner></ServiceDetailsBanner>

                <div className="flex justify-between gap-16">
                    <div className="flex-1">
                    <ServiceLeftContainer servicedetails={servicedetails}></ServiceLeftContainer>
                    </div>
                    <div>
                    <ServiceRightContainer servicedetails={servicedetails}></ServiceRightContainer>
                    </div>
                </div>

                
               

            </div>

        </div>
    );
};

export default ServiceDEtails;

