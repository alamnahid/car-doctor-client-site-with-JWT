import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const CheckOutForm = ({data}) => {
    const {title, _id, price} = data;
    const {user} = useContext(AuthContext);
    console.log(user)

    const handleBookService = (e)=>{
        e.preventDefault()
        const fname = e.target.fname.value;
    }
    
    return (
        <div>
            <div className="w-full h-[44rem] rounded-xl bg-[#F3F3F3] mt-32 ">

                <form onSubmit={handleBookService}>
                    <div className=" flex  justify-between pt-24 px-24 items-center gap-5 ">
                        <input className="w-full  flex-1 h-[3.75rem] rounded-xl bg-white pl-6 placeholder:text-[#A2A2A2]  outline-[#FF3811]" type="text" name="fname" id="" placeholder="Your Name" defaultValue={user?.displayName} />

                        <input className="w-full flex-1 h-[3.75rem] rounded-xl bg-white pl-6 placeholder:text-[#A2A2A2]  outline-[#FF3811]" type="email" name="email" id="" placeholder="Your Email" defaultValue={user?.email} />
                    </div>
                    <div className=" flex  justify-between pt-5  px-24 items-center gap-5 ">
                        <input className="w-full  flex-1 h-[3.75rem] rounded-xl bg-white pl-6 placeholder:text-[#A2A2A2]  outline-[#FF3811]" type="text" name="phone" defaultValue={user?.phoneNumber} id="" placeholder="Your Phone" />

                        <input className="w-full flex-1 h-[3.75rem] rounded-xl bg-white pl-6 placeholder:text-[#A2A2A2]  outline-[#FF3811]" type="text" name="title" id="" placeholder="" defaultValue={title}  readOnly/>
                    </div>
                    <div className="  pt-5  px-24  ">
                        <textarea
                        className="w-full flex-1 h-[15.75rem] pt-4 rounded-xl bg-white pl-6 placeholder:text-[#A2A2A2]  outline-[#FF3811]"
                            id="message"
                            name="message"
                            
                            placeholder="Enter your message"
                        ></textarea>
                    </div>

                    <div className=" pt-5  px-24">
                        <input className="w-full  flex-1 h-[3.75rem] rounded-xl text-white cursor-pointer text-xl font-medium btn-secondary capitalize pl-6  bg-[#FF3811]" type="submit" value="Order Confirm" placeholder="Your Phone" />

                        
                    </div>


                </form>

            </div>

        </div>
    );
};

export default CheckOutForm;