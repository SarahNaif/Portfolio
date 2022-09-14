import { useState } from 'react';
import Contact from './component/Contact';
import NavBar from './component/NavBar';
import Projects from './component/Projects';
import Stacks from './component/Stacks';
import './index.css';

function App() {
  const [darkMode,setDarkMode] = useState(false);
const toggleTheme = ()=>{
    setDarkMode(!darkMode);
    const root = window.document.documentElement;
    root.classList.toggle('dark');
  }
  return (
    <div className="flex justify-center bg-white dark:bg-slate-800 text-black dark:text-white transition-colors duration-1000">
      <div className="flex justify-center flex-col p-6 lg:p-20 max-w-4xl m-auto w-full ">
        <NavBar toggleTheme={toggleTheme} darkMode={darkMode}/>
        <Projects/>
        <Stacks/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
