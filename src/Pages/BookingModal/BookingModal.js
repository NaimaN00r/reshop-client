import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Loading from '../../Loading/Loading';





const BookingModal = ({ Product, setProduct}) => {
   // treatment is just another name of appointmentOptions with name, slots, _id
   const {name,price,image,_id} = Product;
   console.log(name,price)
   const {user,isLoading}=useContext(AuthContext);

   const handleBooking = event => {
       event.preventDefault();
       const form = event.target;
       const userName = form.name.value;
       const email = form.email.value;
       const phone = form.phone.value;
       const location=form.location.value;
       console.log(name,email,phone,location);
       // [3, 4, 5].map((value, i) => console.log(value))
       const booking = {
           id:_id,
           name,
           price,
           image,
           userName,
           email,
           phone,
           location,
           
       }

      // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        fetch('https://watch-box-serverside.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setProduct(null);
                    toast.success('Booking confirmed');
                    // refetch();
                }
                else{
                    toast.error(data.message);
                }
            })
   
   }
   if(isLoading){
    <Loading></Loading>
   }
   return (
    <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3R5bGV8ZW58MHx8MHx8&w=1000&q=80")`}}>
           <input type="checkbox" id="booking-modal" className="modal-toggle" />
           <div className="modal">
               <div className="modal-box relative">
                   <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                   <h3 className="text-lg font-bold">{name}</h3>
                   <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                       <input type="text" disabled value={price} className="input w-full input-bordered " />
                       <input name="name" type="text" defaultValue={user?.displayName} disabled  placeholder="Your Name" className="input w-full input-bordered" />
                       <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                       <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                       <input name="location" type="text" placeholder="Location" className="input w-full input-bordered" />
                       <br />
                       <input className='btn btn-accent w-full' type="submit" value="Submit" />
                   </form>
               </div>
           </div> 
           </div>
     
   );
};

export default BookingModal;