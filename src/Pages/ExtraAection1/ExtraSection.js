import React from 'react';

const ExtraSection = () => {
    return (
        <div className='grid grid-cols-3 gap-5 ml-5 mt-5 '>
            <div className=" w-96  rounded-none flex flex-col">
  <figure><img src="https://rebag.com/cdn-cgi/image/f%3Dauto%2Cq%3D90%2Cw%3D750/https://mediafiles.rebag.com/trade-thumbnail-3-1-23.jpg" alt="Shoes" /></figure>
  <div>
    <h2 className="text-center text-xl">Trade</h2>
    <p className='text-sm text-center'>Buy & Sell in one transaction to earn 15% off</p>
  </div>
</div>
            <div className=" w-96  rounded-none flex flex-col">
  <figure><img src="https://rebag.com/cdn-cgi/image/f%3Dauto%2Cq%3D90%2Cw%3D750/https://mediafiles.rebag.com/premium-payouts-thumbnail-2-1-23.jpg" alt="Shoes" /></figure>
  <div>
    <h2 className="text-center text-xl">Premium Payouts</h2>
    <p className='text-sm text-center'>Increase your seller funds by 12%</p>
  </div>
</div>
            <div className=" w-96  rounded-none flex flex-col">
  <figure><img src="https://rebag.com/cdn-cgi/image/f%3Dauto%2Cq%3D90%2Cw%3D750/https://mediafiles.rebag.com/refer-friend-1-17-23-thumbnail.jpg" alt="Shoes" /></figure>
  <div>
    <h2 className="text-center text-xl">Refer a Friend</h2>
    <p className='text-sm text-center'>Get discount by tagging a person</p>
  </div>
</div>
        </div>
    );
};

export default ExtraSection;