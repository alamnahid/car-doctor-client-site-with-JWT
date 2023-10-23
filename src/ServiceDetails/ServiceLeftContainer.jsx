import bg from "../assets/icons/bgservice.svg"

const ServiceLeftContainer = () => {
    return (
        <div className="mt-32">
            <img className="w-full" src="https://i.ibb.co/svJzkN0/Rectangle-1540.png" alt="" />
            <h1 className="text-black text-[2.1rem] font-bold mt-12">Unique Car Engine Service</h1>
            <p className="mt-8 text-[#737373] text-base">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-8">

                <div className="flex-1 h-[12.75rem] rounded-xl border-t-2 border-[#FF3811] bg-[#F3F3F3]">
                    <h1 className="text-[#444] text-xl font-bold mt-10 ml-10">Instant Car Services</h1>
                    <p className="mt-3 px-10 text-[#737373]">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>

                </div>
                <div className="flex-1 h-[12.75rem] rounded-xl border-t-2 border-[#FF3811] bg-[#F3F3F3]">
                    <h1 className="text-[#444] text-xl font-bold mt-10 ml-10">Instant Car Services</h1>
                    <p className="mt-3 px-10 text-[#737373]">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>

                </div>
                <div className="flex-1 h-[12.75rem] rounded-xl border-t-2 border-[#FF3811] bg-[#F3F3F3]">
                    <h1 className="text-[#444] text-xl font-bold mt-10 ml-10">Instant Car Services</h1>
                    <p className="mt-3 px-10 text-[#737373]">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>

                </div>
                <div className="flex-1 h-[12.75rem] rounded-xl border-t-2 border-[#FF3811] bg-[#F3F3F3]">
                    <h1 className="text-[#444] text-xl font-bold mt-10 ml-10">Instant Car Services</h1>
                    <p className="mt-3 px-10 text-[#737373]">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>

                </div>
            </div>

            <p className="mt-8 text-[#737373] text-base">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.
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