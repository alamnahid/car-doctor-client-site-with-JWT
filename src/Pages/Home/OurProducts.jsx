import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


const OurProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        // Initialize AOS
        AOS.init();
      }, []);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="mt-32">
            <div className="text-center">
                <p className="text-[#FF3811] text-xl font-bold">Popular Products</p>
                <h1 className="mt-5 text-2xl lg:text-[2.8rem] font-bold">Browse Our Products</h1>
                <p className="mt-5 mx-auto lg:w-[50rem] text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div className="mt-12 grid gap-8 justify-items-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">


                {
                    products?.map(product=><Link key={product.id}><div  data-aos="fade-down" className="w-[22.75rem] h-[24.3rem] border-2 border-[#E8E8E8] rounded-xl ">
                    <div className="bg-[#F3F3F3] mx-auto w-[20.375rem] mt-[1.56rem] h-[13.437rem] rounded-xl flex justify-center items-center">
                        <img className="w-[10rem]" src={product.image} alt="" />
                    </div>
                    <div className="text-center mt-5">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                    </div>
                    <h1 className="text-[#444444] text-center my-[0.6rem] text-2xl font-semibold">{product.title}</h1>
                    <p className="text-[#FF3811] text-center text-xl font-semibold">${product.price}</p>

                </div></Link>)
                }
            </div>

            

        </div>
    );
};

export default OurProducts;