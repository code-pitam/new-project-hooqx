import './App.css'
import Navbar from './components/Navbar';
import LowerCard from './sections/Hero/LowerCard';
import Hero from './sections/Hero/Slider';
import { ThemeProvider } from './contexts/theme';
import { useEffect, useState } from 'react';
import ThemeBtn from './components/ThemeBtn';
import About from './sections/About/About';

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
          <About/>
        </section>

        <section className="padding-x pt-24 pb-20   bg-vector bg-cover ">
          service
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App
