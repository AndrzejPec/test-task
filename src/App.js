import './App.scss';
import { Header } from './components/Header';
import { Image } from './components/Image';
import { Hero } from './components/Hero';

function App() {
  return (
    <div className="App">
        <Header />
        <Image align={"right"}/>
        <Hero />
    </div>
  );
}

export default App;
