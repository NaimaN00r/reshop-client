import React, { useContext, useEffect, useState } from 'react';
import Category from './category';

// import { AuthContext } from '../../../../contexts/AuthProvider';
// import Loading from '../../../Shared/Loading/Loading';
;



const Categories = () => {
    const [categories, setCategory] = useState([]);
    // const {isLoading}=useContext(AuthContext);
    useEffect( () =>{
        fetch('https://watch-box-serverside.vercel.app/Category')
        .then(res =>res.json())
        .then(data => setCategory(data));
    }, []);
    // if(isLoading){
    //     <Loading></Loading>
    // }

    return (
        <div className='bg-stone-200 mt-8 mb-8 pb-12'>
            <div className='text-center mb-4 '>
               
                <h2 className="text-xl font-semibold pt-12">Product Category</h2>
                
            </div>
            <div className='pl-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category =>
                         <Category
                        key={category._id}
                        category={category}
                    ></Category>
                    )
                }
            </div>

        </div>
    );
};

export default Categories;