import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Loading from '../../Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import CategoryCard from '../Categories/CategoryCard';


const Advertise = () => {
    const { user,isLoading } = useContext(AuthContext);
    const [Product, setProduct] = useState(null);
    const url = 'https://watch-box-serverside.vercel.app/products1/Advertised';

    const { data: products = [] } = useQuery({
        queryKey: ['Advertised'],
        queryFn: async () => {
            const res = await fetch(url
            //     headers: {
            //        authorization: `bearer ${localStorage.getItem('accessToken')}` 
            //     }
            // }
            );
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        <Loading></Loading>
    }
    return (
    //     <div>
    //         <h1 className='text-center'>Advertise Items</h1>
    //         <div className="carousel carousel-center rounded-box">
    //     {
    //         products?.map(product=>
    //             <div className="card w-96 bg-base-100 shadow-xl">
    //           <figure><img src={product.image} alt="Shoes" /></figure>
    //           <div className="card-body">
    //           <h2 className="card-title">{product.name}</h2>
    //           <h2 className="card-title">Resell Price:{product.price}</h2>
    //           <h2 className="card-title">Used:{product.used}</h2>
    //           <h2 className="card-title">Condition: {product.condition}</h2>
    //           <h2 className="card-title">{product.mobile}</h2>
    //           <p>{product.description}</p>
    //             <div className="card-actions justify-end">
    //            <button  className="btn btn-primary">Buy Now</button>
    //            </div>
    //             </div>
    //             </div> )
    //     }

    //   </div>
    //     </div>
    <div>
            <div className='text-center mb-4'>
               
                {/* <h2 className="text-5xl font-semibold pt-12">Resell Products</h2> */}
                
            </div>
            <div className='pl-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products &&
                    products.map(product =>
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

export default Advertise;