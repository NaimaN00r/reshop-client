import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import ExtraSection from '../ExtraAection1/ExtraSection';
import ExtraSection2 from '../ExtraSection2/ExtraSection2';
import ExtraSection3 from '../ExtraSection3/ExtraSection3';
import ExtraSection4 from '../ExtraSection4/ExtraSection4';
import ExtraSection5 from '../ExtraSection5/ExtraSection5';
import ExtraSection6 from '../ExtraSection6/ExtraSection6';
import ExtraSection7 from '../ExtraSection7/ExtraSection7';
import More from '../More/More';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <ExtraSection></ExtraSection>
           <Categories></Categories>
           <ExtraSection2></ExtraSection2>
           <ExtraSection3></ExtraSection3>
           
           <ExtraSection4></ExtraSection4>
           <More></More>
           <ExtraSection5></ExtraSection5>
           <ExtraSection6></ExtraSection6>
           <ExtraSection7></ExtraSection7>
        </div>
    );
};

export default Home;