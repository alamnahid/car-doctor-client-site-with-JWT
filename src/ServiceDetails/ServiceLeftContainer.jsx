/* eslint-disable react/prop-types */
import bg from "../assets/icons/bgservice.svg"

const ServiceLeftContainer = ({servicedetails}) => {
    return (
        <div className="mt-32 p-3 lg:p-0">
            <img className="w-full rounded-xl" src={servicedetails.img} alt="" />
            <h1 className="text-black text-[2.1rem] font-bold mt-12">{servicedetails.title}</h1>
            <p className="mt-8 text-[#737373] text-base">
                {servicedetails.description}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">

                <div className="flex-1 lg:h-[12.75rem] rounded-xl border-t-2 border-[#FF3811] bg-[#F3F3F3]">
                    <h1 className="text-[#444] text-xl font-bold mt-10 ml-10">{servicedetails.facility[0].name}</h1>
                    <p className="mt-3 px-10 text-[#737373]">{servicedetails.facility[0].details}</p>

                </div>
                <div className="flex-1 lg:h-[12.75rem] rounded-xl border-t-2 border-[#FF3811] bg-[#F3F3F3]">
                    <h1 className="text-[#444] text-xl font-bold mt-10 ml-10">{servicedetails.facility[1].name}</h1>
                    <p className="mt-3 px-10 text-[#737373]">{servicedetails.facility[1].details}</p>

                </div>
                <div className="flex-1 lg:h-[12.75rem] rounded-xl border-t-2 border-[#FF3811] bg-[#F3F3F3]">
                    <h1 className="text-[#444] text-xl font-bold mt-10 ml-10">{servicedetails.facility[2].name}</h1>
                    <p className="mt-3 px-10 text-[#737373]">{servicedetails.facility[2].details}</p>

                </div>
                <div className="flex-1 lg:h-[12.75rem] rounded-xl border-t-2 border-[#FF3811] bg-[#F3F3F3]">
                    <h1 className="text-[#444] text-xl font-bold mt-10 ml-10">{servicedetails.facility[3].name}</h1>
                    <p className="mt-3 px-10 text-[#737373]">{servicedetails.facility[3].details}</p>

                </div>
            </div>

            <p className="mt-8 text-[#737373] text-base">
                {servicedetails.description}
            </p>

            <h1 className="text-black text-[2.1rem] font-bold mt-12 mb-8">3 Simple Steps to Process</h1>

            <p className=" text-[#737373] text-base">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.
            </p>

            <div className="grid grid-cols-3 gap-5 mt-8">

                <div className="flex-1  pt-[2.44rem] items-center text-center h-[17rem] rounded-xl border-2 ">
                    <div className="w-[5.19rem] mx-auto h-[5.19rem] relative">
                        <img src={bg} alt="" />
                        <h1 className="text-white absolute top-[1.6rem] left-[1.8rem] text-xl font-bold">01</h1>
                    </div>

                    <h1 className="uppercase text-black text-xl font-bold mt-5">Step One</h1>
                    <p className="mt-5 text-[#737373]">It uses a dictionary <br /> of over 200 .</p>

                </div>
                <div className="flex-1  pt-[2.44rem] items-center text-center h-[17rem] rounded-xl border-2 ">
                    <div className="w-[5.19rem] mx-auto h-[5.19rem] relative">
                        <img src={bg} alt="" />
                        <h1 className="text-white absolute top-[1.6rem] left-[1.8rem] text-xl font-bold">02</h1>
                    </div>

                    <h1 className="uppercase text-black text-xl font-bold mt-5">Step Two</h1>
                    <p className="mt-5 text-[#737373]">It uses a dictionary <br /> of over 200 .</p>

                </div>
                <div className="flex-1  pt-[2.44rem] items-center text-center h-[17rem] rounded-xl border-2 ">
                    <div className="w-[5.19rem] mx-auto h-[5.19rem] relative">
                        <img src={bg} alt="" />
                        <h1 className="text-white absolute top-[1.6rem] left-[1.8rem] text-xl font-bold">03</h1>
                    </div>

                    <h1 className="uppercase text-black text-xl font-bold mt-5">Step Three</h1>
                    <p className="mt-5 text-[#737373]">It uses a dictionary <br /> of over 200 .</p>

                </div>
            </div>

            <div className="video-section">
                <iframe
                    className="w-full h-[30rem] mt-8 rounded-xl"
                    src="https://www.youtube.com/embed/PUkAIAIzA0I?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

        </div>
    );
};

export default ServiceLeftContainer;