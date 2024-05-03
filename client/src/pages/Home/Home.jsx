import React from 'react';
import Nav from '../../components/Nav/Nav.jsx';
import Hero from '../../components/Home/Hero/Hero.jsx';
import Features from '../../components/Home/Features/Features.jsx';
import ToolsInfo from '../../components/Home/Toolsinfo/Toolsinfo.jsx';
import Instructions from '../../components/Home/Instructions/Instructions.jsx';
import FAQSection from '../../components/Home/FAQs/FAQsection.jsx';
import FooterCTA from '../../components/Home/FooterCTA/FooterCTA.jsx';
import Footer from '../../components/Footer/Footer.jsx';



function Home() {
    return (
        <div className="App">
            <Nav/>
            <Hero/>
            <Features/>
            <ToolsInfo/>
            <Instructions/>
            <FAQSection/>
            <FooterCTA/>
            <Footer/>
        </div>
    );
}

export default Home;
