import quotes from "../../assets/icons/quote 1.svg"

import { useState } from 'react';



const cardData = [
    {
        imageSrc: 'https://i.ibb.co/xjSKDvJ/Md-Nahid-Alam.jpg',
        name: 'Nahid Alam',
        designation: 'Satisfied Customer',
        description: 'Car Doctor is amazing! Fast and reliable service, and their prices are reasonable. Highly recommend!'
    },
    {
        imageSrc: 'https://i.ibb.co/VjHZm4J/image-10.png',
        name: 'Jane Smith',
        designation: 'Happy Driver',
        description: 'Car Doctor is the best in town. They provide top-notch service and have a friendly team. Highly recommended!'
    },
    {
        imageSrc: 'https://i.ibb.co/h8J8SVz/nahid.jpg',
        name: 'Mike Johnson',
        designation: 'Loyal Customer',
        description: 'Car Doctor never lets me down. They are the best in town, offering expertise and professionalism.'
    },
    {
        imageSrc: 'https://i.ibb.co/xjSKDvJ/Md-Nahid-Alam.jpg',
        name: 'Sarah Wilson',
        designation: 'Impressed Car Owner',
        description: 'Took my car to Car Doctor for the first time, and I am impressed with their fast and reliable service!'
    }
];


const Review = () => {


    const [currentSlide, setCurrentSlide] = useState(0);

    const totalCards = cardData.length;
    const cardsToShow = 2; // Number of cards to show at a time

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % totalCards);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + totalCards) % totalCards);
    };

    const renderCards = () => {
        const cards = [];
        for (let i = 0; i < cardsToShow; i++) {
            const cardIndex = (currentSlide + i) % totalCards;
            const { imageSrc, name, designation, description } = cardData[cardIndex];
            cards.push(
                <div key={cardIndex} className="card hover:translate-x-[-20px] w-[34.875rem] flex flex-col  justify-center  h-[21.8125rem] rounded-xl border-2 border-[#E8E8E8]">
                    <div className="flex gap-4 ml-[3.13rem]">
                        <img className='w-[3.75rem] h-[3.75rem] rounded-[50%]' src={imageSrc} alt="" />
                        <div>
                            <h1 className='text-[#444444] text-2xl font-bold'>{name}</h1>
                            <p className='text-[#444444] text-xl font-medium mt-2'>{designation}</p>

                        </div>
                        <img className='w-[3.5rem] h-[3.5rem] ml-20' src={quotes} alt="" />
                    </div>
                    <p className="w-[30rem] mt-5 mx-[3.13rem] text-[#737373]">
                        {description}
                    </p>
                    <div className="ml-[3rem] mt-5">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                        </div>
                    </div>


                </div>
            );
        }
        return cards;
    };






    return (
        <div className="mt-32">
            <div className="text-center">
                <p className="text-[#FF3811] text-xl font-bold">Testimonial</p>
                <h1 className="mt-5 text-[2.8rem] font-bold">What Customer Says</h1>
                <p className="mt-5 mx-auto w-[50rem] text-[#737373]">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>


            <div className="carousel-container relative mt-12">
                <div className="carousel flex justify-evenly items-center">
                    {renderCards()}
                </div>
                <div className=" flex justify-between ">
                    <button className="prev border-2 border-gray-400 shadow-lg btn btn-circle bg-[#FF3811] text-white absolute top-1/2" onClick={prevSlide}>
                        ❮
                    </button>
                    <button className="next border-2 border-gray-400 shadow-lg btn btn-circle bg-[#FF3811] text-white absolute right-0 top-1/2" onClick={nextSlide}>
                        ❯
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Review;