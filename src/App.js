import './App.css';
import Hero from './components/Hero';
import Plans from './components/Plans/Plans';
import Join from './components/Join/Join';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
        <Hero/>
        <Programs/>
        <Reasons/>
        <Plans/>
        <Testimonials/>
        <Join/>
        <Footer/>
    </div>
  );
}



export default App;
