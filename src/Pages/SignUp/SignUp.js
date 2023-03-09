import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


// import useToken from '../../hooks/useToken';
// import Loading from '../../Loading/Loading';




const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    // const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    // if(token){
    //     navigate('/');
    // }
    // if(isLoading){
    //     <Loading></Loading>
    // }

    const handleSignup = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userType=form.Type.value;
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            const User = {
                name: name, 
                email: email,
                role: userType,
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
                setCreatedUserEmail(email);
            })
        })
       
        .catch(err => console.error(err));
    }
    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3R5bGV8ZW58MHx8MHx8&w=1000&q=80")`}}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            
                        </div>
                        <div className="form-control">
                             <select name="Type" className="select select-bordered w-full max-w-xs">
                            <option disabled value="">What kind of account do you want to make?</option>
                            <option value="seller">seller
                            </option>
                            <option value="buyer">buyer</option>
                            </select>
                        </div>
              <div className="form-control mt-6">
                 <input className="btn btn-primary" type="submit" value="SignUp" />
              </div>
            </form>
            <p className='text-center'>Already have an account <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;