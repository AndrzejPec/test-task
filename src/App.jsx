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
  return (
    <div className="App">
      
        <Modal />

        <Nav />

        <Hero />

        <Features />

        <Download />

        <FAQ />

        <Form />

        <Footer />

    </div>
  );
}
