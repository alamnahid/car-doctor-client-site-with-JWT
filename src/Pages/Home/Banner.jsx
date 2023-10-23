import { useState } from "react"
import img1 from "../../assets/images/banner/1.jpg"
import img2 from "../../assets/images/banner/2.jpg"
import img3 from "../../assets/images/banner/3.jpg"
import img4 from "../../assets/images/banner/4.jpg"
import img5 from "../../assets/images/banner/5.jpg"
import img6 from "../../assets/images/banner/6.jpg"
import { useEffect } from "react"

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
          // Change to the next slide after 3 seconds
          const nextSlide = currentSlide === 4 ? 1 : currentSlide + 1;
          setCurrentSlide(nextSlide);
        }, 3000); // 3 seconds
    
        return () => {
          // Clear the timer when the component unmounts
          clearInterval(timer);
        };
      }, [currentSlide]);
      const goToSlide = (slideNumber) => {
        setCurrentSlide(slideNumber);
      };
    return (
        <div>
            <div className="carousel w-full h-[38rem] mt-20">
                <div id="slide1" className={`carousel-item relative w-full mt-12 ${currentSlide === 1 ? 'active' : 'hidden'}`}>
                    <img src={img1} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full flex flex-col transform -translate-y-1/2 pt-20 pl-24 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <h1 className="w-[28.9375rem] text-white text-[3.75rem] font-bold leading-[4.6rem]">Affordable Price For Car Servicing</h1>
                        <p className="w-[32rem] text-white text-lg my-[1.87rem] ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div className="flex gap-5">
                            <button className="btn  bg-[#FF3811] text-white text-lg capitalize font-medium w-[10.6rem] h-14">Discover More</button>
                            <button className="btn border-white btn-outline text-white text-lg capitalize font-medium w-[10.6rem] h-14">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-12 bottom-12">
                    <button onClick={() => goToSlide(6)} className="btn btn-circle">❮</button>
                    <button onClick={() => goToSlide(2)} className="btn btn-circle bg-[#FF3811] text-white">❯</button>
                        
                    </div>
                </div>

                {/* card 2 */}

                <div id="slide2" className={`carousel-item relative w-full mt-12 ${currentSlide === 2 ? 'active' : 'hidden'}`}>
                    <img src={img2} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full flex flex-col transform -translate-y-1/2 pt-20 pl-24 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <h1 className="w-[28.9375rem] text-white text-[3.75rem] font-bold leading-[4.6rem]">Expert Mechanics at Car Doctor</h1>
                        <p className="w-[32rem] text-white text-lg my-[1.87rem] ">Our skilled mechanics provide comprehensive car care, ensuring your vehicles peak performance.</p>

                        <div className="flex gap-5">
                            <button className="btn  bg-[#FF3811] text-white text-lg capitalize font-medium w-[10.6rem] h-14">Discover More</button>
                            <button className="btn border-white btn-outline text-white text-lg capitalize font-medium w-[10.6rem] h-14">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-12 bottom-12">
                    <button onClick={() => goToSlide(1)} className="btn btn-circle">❮</button>
                    <button onClick={() => goToSlide(3)} className="btn btn-circle bg-[#FF3811] text-white">❯</button>
                    </div>
                </div>


                {/* card 3 */}


                <div id="slide3" className={`carousel-item relative w-full mt-12 ${currentSlide === 3 ? 'active' : 'hidden'}`}>
                    <img src={img3} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full flex flex-col transform -translate-y-1/2 pt-20 pl-24 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <h1 className="w-[28.9375rem] text-white text-[3.75rem] font-bold leading-[4.6rem]">Your Trusted Auto Repair Specialist</h1>
                        <p className="w-[32rem] text-white text-lg my-[1.87rem] ">Experience top-notch car servicing and repairs at Car Doctor, where quality and reliability meet.</p>

                        <div className="flex gap-5">
                            <button className="btn  bg-[#FF3811] text-white text-lg capitalize font-medium w-[10.6rem] h-14">Discover More</button>
                            <button className="btn border-white btn-outline text-white text-lg capitalize font-medium w-[10.6rem] h-14">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-12 bottom-12">
                    <button onClick={() => goToSlide(2)} className="btn btn-circle">❮</button>
                    <button onClick={() => goToSlide(4)} className="btn btn-circle bg-[#FF3811] text-white">❯</button>
                    </div>
                </div>


                {/* card 4 */}

                <div id="slide4" className={`carousel-item relative w-full mt-12 ${currentSlide === 4 ? 'active' : 'hidden'}`}>
                    <img src={img4} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full flex flex-col transform -translate-y-1/2 pt-20 pl-24 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <h1 className="w-[32.9375rem] text-white text-[3.75rem] font-bold leading-[4.6rem]">Efficient Repairs, Exceptional Results</h1>
                        <p className="w-[32rem] text-white text-lg my-[1.87rem] ">Discover the art of efficient car repair at Car Doctor, where precision meets performance, and satisfaction is guaranteed</p>

                        <div className="flex gap-5">
                            <button className="btn  bg-[#FF3811] text-white text-lg capitalize font-medium w-[10.6rem] h-14">Discover More</button>
                            <button className="btn border-white btn-outline text-white text-lg capitalize font-medium w-[10.6rem] h-14">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-12 bottom-12">
                    <button onClick={() => goToSlide(3)} className="btn btn-circle">❮</button>
                    <button onClick={() => goToSlide(5)} className="btn btn-circle bg-[#FF3811] text-white">❯</button>
                    </div>
                </div>


                {/* card 5 */}

                <div id="slide5" className={`carousel-item relative w-full mt-12 ${currentSlide === 5 ? 'active' : 'hidden'}`}>
                    <img src={img5} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full flex flex-col transform -translate-y-1/2 pt-20 pl-24 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <h1 className="w-[32.9375rem] text-white text-[3.75rem] font-bold leading-[4.6rem]">Car Doctors Commitment to Your Cars Health</h1>
                        <p className="w-[32rem] text-white text-lg my-[1.87rem] ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div className="flex gap-5">
                            <button className="btn  bg-[#FF3811] text-white text-lg capitalize font-medium w-[10.6rem] h-14">Discover More</button>
                            <button className="btn border-white btn-outline text-white text-lg capitalize font-medium w-[10.6rem] h-14">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-12 bottom-12">
                    <button onClick={() => goToSlide(4)} className="btn btn-circle">❮</button>
                    <button onClick={() => goToSlide(6)} className="btn btn-circle bg-[#FF3811] text-white">❯</button>
                    </div>
                </div>


                {/* card 6 */}

                <div id="slide6" className={`carousel-item relative w-full mt-12 ${currentSlide === 6 ? 'active' : 'hidden'}`}>
                    <img src={img6} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full flex flex-col transform -translate-y-1/2 pt-20 pl-24 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <h1 className="w-[32.9375rem] text-white text-[3.75rem] font-bold leading-[4.6rem]">Car Doctors Commitment to Your Cars Health</h1>
                        <p className="w-[32rem] text-white text-lg my-[1.87rem] ">Trust Car Doctor to care for your car as if it were our own. We are dedicated to keeping your vehicle in its best shape.</p>

                        <div className="flex gap-5">
                            <button className="btn  bg-[#FF3811] text-white text-lg capitalize font-medium w-[10.6rem] h-14">Discover More</button>
                            <button className="btn border-white btn-outline text-white text-lg capitalize font-medium w-[10.6rem] h-14">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-12 bottom-12">
                    <button onClick={() => goToSlide(5)} className="btn btn-circle">❮</button>
                    <button onClick={() => goToSlide(1)} className="btn btn-circle bg-[#FF3811] text-white">❯</button>
                    </div>
                </div>




            </div>

        </div>
    );
};

export default Banner;