import './App.css'
import Navbar from './components/Navbar';
import LowerCard from './sections/Hero/LowerCard';
import Hero from './sections/Hero/Slider';
import { ThemeProvider } from './contexts/theme';
import { useEffect, useState } from 'react';
import ThemeBtn from './components/ThemeBtn';
import About from './sections/About/About';
import Service from './sections/Service/Service';
import Benefits from './sections/Benefits/Benefits';
import { benefits2, work1 } from './assets/images';
import WorkingProcess from './sections/Working-Process/WorkingProcess';
import Footer from './components/Footer';
import Counter from './sections/Counter/Counter';
import Testimonials from './sections/Testimonials/Testimonials';
function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = ()=>{
setThemeMode("dark")
  }
const lightTheme = () =>{
  setThemeMode("light")
}

useEffect(() => {
  console.log(themeMode);
document.querySelector('html').classList.remove("dark", "light")
document.querySelector("html").classList.add(themeMode);


}, [themeMode])


  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <main className="relative bg-secondary text-primary bg-white dark:bg-[#242525]">
        <ThemeBtn />
        <Navbar />
        <section className="w-[100vw] relative">
          <Hero />
          <LowerCard />
        </section>
        <section className="padding-x pt-14 pb-16   relative ">
          <About />
        </section>

        <section className="padding-x pt-24 pb-20 realative bg-[#F1F3F8]">
          <Service />
        </section>
        <section
          style={{
            background: `url(${benefits2})`,
          }}
          className="padding-x pt-24 relative overflow-hidden section-benefits  bg-no-repeat bg-center bg-cover pb-20 realative bg-[#F1F3F8]"
        >
          <div className="why-choose-us">
            <img
              decoding="async"
              src="https://hooqx.com/wp-content/uploads/2024/02/why-choose-us-style2-obj1.png"
              alt=""
              class="wp-dark-mode-ignore"
            ></img>
          </div>
          <div className="why-choose-us2">
            <img
              decoding="async"
              src="https://hooqx.com/wp-content/uploads/2024/02/why-choose-us-style2-obj1.png"
              alt=""
              class="wp-dark-mode-ignore"
            ></img>
          </div>
          <Benefits />
        </section>
        <section
          style={{
            background: `url(${work1})`,
          }}
          className="bg-[#0d1525] section-working-process padding-x pt-24 relative overflow-hidden  bg-no-repeat bg-center bg-cover pb-20 realative "
        >
          <WorkingProcess />
        </section>
        <section className="bg-white padding-x pt-24 relative overflow-hidden">
          <Counter />
        </section>
      
        <section className="bg-[#0D1625] padding-x pt-24 relative overflow-hidden">
          <Footer />
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App
