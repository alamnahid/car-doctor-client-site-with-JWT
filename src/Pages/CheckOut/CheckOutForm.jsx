/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = ({data}) => {
    const {title, _id, price, img} = data;
    const {user} = useContext(AuthContext);
    const [value, setValue] = useState()
    const navigate = useNavigate();

    

    const handleBookService = (e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = value;
        const date = e.target.date.value;
        const message = e.target.message.value;

        const order = {
            customerName: name,
            customerEmail: email,
            customerPhone: phone,
            serviceDate: date,
            serviceTitle: title,
            customerMessage: message,
            service_id: _id,
            price: price,
            serviceImg: img
        }
        fetch('https://car-doctor-server-97ahxp1ro-nahid-alams-projects.vercel.app/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire(
                    'Thanks for your purchase',
                    'Service Added to the Cart',
                    'success'
                  )
                  navigate('/')
            }
        })
        
    }
    
    return (
        <div>
            <div className="w-full h-[44rem] rounded-xl bg-[#F3F3F3] mt-32 ">

                <form onSubmit={handleBookService}>
                    <div className=" flex  justify-between pt-24 lg:px-24 items-center gap-5 ">
                        <input className="w-full  flex-1 h-[3.75rem] rounded-xl bg-white pl-6 placeholder:text-[#A2A2A2]  outline-[#FF3811]" type="text" name="name" id="" placeholder="Your Name" defaultValue={user?.displayName} />

                        <input className="w-full flex-1 h-[3.75rem] rounded-xl bg-white pl-6 placeholder:text-[#A2A2A2]  outline-[#FF3811]" type="email" name="email" id="" placeholder="Your Email" defaultValue={user?.email} />
                    </div>
                    <div className=" flex  justify-between pt-5  lg:px-24 items-center gap-5 ">

                    <PhoneInput className="w-full flex-1 h-[3.75rem] rounded-xl bg-white pl-6 placeholder:text-[#A2A2A2]  outline-[#FF3811]"
                        defaultCountry="BD"
                        value={value}
                        onChange={setValue}/>
                        {/* <input className="w-full  flex-1 h-[3.75rem] rounded-xl bg-white pl-6 placeholder:text-[#A2A2A2]  outline-[#FF3811]" type="text" name="phone" defaultValue={user?.phoneNumber} id="" placeholder="Your Phone" /> */}

                        <input className="w-full flex-1 h-[3.75rem] rounded-xl bg-white pl-6 pr-2 placeholder:text-[#A2A2A2]  outline-[#FF3811] " type="date" name="date" id="" />

                        
                    </div>
                    <div className="  pt-5  lg:px-24  ">
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