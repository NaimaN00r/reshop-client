import { useQuery } from '@tanstack/react-query';
import { Footer } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Loading from '../../Loading/Loading';
import ConfirmationModal from '../../Pages/ConfirmationModal/ConfirmationModal';
import Header from '../../Pages/Header/Header';


const AllBuyers = () => {
   const {isLoading}=useContext(AuthContext);
    const [deletingBuyer, setdeletingBuyer] = useState(null);

    const closeModal = () => {
        setdeletingBuyer(null);
    }
    const {data: users = [],refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://watch-box-serverside.vercel.app/users/buyer');
            const data = await res.json();
            return data;
            // console.log(data);
        }
       
    });
    const handleDeleteBuyer = user => {
        fetch(`https://watch-box-serverside.vercel.app/users/${user._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Buyer ${user.name} deleted successfully`)
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    

    return (

        
        <div>
            <Header></Header>
            <div>
            <h2 className="text-3xl">All Buyers</h2>
            
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, i) =><tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><label onClick={() => setdeletingBuyer(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-error"><MdDelete></MdDelete></label></td>
          </tr>)
      } 
      
    </tbody>
  </table>
</div>
{
                deletingBuyer && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingBuyer.name}. It cannot be undone.`}
                    successAction = {handleDeleteBuyer}
                    successButtonName="Delete"
                    modalData = {deletingBuyer}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
        </div>
        <Footer></Footer>
        </div>
    );
};

export default AllBuyers;