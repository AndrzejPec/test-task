import './App.scss';
import { Nav } from './components/Nav/Nav';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Features } from './components/Features/Features';
import { Download } from './components/Download/Download';
import { FAQ } from './components/FAQ/FAQ';
import { Form } from './components/Form/Form';
import { Footer } from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
        <Nav />
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
