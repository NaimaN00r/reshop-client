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

const ExtraSection3 = () => {
const Data=[{
    "type":"investment",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/195056-406_20Rolex_20Oyster_20Perpetual_20Datejust_20Automatic_20Watch_20Stainless_20Steel_20and_20Yellow_20Gold_2031_2D_0002_300x300.jpg?v=1677504660",
    "name":"Rolex Oyster",
    "condition":"Very Good",
    "price":"$10,600"
},
{
    "type":"investment",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/197641-3_20Hublot_20Big_20Bang_20Evolution_20Chronograph_20Automatic_20Watch_20Rose_20Gold_20and_20Rubber_2044_2D_0002_300x300.jpg?v=1677261178",
    "name":"Hublot Big Bang Evolution",
    "condition":"Good",
    "price":"$5500"
},
{
    "type":"investment",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/201876-1_20Prada_20Re-Edition_202000_20Hobo_20Terry_20Cloth_20Mini_2D_0002_300x300.jpg?v=1677261153",
    "name":"Prada Re-adition 2000 mini",
    "condition":"Great",
    "price":"$2200"
},
{
    "type":"investment",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/195068-7_20Van_20Cleef_20_26_20Arpels_20Frivole_20Stud_20Earrings_2018K_20Yellow_20Gold_20with_20Diamonds_20Large_2D_0002_300x300.jpg?v=1677261078",
    "name":"Van Cleef & Arpels",
    "condition":"Excelent",
    "price":"$500"
},
{
    "type":"investment",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/200973-1_20Hermes_20Women_s_20Chypre_20Sandals_20Leather_20and_20Denim_2D_0002_300x300.jpg?v=1677260848",
    "name":"Hermes Womens Chypre sandels",
    "condition":"Excelent",
    "price":"$1260"
},
{
    "type":"trending",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/191800-12_20Chopard_20Happy_20Diamonds_20Icons_20Bow_20Quartz_20Watch_20White_20Gold_20with_20Diamond_20Bezel_20and_20Floating_20Diamonds_2024_2D_0002_300x300.jpg?v=1676056065",
    "name":"Chopard Happy Diamonds",
    "condition":"Very Good Condition",
    "price":"$8900"
},
{
    "type":"trending",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/199972-1_20Fendi_20Valentine_s_20Day_20Chain_20Baguette_20Charm_20Bag_20Embellished_20Leather_20Nano_2D_0002_300x300.jpg?v=1676055773",
    "name":"Fendi Valentines day chain bag",
    "condition":"Good Condition",
    "price":"$3800"
},
{
    "type":"trending",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/190563-7_20Van_20Cleef_20_26_20Arpels_20Vintage_20Alhambra_2020_20Motifs_20Necklace_2018K_20Yellow_20Gold_20and_20Mother_20of_20Pearl_2D_0002_300x300.jpg?v=1676055429",
    "name":"Bencliff & Arples Vintage ",
    "condition":"Excelent Condition",
    "price":"$2220"
},
{
    "type":"trending",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/195033-44_20Hermes_20Heure_20H_20Quartz_20Watch_20Stainless_20Steel_20with_20Diamond_20Markers_20and_20Mother_20of_20Pearl_2025_2D_0002_300x300.jpg?v=1676054959",
    "name":"Harmes Huere H quartz watch",
    "condition":"Very Good Condition",
    "price":"$2500"
},
{
    "type":"trending",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/196131-1_20Balenciaga_20Men_s_20Allover_20Logo_20Distressed_20Crewneck_20Sweater_20Wool_2D_0002_300x300.jpg?v=1676054577",
    "name":"Valenciaga Mens Allover Logo",
    "condition":"Good Condition",
    "price":"$900"
},
{
    "type":"retail",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/201436-1_20Fendi_20Selleria_20Peekaboo_20Bag_20Soft_20Leather_20Large_2D_0002_300x300.jpg?v=1677260948",
    "name":"Fendi Selleria Bag Soft",
    "condition":"Very Good Condition",
    "price":"$1500"
},
{
    "type":"retail",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/201330-1_20Chanel_20Lax_20Satchel_20Quilted_20Leather_20Large_2D_0002_300x300.jpg?v=1677260642",
    "name":"Chanel Lax Satchel Leather Bag",
    "condition":"Good Condition",
    "price":"$600"
},
{
    "type":"retail",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/197620-19_20Cartier_20Lanieres_20Ring_20Platinum_2D_0002_300x300.jpg?v=1677259486",
    "name":"Cartier Ring Platinum",
    "condition":"Very Good Condition",
    "price":"$700"
},
{
    "type":"retail",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/199948-1SaintLaurentMenPeakedLapelSingleBreastedTuxedoJacketWoolwithPolyester_2D_0002_300x300.jpg?v=1677868797",
    "name":"Saint Laurent mens tuxedo jacket",
    "condition":"Good Condition",
    "price":"$800"
},
{
    "type":"retail",
    "img":"https://cdn.shopify.com/s/files/1/0384/0161/products/201365-1_20Mark_20Cross_20Grace_20Box_20Bag_20Pexiglass_20and_20Leather_20Small_2D_0002_300x300.jpg?v=1677258770",
    "name":"Mark Cross Grace Box Bag",
    "condition":"Very Good Condition",
    "price":"$650"
}

]

const [products,setProducts]=useState(Data);
const filter=(type)=>{
    setProducts(Data.filter((product)=>product.type===type))
}
    return (
        <div className='flex flex-col mt-8 mb-8'>
            <div className='grid grid-cols-3  content-center'>
                <Link onClick={()=>filter("investment")}><div className='flex flex-col items-center'>
                    <img className='h-24 w-24' src="https://cdn.shopify.com/s/files/1/0384/0161/products/195056-406_20Rolex_20Oyster_20Perpetual_20Datejust_20Automatic_20Watch_20Stainless_20Steel_20and_20Yellow_20Gold_2031_2D_0002_96x96.jpg?v=1677504660" alt=""></img>
                    <p className='text-center'>Investment Piece</p>
                </div></Link>
                <Link onClick={()=>filter("trending")}>
                <div className='flex flex-col items-center'>
                    <img className='h-24 w-24' src="https://cdn.shopify.com/s/files/1/0384/0161/products/191800-12_20Chopard_20Happy_20Diamonds_20Icons_20Bow_20Quartz_20Watch_20White_20Gold_20with_20Diamond_20Bezel_20and_20Floating_20Diamonds_2024_2D_0002_96x96.jpg?v=1676056065" alt=""></img>
                    <p className='text-center'>Trending</p>
                </div></Link>
                <Link onClick={()=>filter("retail")}>
                <div className='flex flex-col items-center'>
                    <img className='h-24 w-24' src="https://cdn.shopify.com/s/files/1/0384/0161/products/201436-1_20Fendi_20Selleria_20Peekaboo_20Bag_20Soft_20Leather_20Large_2D_0002_96x96.jpg?v=1677260948" alt=""></img>
                    <p className='text-center'>High % of retail</p>
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
                //  pagination={{
                //    clickable: true,
                //  }}
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

export default ExtraSection3;