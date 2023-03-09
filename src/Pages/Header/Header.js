import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../Assets/logo.png"
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
// import { AuthContext } from '../../../contexts/AuthProvider';
import {BsCartPlus} from 'react-icons/bs'

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const navigate=useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {navigate('/login') })
            .catch(err => console.log(err));
    }

    const menuItems = <React.Fragment>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/" >Designers</Link></li>
        <li><Link to="/" >Bag</Link></li>
        <li><Link to="/" >Accessories</Link></li>
        <li><Link to="/" >Watches</Link></li>
        <li><Link to="/" >Jwelery</Link></li>
        <li><Link to="/" >Apparel</Link></li>
        <li><Link to="/" >Shoes</Link></li>
    </React.Fragment>
    const menuItems2 = <React.Fragment>
        {user?.uid? 
            <>
            <li><Link to="/dashboard" >Dashboard</Link></li> 
            <li><Link to="/Blog" >Blog</Link></li> 
            <li><button onClick={handleLogOut} >Sign out</button></li>
            </>
         : <li><Link to="/login" >Login</Link></li>}
    </React.Fragment>

    return (

<div className="navba bg-white">
           <div className='flex flex-col w-full'>
           <div className="navbar-center">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        {menuItems}
                    </ul>
                    <ul tabIndex={2} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        {menuItems2}
                    </ul>
                </div>
                <div className='flex justify-between w-full'>
                <div className='flex flex-row gap-4 '>
                <Link to="/" className="pr-0 mr-0 pl-8">
                     <img style={{height:50}} src={logo} alt="" />
                </Link>
                {/* <Link to="/" className="text-4xl text-white h-8 pl-0">Box</Link> */}
                <div className='w-full'>
                <input type="text" placeholder="Try searching your needed bag" className="input input-bordered w-full max-w-2xl rounded-none" />
                </div>
                </div>
                <div  className="navbar-center hidden  pl-4 pr-4 lg:flex">
                <div className=''>
                <ul className="menu menu-horizontal p-0">
                  
                   {menuItems2}
                   
                </ul>
                <ul className="menu menu-horizontal p-0">
                  
                   <BsCartPlus></BsCartPlus>
                   
                </ul>
                </div>
            </div>
                </div>
            </div>
            <div  className="navbar-center hidden justify-between pl-4 pr-4 lg:flex">
                <div>
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
                </div>
                <div className=''>
                    <btn className="btn btn-active btn-link text-black p-3">Buy</btn>
                    <btn className="btn  rounded-none pt-0 pb-0 pr-8 pl-8 mb-4 bg-sky-500 outline-none ">Sell</btn>
                </div>
            </div>
           </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Header;