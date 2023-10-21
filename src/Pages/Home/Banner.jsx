import img1 from "../../assets/images/banner/1.jpg"
import img2 from "../../assets/images/banner/2.jpg"
import img3 from "../../assets/images/banner/3.jpg"
import img4 from "../../assets/images/banner/4.jpg"
import img5 from "../../assets/images/banner/5.jpg"
import img6 from "../../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[38rem]">
                <div id="slide1" className="carousel-item relative w-full mt-12 ">
                    <img src={img1} className="w-full rounded-xl" />
                    <div className="absolute h-full flex flex-col transform -translate-y-1/2 pt-20 pl-24 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <h1 className="w-[28.9375rem] text-white text-[3.75rem] font-bold leading-[4.6rem]">Affordable Price For Car Servicing</h1>
                        <p className="w-[32rem] text-white text-lg my-[1.87rem] ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div className="flex gap-5">
                            <button className="btn  bg-[#FF3811] text-white text-lg capitalize font-medium w-[10.6rem] h-14">Discover More</button>
                            <button className="btn border-white btn-outline text-white text-lg capitalize font-medium w-[10.6rem] h-14">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-12 bottom-12">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#FF3811] text-white">❯</a>
                    </div>
                </div>

                {/* card 2 */}

                <div id="slide2" className="carousel-item relative w-full mt-12 ">
                    <img src={img2} className="w-full rounded-xl" />
                    <div className="absolute h-full flex flex-col transform -translate-y-1/2 pt-20 pl-24 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <h1 className="w-[28.9375rem] text-white text-[3.75rem] font-bold leading-[4.6rem]">Affordable Price For Car Servicing</h1>
                        <p className="w-[32rem] text-white text-lg my-[1.87rem] ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div className="flex gap-5">
                            <button className="btn  bg-[#FF3811] text-white text-lg capitalize font-medium w-[10.6rem] h-14">Discover More</button>
                            <button className="btn border-white btn-outline text-white text-lg capitalize font-medium w-[10.6rem] h-14">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-12 bottom-12">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#FF3811] text-white">❯</a>
                    </div>
                </div>


                {/* card 3 */}


                <div id="slide3" className="carousel-item relative w-full mt-12 ">
                    <img src={img3} className="w-full rounded-xl" />
                    <div className="absolute h-full flex flex-col transform -translate-y-1/2 pt-20 pl-24 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <h1 className="w-[28.9375rem] text-white text-[3.75rem] font-bold leading-[4.6rem]">Affordable Price For Car Servicing</h1>
                        <p className="w-[32rem] text-white text-lg my-[1.87rem] ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div className="flex gap-5">
                            <button className="btn  bg-[#FF3811] text-white text-lg capitalize font-medium w-[10.6rem] h-14">Discover More</button>
                            <button className="btn border-white btn-outline text-white text-lg capitalize font-medium w-[10.6rem] h-14">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-12 bottom-12">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-[#FF3811] text-white">❯</a>
                    </div>
                </div>


                {/* card 4 */}

                <div id="slide4" className="carousel-item relative w-full mt-12 ">
                    <img src={img4} className="w-full rounded-xl" />
                    <div className="absolute h-full flex flex-col transform -translate-y-1/2 pt-20 pl-24 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <h1 className="w-[28.9375rem] text-white text-[3.75rem] font-bold leading-[4.6rem]">Affordable Price For Car Servicing</h1>
                        <p className="w-[32rem] text-white text-lg my-[1.87rem] ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div className="flex gap-5">
                            <button className="btn  bg-[#FF3811] text-white text-lg capitalize font-medium w-[10.6rem] h-14">Discover More</button>
                            <button className="btn border-white btn-outline text-white text-lg capitalize font-medium w-[10.6rem] h-14">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-12 bottom-12">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle bg-[#FF3811] text-white">❯</a>
                    </div>
                </div>


                {/* card 5 */}

                <div id="slide5" className="carousel-item relative w-full mt-12 ">
                    <img src={img5} className="w-full rounded-xl" />
                    <div className="absolute h-full flex flex-col transform -translate-y-1/2 pt-20 pl-24 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <h1 className="w-[28.9375rem] text-white text-[3.75rem] font-bold leading-[4.6rem]">Affordable Price For Car Servicing</h1>
                        <p className="w-[32rem] text-white text-lg my-[1.87rem] ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div className="flex gap-5">
                            <button className="btn  bg-[#FF3811] text-white text-lg capitalize font-medium w-[10.6rem] h-14">Discover More</button>
                            <button className="btn border-white btn-outline text-white text-lg capitalize font-medium w-[10.6rem] h-14">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-12 bottom-12">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle bg-[#FF3811] text-white">❯</a>
                    </div>
                </div>


{/* card 6 */}

<div id="slide6" className="carousel-item relative w-full mt-12 ">
                    <img src={img6} className="w-full rounded-xl" />
                    <div className="absolute h-full flex flex-col transform -translate-y-1/2 pt-20 pl-24 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <h1 className="w-[28.9375rem] text-white text-[3.75rem] font-bold leading-[4.6rem]">Affordable Price For Car Servicing</h1>
                        <p className="w-[32rem] text-white text-lg my-[1.87rem] ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div className="flex gap-5">
                            <button className="btn  bg-[#FF3811] text-white text-lg capitalize font-medium w-[10.6rem] h-14">Discover More</button>
                            <button className="btn border-white btn-outline text-white text-lg capitalize font-medium w-[10.6rem] h-14">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-12 bottom-12">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-[#FF3811] text-white">❯</a>
                    </div>
                </div>



               
            </div>

        </div>
    );
};

export default Banner;