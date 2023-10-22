import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="flex gap-24 items-center my-32">
            <div className="relative w-1/2">
                <img className="w-3/4 rounded-xl " src={person} alt="" />
                <img className="w-1/2 rounded-xl border-8 border-white absolute top-1/2 left-1/2 " src={parts} alt="" />
            </div>
            <div className="lg:w-1/2">
                <h1 className="text-[#FF3811] text-xl font-bold">About Us</h1>
                <h1 className=" text-[2.8rem] mt-5 text-[#151515] font-semibold">We are qualified & of experience in this field</h1>
                <p className="pr-6 text-justify mt-7 text-[#737373] text-base">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <p className="pr-6 text-justify mt-5 text-[#737373] text-base">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
                <button className="btn mt-7  bg-[#FF3811] text-white text-lg capitalize font-medium w-[10.6rem] h-14">Get More Info</button>

            </div>
        </div>
    );
};

export default About;