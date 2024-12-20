import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ARModelViewer from './ARModelViewer';
import MainBanner from './MainBanner';
import Navbar from './Navbar';
import PopUp from './popup';
import SecondaryBanner from './SecondaryBanner';
import OurServices from './OurServices';
import WhyWorkTogether from './WhyWorkTogether';
import Packs from './Packs';
import CaseStudies from './CaseStudies';
import Faq from './Faq';

import CaseStudiePage from './CaseStudiePage';
import CarModelViewer from './CarModelViewer';
import Footer from './Footer';
import Services from './Services';
function App() {
  const [language, setlanguage] = useState('es');
  const [color, setColor] = useState('#ffffff');
  const [showAccesory, setShowAccesory] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState([0, 0, 0]);
  const [texturePath, setTexturePath] = useState('/models/redlabel.webp');

  const basePrice = 1000;
  const accesoryPrice = 250;
  const [price, setPrice] = useState(basePrice);

  useEffect(() => {
    const totalPrice = showAccesory ? basePrice + accesoryPrice : basePrice;
    setPrice(totalPrice);
  }, [showAccesory]);

  const services = [
    {
      id: 0,
      name: "Configuradores 3D Interactivos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      component:
      <>    <ARModelViewer modelSrc="/models/rack-agregado.glb" controlsContainerId="material-controls" />
            <div id="material-controls" className="bg-transparent p-4 rounded absolute bottom-0 gap-2 hidden sm:block"></div>
      </>
    },
    {
      id: 1,
      name: "VR/AR",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      component: <CarModelViewer modelSrc="/models/car.glb" controlsContainerId="material-controls" />
    },
    {
      id: 2,
      name: "Animaciones 3D",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      component: <div className='w-full h-full bg-zinc-200'></div>
    },
    {
      id: 3,
      name: "Video lanzamiento de productos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      component: <div className='w-full h-full bg-zinc-200'></div>
    },
    {
      id: 4,
      name: "Videos explicativos de productos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      component: <div className='w-full h-full bg-zinc-200'></div>
    },
    {
      id: 5,
      name: "CGI/FOOH",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      component: <div className='w-full h-full bg-zinc-200'></div>
    }
  ];

  return (
    <Router>
      <Navbar language={language} setLanguage={setlanguage} />
      <Routes>
        <Route path="/" element={
          <section className='max-w-screen overflow-hidden flex flex-col items-center'>
            <MainBanner language={language} />
            <PopUp language={language} />
            <SecondaryBanner language={language} />
            <OurServices language={language} services={services}/>
            <WhyWorkTogether language={language} />
            <Packs />
            <CaseStudies />
            <Faq />
            <Footer language={language} />
          </section>
        } />

        <Route path="/studie-cases" element={<CaseStudiePage/>} />
        <Route path="/services" element={<Services services={services}/>} />
      </Routes>
    </Router>
  );
}

export default App;
