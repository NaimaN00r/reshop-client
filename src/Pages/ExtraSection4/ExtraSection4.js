import React from 'react';
import sell from'../../Assets/sell-out.png'
import buy from'../../Assets/buy.png'

const ExtraSection4 = () => {
    return (
        <div className='grid grid-cols-2 mt-10 mr-12 ml-12'>
            <div className='bg-stone-400 h-96 text-center pt-16 mr-12'>
                <img className='h-16 w-16 mx-auto' src={sell} alt=''></img>
                <p className='text-5xl  flex flex-col'>Sell Your<span>Unused Product</span></p>
                <p className='text-xl  mt-4 mb-4'>You can sell your unused product here.Reproduct,Ship it,Get paid.</p>
                <button >Learn more</button>
            </div>
            <div className='bg-orange-200 h-96 text-center pt-16'>
                 <img className='h-16 w-16 mx-auto' src={buy} alt=''></img>
                <p className='text-5xl flex flex-col'>Buy Your<span>Needed Product</span></p>
                <p className='text-xl  mt-4 mb-4'>You can buy your needed product here.Buy,Reasonable Price,Shortest Time.</p>
                <button>Learn more</button>
            </div>
            
        </div>
    );
};

export default ExtraSection4;