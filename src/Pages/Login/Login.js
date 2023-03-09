import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle,} from "react-icons/fa";

import { GoogleAuthProvider } from 'firebase/auth';

import Loading from '../../Loading/Loading';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';



// import useToken from '../../hooks/useToken';



const Login = () => {
    const { login,providerLogin,isLoading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [loginUserEmail, setLoginUserEmail] = useState('');
    // const [token] = useToken(loginUserEmail);

    
    const from = location.state?.from?.pathname || '/';
    // if(token){
    //     navigate(from, {replace: true});
    // }

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                setLoginUserEmail(user.email)
                const User = {
                    name: user.name, 
                    email: user.email,
                    role: "Buyer",
                }
    
                // save users information to the database
                fetch('https://watch-box-serverside.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                    },
                    body: JSON.stringify(User)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                })
            })
            .catch(error => console.error(error))
    }
      
    if(isLoading){
        <Loading></Loading>
    }
    

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                setLoginUserEmail(user.email)

                const currentUser = {
                    email: user.email,
                    
                }

                console.log(currentUser);

                
            })
            .catch(error => console.log(error));
    }
    return (
        <div className="hero min-h-screen bg-base-200"style={{ backgroundImage: `url("https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3R5bGV8ZW58MHx8MHx8&w=1000&q=80")`}}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body pb-0">
            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <div className="form-control">
                        </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                       
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-center'>OR login with</p>
                            
                            <button className="btn btn-outline m-2 " onClick={handleGoogleSignIn}  variant="outline-dark"> <FaGoogle></FaGoogle></button>
                        </div>
                        
                    </form>
                    <p className='text-center'>Need an account?<Link className='text-orange-600 font-bold ' to="/signup">Sign Up</Link> </p>
          </div>
        </div>
      </div>
    );
};

export default Login;