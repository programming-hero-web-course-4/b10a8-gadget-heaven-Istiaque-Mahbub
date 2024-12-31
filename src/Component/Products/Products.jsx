import { useEffect, useState } from "react";
import Card from "./Card";


const Products = ({categories}) => {
    const [product,setProduct] = useState([]);
    const [categoryData,setCategoryData] = useState([]);
    const [activeCategory,setActiveCategory] = useState('All Categories');

    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setProduct(data.products);
            setCategoryData(data.products);
        })
    },[])



    const handleAllData = () =>{
        setCategoryData(product);
        setActiveCategory("All Categories");
    } 

    const handleCategoryButton = (category) =>{
        const filterData = product.filter(item => item.category === category);
         setCategoryData(filterData);
         setActiveCategory(category);
    }
    return (
        <div className='m-10 space-y-12'>
            <div>
                <h2 className='text-4xl text-center'>Explore Cutting-Edge Gadgets</h2>
            </div>
        <div className='grid lg:grid-cols-12 grid-cols-1 gap-10'>
             <div className='lg:col-span-3 '>
               <div className='flex flex-col space-y-5'>
                <button onClick={handleAllData}
                 className={`${
                        activeCategory === 'All Categories' ? 'bg-[#9538E2] text-white' : 'border-2 border-[#9538E2] text-[#9538E2]'
                    }font-bold btn-lg rounded-full` }>
                    All Categories
                </button>
                {
                   categories.map(category=><button onClick={()=>handleCategoryButton(category.category)}
                     key={category.category} 
                    className={`${
                        activeCategory === category.category ? 'bg-[#9538E2] text-white' : 'border-2 border-[#9538E2] text-[#9538E2]'
                    }font-bold btn-lg rounded-full`}>
                    {category.category}
                   </button>)
                }
               </div>
             </div>

             <div className="col-span-9">
             {categoryData.length > 0 ? (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            {categoryData.map(data => (
                                <Card key={data.product_id} data={data} />
                            ))}
                        </div>
                    ) : (
                        <div>
                            <h3 className='font-bold text-3xl text-center'>No products available for this category.</h3>
                        </div>
                    )}
             </div>
        </div>
        </div>
    );
};

export default Products;