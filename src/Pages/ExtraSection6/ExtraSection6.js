import React from 'react';

const ExtraSection6 = () => {
    return (
        <div className='mb-12'>
            <p className='text-2xl font-bold text-center mt-20 mb-11'>How it works</p>
            <div className='grid grid-cols-3 '>
            <div className='flex flex-col items-center'>
                <img className='h-60 w-60' src='https://staticfiles.rebag.com/rebag-fe/prod/img/clair-trade/clair-trade-hiw-1.jpg'></img>
                <p className='font-bold text-xl'>BUY THIS</p>
                <p className='text-center'>Add a coveted accessory<br></br>
to your shopping cart</p>
            </div>
            <div className='flex flex-col items-center'>
                <img className='h-60 w-60' src='https://staticfiles.rebag.com/rebag-fe/prod/img/clair-trade/clair-trade-hiw-2.jpg'></img>
                <p className='font-bold text-xl'>SELL THAT</p>
                <p className='text-center'> Receive an offer <br></br> for once loved item</p>
            </div>
            <div className='flex flex-col items-center'>
                <img className='h-60 w-60' src='https://staticfiles.rebag.com/rebag-fe/prod/img/clair-trade/clair-trade-hiw-3.jpg'></img>
                <p className='font-bold text-xl'>Pay The Difference</p>
                <p className='text-center'>Check out and take advantage of<br></br>
Rebag Credit and tax incentives*</p>
            </div>
            </div>
            
        </div>
    );
};

export default ExtraSection6;