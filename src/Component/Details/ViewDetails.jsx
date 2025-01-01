import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Banner from '../Banner/Banner';
import ReactStars from 'react-stars';
import { BsCart } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';

const ViewDetails = () => {
    const {id} = useParams();
    const {products} = useLoaderData();
    const [singleData,setSingleData] = useState([])
    useEffect(()=>{
        const filterProduct = products.filter(product=>product.product_id == id)
        setSingleData(filterProduct)
    },[])
    console.log(singleData)
   
    return (
        <div>
            <Banner></Banner>
            {
                singleData.map(data=><div className="w-8/12 mx-auto bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row gap-8 border-4 border-spacing-6 justify-center items-center lg:-mt-24 -mt-20">
                    <div className="flex-1">
                      <img
                        src={data.product_image}
                        className="lg:w-96 lg:h-96 rounded-xl object-cover mb-4"
                        alt={data.product_title}
                      />
                    </div>
                    <div className="flex-1 space-y-2  lg:text-left">
                      <h2 className="text-2xl font-bold mb-4">{data.product_title}</h2>
                      <p className="text-lg font-semibold">Price: ${data.price}</p>
                      <p className="mt-2">Category: {data.category}</p>
                      <p className="mt-4">{data.description}</p>
                      <h3 className="mt-4 font-semibold">Specifications:</h3>
                      <ul className="list-disc list-inside mb-4 text-left">
                        {data.Specification &&
                          data.Specification.map((spec, index) => (
                            <li key={index}>{spec}</li>
                          ))}
                      </ul>
                      <p className="mt-2">
                        Availability: 
                        <span
                          className={`${
                            data.availability
                              ? "text-green-600 btn-xs border-2 border-green-600 font-bold rounded-full"
                              : "text-red-600 font-bold btn-xs border-2 border-red-600 rounded-full"
                          } ml-2`}
                        >
                          {data.availability ? "In Stock" : "Out of Stock"}
                        </span>
                      </p>
                      <p className="mt-2">
                        <ReactStars count={5} value={data.rating} size={24} activeColor="#ffd700" />
                      </p>
                      <div className="flex gap-2 justify-center lg:justify-start">
                       
                          <button 
                            
                            className="btn text-white outline-2 bg-[hsl(273,75%,55%)] rounded-full font-bold"
                          >
                            Add to cart <BsCart />
                          </button>
                       
              
                  
                          <button
                            
                            className="btn btn-outline outline-2 text-xl text-[#9538E2]  font-bold rounded-full outline-purple-600"
                          >
                           <FaRegHeart />
                          </button>
                       
                      </div>
                    </div>
                  </div>
                ) 
              
            }

        </div>
    );
};

export default ViewDetails;