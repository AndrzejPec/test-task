import './App.scss';
import { Header } from './components/Header/Header';
// import { Illustration } from './components/Illustration/Illustration';
import { Hero } from './components/Hero/Hero';
import { Features } from './components/Features/Features';
import { Download } from './components/Download/Download';
import { FAQ } from './components/FAQ/FAQ';
import { Form } from './components/Form/Form';
import { Footer } from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <Features />
        <Download />
        <FAQ />
        <Form />
        <Footer />
    </div>
  );
}

export default App;
