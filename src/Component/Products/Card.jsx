import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({data}) => {
    const {product_title,product_image,price,category} =data
    return (
        <div>
             <div className="bg-white shadow-lg rounded-lg ">
            <img
                src={product_image}
               
                className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">{product_title}</h2>
                <h4> {category}</h4>
                <p className="text-lg font-bold text-gray-900 mt-2">${price}</p> 
              <Link>
              <button  className="mt-4 w-full bg-[#9538E2] text-white font-bold py-2 rounded-full hover:bg-[#7a1cae] transition">
                    View Details
                </button>
              </Link>
            </div>
        </div>
        </div>
    );
};

export default Card;