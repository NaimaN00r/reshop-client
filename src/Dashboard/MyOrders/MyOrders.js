import { useQuery } from '@tanstack/react-query';
import React, { useContext }  from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Loading from '../../Loading/Loading';




const MyOrders = () => {
    const { user,isLoading } = useContext(AuthContext);

    const url = `https://watch-box-serverside.vercel.app/bookings?email=${user?.email}`;

    const { data: products = [] } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url,
                 {
                headers: {
                   authorization: `bearer ${localStorage.getItem('accessToken')}` 
                }
            }
            );
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        <Loading></Loading>
    }

    return (
        <div>
            <h3 className="text-3xl mb-5">My product</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th></th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        {   
                            products &&
                            products?.map((product, i) => <tr key={product._id}>
                                <th>{i+1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={product.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    {/* {booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button
                                    className='btn btn-primary btn-sm'>Pay
                                    </button></Link>
                                    } */}
                                    
                                     {product.price && !product.paid && <Link to={`/dashboard/payment/${product._id}`}><button
                                     className='btn btn-primary btn-sm'>Pay
                                     </button></Link>
                                     }
                                     {
                                         product.price && product.paid && <span className='text-primary'>Paid</span>
                                     }
        
                                    </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div> 
        </div>
    );
};

export default MyOrders;