import './App.css'
import Navbar from './components/Navbar';
import Hero from './sections/Hero/Slider';

function App() {

  return (
    <main className="relative bg-secondary text-primary">
      <Navbar/>
      <section className="w-[100vw]">
        <Hero/>
      </section>
      <section className="padding-x pt-14 pb-16   ">
        Subhero
      </section>

      <section className="padding-x pt-24 pb-20   bg-vector bg-cover ">
        service
      </section>
    
    </main>
  );
}

export default App
