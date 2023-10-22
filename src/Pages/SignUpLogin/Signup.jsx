import login from "../../assets/images/login/login.svg"
import facebook from "../../assets/icons/facebook.svg"
import linkedin from "../../assets/icons/linkedin.svg"
import google from "../../assets/icons/google.svg"
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="flex justify-center items-center my-20 gap-16">
            <div>
                <img src={login} alt="" />
            </div>
            <div className="w-[38rem] h-[57.5rem] rounded-xl border-2 border-[#D0D0D0]">

                <h1 className="text-[#444444] text-[2.5rem] font-semibold text-center mt-[4.6rem]">Sign Up</h1>

                <form className="mt-12">
                    <p className=" text-[#444444] ml-[4.69rem] text-lg font-semibold">Name</p>
                    <input className="w-[28.8rem] mx-[4.69rem] mt-5 h-[3.75rem] rounded-xl border-2 border-[#E8E8E8] outline-none placeholder:text-[#A2A2A2] pl-5 " type="text" name="name" placeholder="Your name" id="" />

                    <p className="mt-[2.1rem] text-[#444444] ml-[4.69rem] text-lg font-semibold">Email</p>
                    <input className="w-[28.8rem] mx-[4.69rem] mt-5 h-[3.75rem] rounded-xl border-2 border-[#E8E8E8] outline-none placeholder:text-[#A2A2A2] pl-5 " type="email" name="email" placeholder="Your email" id="" />

                    <p className="mt-[2.1rem] text-[#444444] ml-[4.69rem] text-lg font-semibold">Confirm Password</p>
                    <input className="w-[28.8rem] mx-[4.69rem] mt-5 h-[3.75rem] rounded-xl border-2 border-[#E8E8E8] outline-none placeholder:text-[#A2A2A2] pl-5 " type="password" name="password" placeholder="Your Password" id="" />

                    
                    <input className="w-[28.8rem] mt-7 mx-[4.69rem] h-[4rem] rounded-xl border-2 btn bg-[#FF3811] text-white text-xl font-semibold capitalize " type="submit" value="Sign Up"  />

                    <p className="text-center text-[#444444] text-lg font-medium mt-7">Or Sign Up with</p>

                    <div className="flex gap-4 items-center justify-center mt-7">
                        <div className="w-[3.5rem] h-[3.5rem] flex justify-center items-center bg-[#F5F5F8] rounded-[50%]">
                            <img src={facebook} alt="" />
                        </div>
                        <div className="w-[3.5rem] h-[3.5rem] flex justify-center items-center bg-[#F5F5F8] rounded-[50%]">
                            <img src={linkedin} alt="" />
                        </div>
                        <div className="w-[3.5rem] h-[3.5rem] flex justify-center items-center bg-[#F5F5F8] rounded-[50%]">
                            <img src={google} alt="" />
                        </div>
                    </div>

                    <p className="text-[#737373] text-center text-xl mt-12">Already have an account? <Link className="text-[#FF3811] font-semibold" to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;