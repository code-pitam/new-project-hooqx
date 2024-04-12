import './App.css'
import Navbar from './components/Navbar';
import LowerCard from './sections/Hero/LowerCard';
import Hero from './sections/Hero/Slider';

function App() {

  return (
    <main className="relative bg-secondary text-primary bg-[#242525]">
      <Navbar />
      <section className="w-[100vw] relative">
        <Hero />
        <LowerCard />
      </section>
      <section className="padding-x pt-14 pb-16   relative  -z-10 ">
        Subhero
      </section>

      <section className="padding-x pt-24 pb-20   bg-vector bg-cover ">
        service
      </section>
    </main>
  );
}

export default App
