import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

import deletee from "../../assets/icons/delete.svg"
import Swal from "sweetalert2";
import CartBanner from "./CartBanner";


const CartDetails = () => {
  const { user } = useContext(AuthContext)
  console.log(user?.email)
  const [bookings, setBookings] = useState([])

  const url = `https://car-doctor-server-97ahxp1ro-nahid-alams-projects.vercel.app/bookings?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setBookings(data))
  }, [url])

  const handleDelete = (id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://car-doctor-server-97ahxp1ro-nahid-alams-projects.vercel.app/bookings/${id}`, {
          method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount > 0){
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            const remaining = bookings.filter(booking=>booking._id !== id)
            setBookings(remaining)
          }
          
        })

      }
    })
  }

  const handleConfirm = id=>{
    fetch(`https://car-doctor-server-97ahxp1ro-nahid-alams-projects.vercel.app/bookings/${id}`,{
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({status: 'confirm'})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount > 0){
        // update state
        const remaining = bookings.filter(booking=>booking._id !== id);
        const updated = bookings.find(booking=>booking._id===id)
        updated.status = 'confirm'
        const newBookings = [updated, ...remaining];
        setBookings(newBookings)
      }
    })
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[95rem] mx-auto pt-16">
        <CartBanner></CartBanner>


        <div className="overflow-x-auto mt-24">
          <table className="table">

            <tbody>
              {/* row 1 */}

              {
                bookings.map(booking => <tr key={booking._id} className="flex justify-between items-center flex-col lg:flex-row gap-4 lg:gap-0">
                  <th>
                    <label>
                      <img onClick={()=>handleDelete(booking._id)} className="cursor-pointer" src={deletee} alt="" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-[9.375rem] h-[9.375rem] rounded-xl">
                          <img className="w-[9.375rem] h-[9.375rem] rounded-xl" src={booking.serviceImg} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div className="pl-4">
                        <div className="font-bold text-[#444444] text-xl">{booking.serviceTitle}</div>
                        <div className="text-sm opacity-50 text-[#A2A2A2] mt-3">Color : Green</div>
                        <div className="text-sm opacity-50 text-[#A2A2A2] mt-2">Size: S</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-[#444444] text-xl font-medium">
                    {user?.email}


                  </td>
                  <td className="text-[#2D2D2D] text-xl font-medium">{booking?.serviceDate}</td>
                  <th>
                   {
                      booking.status === 'confirm' ?  <button onClick={()=>handleConfirm(booking._id)} className="btn btn-outline border-green-700 text-lg w-[7.5rem] font-semibold text-gray-700">Approved</button>
                      :
                      <button onClick={()=>handleConfirm(booking._id)} className="btn btn-secondary bg-[#FF3811] text-lg w-[7.5rem] font-semibold text-white">Pending</button>
                   }
                  </th>
                </tr>)
              }


            </tbody>


          </table>
        </div>












      </div>

      <Footer></Footer>

    </div>
  );
};

export default CartDetails;