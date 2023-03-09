import { useQuery } from '@tanstack/react-query';
import { Footer, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Outlet, useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import useBuyer from '../../hooks/useBuyer';
import Loading from '../../Loading/Loading';
import Header from '../../Pages/Header/Header';
;

const DashboardLayout = () => {
    const {isLoading}=useContext(AuthContext);
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://watch-box-serverside.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);

    if(isLoading){
        <Loading></Loading>
    }
    return (
        <div>
            
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                 <Header></Header>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3R5bGV8ZW58MHx8MHx8&w=1000&q=80")`}}>
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 mt-20  text-base-content">
                    {/* <li><Link to="/blog">Blogs</Link></li> */}
                     {
                        isAdmin && <>
                            <li><button className='btn  btn-warning m-5'><Link to="/dashboard/allsellers">All Seller</Link></button></li>
                            <li><button className='btn  btn-warning m-5 '><Link to="/dashboard/allbuyers">All Buyer</Link></button></li>
                            {/* <li><Link to="/dashboard/managedoctors">Manage Doctor</Link></li> */}
                        </>
                    } 
                     {
                        isSeller && <>
                            <li><button className='btn  btn-warning m-5 '><Link to="/dashboard/addproduct">Add A Product</Link></button></li>
                            <li><button className='btn  btn-warning m-5'><Link to="/dashboard/myproduct">My Product</Link></button></li>
                            <li><button className='btn  btn-warning m-5'><Link to="/dashboard/mybuyers">My Buyers</Link></button></li>
                            {/* <li><Link to="/dashboard/managedoctors">Manage Doctor</Link></li> */}
                        </>
                    } 
                     {
                        isBuyer && <>
                            
                            <button className='btn  btn-warning m-5'><li><Link to="/dashboard/myorder">My Orders</Link></li></button>
                            <button className='btn  btn-warning m-5'><li><Link to="/dashboard/mywishlist">My WishList</Link></li></button>
                            
                            {/* <li><Link to="/dashboard/managedoctors">Manage Doctor</Link></li> */}
                        </>
                    } 
                    {/* <li><Link to="/dashboard/allusers">All users</Link></li>
                    */}
                    {/* {
                            users.map((user) =>
                                { 
                                user?.role == 'admin' && <>
                                <li><Link to="/dashboard/allseller">All Seller</Link></li>
                                <li><Link to="/dashboard/allBuyer">All Buyer</Link></li>
                                </>
                            })
                    } */}
                   

                </ul>

            </div>
        </div>
        
    </div>
    );
};

export default DashboardLayout;