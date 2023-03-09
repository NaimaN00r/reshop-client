import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    console.log(category);
    const { _id,title,img, description} = category;
    console.log(_id);
    return (
        <div className="card card-compact w-96 bg-white shadow-xl rounded-none">
            <div>
            <figure><img className='w-full h-1/3 rounded-none' src={img} alt="Shoes" /></figure>
            </div>
       <div className="card-body rounded-none">
        <h1 className='text-center font-semibold text-xl'>{title}</h1>
       <p className='text-center'>{description}</p>
       <div className='flex justify-center items-center'>
       <Link to={`products/${title}`}><button className="btn btn-outline bg-gray-200  text-black">View Details</button>
         </Link> 
       </div>
         </div>
</div>
    );
};

export default Category;