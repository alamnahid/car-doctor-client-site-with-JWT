/* eslint-disable no-unused-vars */
import login from "../../assets/images/login/login.svg"
import facebook from "../../assets/icons/facebook.svg"
import linkedin from "../../assets/icons/linkedin.svg"
import google from "../../assets/icons/google.svg"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../Shared/Navbar";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {

    const location = useLocation()
    const navigate = useNavigate()


    const {signIn, googleSignIn} = useContext(AuthContext);
    const handleLogin = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        signIn(email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const user = { email };

            // get access token
            axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                .then(res => {
                    console.log(res.data)
                    if (res.data.success) {
                        navigate(location?.state ? location?.state : '/')
                    }
                    Swal.fire(
                        'Good job!',
                        'Successfully Logged In',
                        'success'
                      )
                })

        })
        .catch(error=>{
            console.error(error)
        })
    }
    const handleGoogleLogin = ()=>{
        googleSignIn()
        .then(result=>{
            navigate(location?.state ? location.state : '/')
            Swal.fire(
                'Good job!',
                'Successfully Logged In',
                'success'
              )
        })
        .catch(error=>{console.log(error)})
    }

    const handleFacebookLogin = ()=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Facebook Login Not available right now! Use google or email password',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    const handleLinkedinogin = ()=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Facebook Login Not available right now! Use google or email password',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    return (
        <div>
           <div className="lg:pb-32">
           <Navbar></Navbar>
           </div>
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center my-20 gap-16 p-3 lg:p-0">
            <div>
                <img src={login} alt="" />
            </div>
            <div className="w-full lg:w-[38rem] h-[52.5rem] rounded-xl border-2 border-[#D0D0D0] p-3 lg:p-0">

                <h1 className="text-[#444444] text-[2.5rem] font-semibold text-center mt-[4.6rem]">Log in</h1>

                <form onSubmit={handleLogin} className="mt-12">
                   

                    <p className="mt-[2.1rem] text-[#444444] lg:ml-[4.69rem] text-lg font-semibold">Email</p>
                    <input className="w-full lg:w-[28.8rem] lg:mx-[4.69rem] mt-5 h-[3.75rem] rounded-xl border-2 border-[#E8E8E8] outline-none placeholder:text-[#A2A2A2] pl-5 " type="email" name="email" placeholder="Your email" id="" />

                    <p className="mt-[2.1rem] text-[#444444] lg:ml-[4.69rem] text-lg font-semibold">Confirm Password</p>
                    <input className="w-full lg:w-[28.8rem] lg:mx-[4.69rem] mt-5 h-[3.75rem] rounded-xl border-2 border-[#E8E8E8] outline-none placeholder:text-[#A2A2A2] pl-5 " type="password" name="password" placeholder="Your Password" id="" />

                    
                    <input className="w-full lg:w-[28.8rem] mt-7 lg:mx-[4.69rem] h-[4rem] rounded-xl border-2 btn bg-[#FF3811] text-white text-xl btn-secondary font-semibold capitalize " type="submit" value="Sign in"  />

                    <p className="text-center text-[#444444] text-lg font-medium mt-7">Or Sign in with</p>

                    <div className="flex gap-4 items-center justify-center mt-7">
                        <div onClick={handleFacebookLogin} className="w-[3.5rem] cursor-pointer h-[3.5rem] flex justify-center items-center bg-[#F5F5F8] rounded-[50%]">
                            <img src={facebook} alt="" />
                        </div>
                        <div onClick={handleLinkedinogin} className="w-[3.5rem] cursor-pointer h-[3.5rem] flex justify-center items-center bg-[#F5F5F8] rounded-[50%]">
                            <img src={linkedin} alt="" />
                        </div>
                        <div onClick={handleGoogleLogin} className="w-[3.5rem] cursor-pointer h-[3.5rem] flex justify-center items-center bg-[#F5F5F8] rounded-[50%]">
                            <img src={google} alt="" />
                        </div>
                    </div>

                    <p className="text-[#737373] text-center text-xl mt-12">Do not have an account? <Link className="text-[#FF3811] font-semibold" to="/signup">Sign Up</Link></p>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Login;