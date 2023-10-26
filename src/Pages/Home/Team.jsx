import facebook from "../../assets/icons/fbgroup.svg"
import twitter from "../../assets/icons/twittergroup.svg"
import linkedin from "../../assets/icons/linkedingroup.svg"
import instagram from "../../assets/icons/instaaaa.svg"
import instalogo from "../../assets/icons/insragram.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect, useState } from 'react';



const cardData = [
    {
        imageSrc: "https://i.ibb.co/RH3LSG4/1.jpg",
        title: 'Car Engine Plug',
        designation: 'Engine Expert'
    },
    {
        imageSrc: "https://i.ibb.co/0XXZL6b/2.jpg",
        title: 'Transmission Pro',
        designation: 'Gearbox Specialist'
    },
    {
        imageSrc: "https://i.ibb.co/7RHJTS3/3.jpg",
        title: 'Brake Wizard',
        designation: 'Braking System Guru'
    },
    {
        imageSrc: "https://i.ibb.co/0XXZL6b/2.jpg",
        title: 'Electrical Maestro',
        designation: 'Auto Electrical Specialist'
    },
    {
        imageSrc: "https://i.ibb.co/RH3LSG4/1.jpg",
        title: 'Suspension Savvy',
        designation: 'Suspension System Pro'
    },
    {
        imageSrc: "https://i.ibb.co/7RHJTS3/3.jpg",
        title: 'AC & Cooling Champ',
        designation: 'Cooling System Specialist'
    },
];

const Team = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        // Initialize AOS
        AOS.init();
      }, []);

    const totalCards = cardData.length;
    const cardsToShow = 3; // Number of cards to show at a time

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
            const { imageSrc, title, designation } = cardData[cardIndex];
            cards.push(
                <div data-aos="fade-down" key={cardIndex} className="card hover:translate-x-[-20px] cursor-pointer w-[22.75rem] h-[30.4rem] rounded-xl border-2 border-[#E8E8E8]">
                    <img className='w-[19.6rem] mt-[1.56rem] h-[18.3rem] rounded-xl mx-auto' src={imageSrc} alt={title} />
                    <h1 className='text-center text-[#444444] font-bold text-2xl'>{title}</h1>
                    <h1 className='text-[#737373] mt-3 text-xl text-center '>{designation}</h1>

                    <div className="flex justify-center items-center gap-3 mt-4">
                        <img src={facebook} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={twitter} alt="" />
                        <div className="w-[2.47925rem] h-[2.47925rem] rounded-[50%] flex justify-center items-center relative">
                            <img src={instagram} alt="" />
                            <img className="absolute" src={instalogo} alt="" />


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
                <p className="text-[#FF3811] text-xl font-bold">Team</p>
                <h1 className="mt-5 text-2xl lg:text-[2.8rem] font-bold">Meet Our Team</h1>
                <p className="mt-5 mx-auto lg:w-[50rem] text-[#737373]">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div className="carousel-container relative mt-12">
                <div className="carousel flex flex-col lg:flex-row justify-evenly items-center">
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

export default Team;