import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { MdDelete, MdVerified,} from "react-icons/md";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Loading from '../../Loading/Loading';
import ConfirmationModal from '../../Pages/ConfirmationModal/ConfirmationModal';


const AllSellers = () => {
       
    const [deletingSeller, setdeletingSeller] = useState(null);
    const {isLoading}=useContext(AuthContext);

    const closeModal = () => {
        setdeletingSeller(null);
    }

    const {data: users = [],refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://watch-box-serverside.vercel.app/users/seller');
            const data = await res.json();
            return data;
            // console.log(data);
        }
       
    });
    const handleMakeVerify = email => {
        fetch(`https://watch-box-serverside.vercel.app/products2/${email}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Seller is Verified.')
                refetch();
            }
            console.log(data)
        })
    }
    const handleDeleteSeller = user => {
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
                toast.success(`Seller ${user.name} deleted successfully`)
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }




    return (
        <div>
            <h2 className="text-3xl">All Users</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Verify</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, i) =><tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{ 
            user?.isVerified !== 'verified'?
            <button onClick={() => handleMakeVerify(user.email)} className='btn btn-xs btn-primary'>Verify</button>
            :<MdVerified></MdVerified>}</td>
            <td><label onClick={() => setdeletingSeller(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-error"><MdDelete></MdDelete></label></td>
          </tr>)
      } 
      
    </tbody>
  </table>
</div>
{
                deletingSeller && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingSeller.name}. It cannot be undone.`}
                    successAction = {handleDeleteSeller}
                    successButtonName="Delete"
                    modalData = {deletingSeller}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default AllSellers;