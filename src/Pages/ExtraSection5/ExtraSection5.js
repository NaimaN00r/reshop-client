import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Swiper,SwiperSlide} from 'swiper/react';
import { Keyboard,  Navigation, Pagination } from "swiper";
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/swiper.scss';
// import {productsData} from "../../products.json"

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ExtraSection5 = () => {
const Data=[{
    "type":"clair",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/170169-10_20Louis_20Vuitton_20Keepall_20Bandouliere_20Bag_20Damier_20Infini_20Leather_2045_2D_0002_300x300.jpg?v=1664567604",
    "name":"Louis Vuitton",
    "condition":"Very Good",
    "price":"$10,600"
},
{
    "type":"clair",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/170685-1_20Telfar_20Eastpak_20Shopping_20Tote_20Canvas_20Medium_2D_0002_300x300.jpg?v=1663361421",
    "name":"Telfar Eastpak Shopping Bag",
    "condition":"Good",
    "price":"$5500"
},
{
    "type":"clair",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/169941-1_20Gucci_20Zip_20Pocket_20Backpack_20Printed_20GG_20Coated_20Canvas_20Small_2D_0002_300x300.jpg?v=1662145357",
    "name":"Gucci Zip Pocket Bag",
    "condition":"Great",
    "price":"$2200"
},
{
    "type":"clair",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/161860-1RolexOysterPerpetualAutomaticWatchStainlessSteel31_2D_0002_300x300.jpg?v=1676538085",
    "name":"Rolex Oyster Watch",
    "condition":"Excelent",
    "price":"$500"
},
{
    "type":"clair",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/163959-1_20Christian_20Dior_20Book_20Tote_20Oblique_20Canvas_20Medium_2D_0002_300x300.jpg?v=1660337808",
    "name":"Christian Dior Book Tote Bag",
    "condition":"Excelent",
    "price":"$1260"
},
{
    "type":"winter",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/191998-1_20Hermes_20Kelly_20Double_20Tour_20Bracelet_20Leather_2D_0002_300x300.jpg?v=1673042486",
    "name":"Harmes Kelly Bracelet",
    "condition":"Very Good Condition",
    "price":"$8900"
},
{
    "type":"winter",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/193825-1_20Fendi_20Sunshine_20Shopper_20Tote_20Leather_20Large_2D_0002_300x300.jpg?v=1673041918",
    "name":"Fendi Sunshine Shopping Bag",
    "condition":"Good Condition",
    "price":"$3800"
},
{
    "type":"winter",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/193849-2_20Versace_20La_20Medusa_20Chain_20Handle_20Crossbody_20Bag_20Patent_20Mini_2D_0002_300x300.jpg?v=1673041256",
    "name":"Versace La Meduca Chain Bag",
    "condition":"Excelent Condition",
    "price":"$2220"
},
{
    "type":"winter",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/192540-3_20Christian_20Dior_20Peter_20Doig_20Dangle_20Earrings_20Metal_2D_0002_300x300.jpg?v=1673041562",
    "name":"Christian Dior Earings",
    "condition":"Very Good Condition",
    "price":"$2500"
},
{
    "type":"winter",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/196131-1_20Balenciaga_20Men_s_20Allover_20Logo_20Distressed_20Crewneck_20Sweater_20Wool_2D_0002_300x300.jpg?v=1676054577",
    "name":"Valenciaga Mens Allover Logo",
    "condition":"Good Condition",
    "price":"$900"
},
{
    "type":"vintage",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/197639-66_20Chanel_20Vintage_20Medallion_20Chain_20Belt_20Metal_2D_0002_300x300.jpg?v=1677260972",
    "name":"Chanel Vintage Chain",
    "condition":"Very Good Condition",
    "price":"$1500"
},
{
    "type":"vintage",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/195068-5_20Cartier_20Vintage_20Trinity_20Bangle_20Bracelet_2018K_20Tricolor_20Gold_2D_0002_300x300.jpg?v=1677258776",
    "name":"Cartiar Vintage 18k Gold Bracelet",
    "condition":"Good Condition",
    "price":"$600"
},
{
    "type":"vintage",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/201157-2_20Christian_20Dior_20Vintage_20Saddle_20Bag_20Diorissimo_20Denim_20Mini_2D_0002_300x300.jpg?v=1677258051",
    "name":"Christian Dior Vintage Bag",
    "condition":"Very Good Condition",
    "price":"$700"
},
{
    "type":"vintage",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/199613-1_20Chanel_20Vintage_20Pearl_20Frame_20Bag_20Pleated_20Satin_20Small_2D_0002_300x300.jpg?v=1677251723",
    "name":"Chanel Vintage Pear Bag",
    "condition":"Good Condition",
    "price":"$800"
},
{
    "type":"vintage",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/199016-26_20Chanel_20Vintage_20Round_20Tassel_20Crossbody_20Bag_20Quilted_20Satin_20Mini_2D_0002_300x300.jpg?v=1677251525",
    "name":"Chanel Vintage Round Tassel Bag",
    "condition":"Very Good Condition",
    "price":"$650"
},
{
    "type":"styles",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/201782-1_20Bottega_20Veneta_20Men_s_20Douglas_20Driver_20Loafers_20Maxi_20Intrecciato_20Leather_2D_0002_300x300.jpg?v=1677504925",
    "name":"Bottega Veneta Mens Shoes",
    "condition":"Very Good Condition",
    "price":"$1500"
},
{
    "type":"styles",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/197626-85_20Louis_20Vuitton_20Men_s_20Buckle_20Strap_20Moccasin_20Loafers_20Monogram_20Suede_2D_0002_300x300.jpg?v=1677261237",
    "name":"Louis Buitton Mens Buckel Strap Shoe",
    "condition":"Good Condition",
    "price":"$600"
},
{
    "type":"styles",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/195056-412_20Cartier_20Pasha_20C_20de_20Cartier_20Automatic_20Watch_20Stainless_20Steel_2035_2D_0002_300x300.jpg?v=1677261028",
    "name":"Cartier Pasha D Sa Watch",
    "condition":"Very Good Condition",
    "price":"$700"
},
{
    "type":"styles",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/198589-7GucciMen_sBlazerEmbroideredCottonandSilk_2D_0002_300x300.jpg?v=1677868941",
    "name":"Cucci Mens Blazer",
    "condition":"Good Condition",
    "price":"$800"
},
{
    "type":"styles",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/195951-141LouisVuittonMen_sLVxNBAZip-ThroughHoodieDenim_2D_0002_300x300.jpg?v=1677601410",
    "name":"Louis Button Hoodie",
    "condition":"Very Good Condition",
    "price":"$650"
}

]

const [products,setProducts]=useState(Data);
const filter=(type)=>{
    setProducts(Data.filter((product)=>product.type===type))
}
    return (
        <div className='flex flex-col'>
            <div className='grid grid-cols-4  content-center mt-8'>
                <Link onClick={()=>filter("clair")}><div className='flex flex-col items-center'>
                    <img className='h-24 w-24' src="https://cdn.shopify.com/s/files/1/0384/0161/products/170169-10_20Louis_20Vuitton_20Keepall_20Bandouliere_20Bag_20Damier_20Infini_20Leather_2045_2D_0002_96x96.jpg?v=1664567604" alt=""></img>
                    <p className='text-center'>Clair Picks</p>
                </div></Link>
                <Link onClick={()=>filter("winter")}>
                <div className='flex flex-col items-center'>
                    <img className='h-24 w-24' src="https://cdn.shopify.com/s/files/1/0384/0161/products/187058-409_20Rolex_20Air_20King_20Oyster_20Perpetual_20Chronometer_20Automatic_20Watch_20Stainless_20Steel_2040_2D_0002_96x96.jpg?v=1673042735" alt=""></img>
                    <p className='text-center'>The Winter Edit</p>
                </div></Link>
                <Link onClick={()=>filter("vintage")}>
                <div className='flex flex-col items-center'>
                    <img className='h-24 w-24' src="https://cdn.shopify.com/s/files/1/0384/0161/products/197639-66_20Chanel_20Vintage_20Medallion_20Chain_20Belt_20Metal_2D_0002_96x96.jpg?v=1677260972" alt=""></img>
                    <p className='text-center'>Vintage</p>
                </div></Link>
                <Link onClick={()=>filter("styles")}>
                <div className='flex flex-col items-center'>
                    <img className='h-24 w-24' src="https://cdn.shopify.com/s/files/1/0384/0161/products/201782-1_20Bottega_20Veneta_20Men_s_20Douglas_20Driver_20Loafers_20Maxi_20Intrecciato_20Leather_2D_0002_96x96.jpg?v=1677504925" alt=""></img>
                    <p className='text-center'>Mens Styles</p>
                </div></Link>
            </div>
            <div className='py-4 px-4 justify-content-center bg-stone-200'>
                 <Swiper 
                 slidesPerView={1}
                 centeredSlides={false}
                 slidesPerGroupSkip={1}
                 grabCursor={true}
                 keyboard={{
                   enabled: true,
                 }}
                 breakpoints={{
                   769: {
                     slidesPerView: 4,
                     slidesPerGroup: 2,
                   },
                 }}
                
                 navigation={true}
                 pagination={{
                   clickable: true,
                 }}
                 modules={[Keyboard,  Navigation, Pagination]}
                 className="mySwiper"


                 >
                    {
                    products.map((category,i)=>(
                        <SwiperSlide>
                            <div className="card w-72 h-96 bg-base-100 shadow-xl rounded-none">
  <figure className="px-8 pt-8">
    <img src={category.img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center h-24 ">
    <h2 className="card-title">{category.name}</h2>
    <p>{category.condition}</p>
    <p>{category.price}</p>
    {/* <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
                        </SwiperSlide>
                    ))
                }

                 </Swiper>
            </div>
        </div>
    );
};

export default ExtraSection5;