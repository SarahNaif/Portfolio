
import Contact from './component/Contact';
import NavBar from './component/NavBar';
import Projects from './component/Projects';
import Stacks from './component/Stacks';
import './index.css';

function App() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center flex-col p-6 lg:p-20 max-w-4xl m-auto w-full">
        <NavBar />
        <Projects/>
        <Stacks/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
