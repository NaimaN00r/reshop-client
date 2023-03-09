import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
// import Loading from '../../Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import CategoryCard from './CategoryCard';




const SubCategories = () => {
    const [products, setproducts] = useState(useLoaderData());
    const [Product, setProduct] = useState(null);
    // const {isLoading}=useContext(AuthContext);
    console.log(products);
    // if(isLoading){
    //     <Loading></Loading>
    // }
    return (
        <div>
            <div className='text-center mb-4'>
               
                <h2 className="text-5xl font-semibold pt-12">Resell Products</h2>
                
            </div>
            <div className='pl-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => !product.paid &&
                        
                        <CategoryCard
                        key={product._id}
                        product={product}
                        setProduct={setProduct}
                    ></CategoryCard>
                    
                    )
                }
            </div>
           {
                Product &&
                <BookingModal
                Product={Product}
                setProduct={setProduct}

            ></BookingModal>
            }
           
        </div>
    );
};

export default SubCategories;