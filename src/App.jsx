import React, { useEffect } from 'react';
import { Element, Events, scrollSpy } from 'react-scroll';

import './reset.scss';
import './App.scss';

import { Modal } from './components/Modal/Modal';
import { Nav } from './components/Nav/Nav';
import { Hero } from './components/Hero/Hero';
import { Features } from './components/Features/Features';
import { Download } from './components/Download/Download';
import { FAQ } from './components/FAQ/FAQ';
import { Form } from './components/Form/Form';
import { Footer } from './components/Footer/Footer';


export const App = () => {

  // Smooth scrolling animations
  useEffect(() => {
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <main className="App">
      
        <Modal />

        <Nav />

        <Hero />

        <Features />

        <Download />

        <FAQ />

        <Form />

        <Footer />

    </main>
  );
}
