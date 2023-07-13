import Home from './pages/Home/Home';
import APOD from './pages/APOD/APOD';
import About from './pages/About/About';
import SidebarNav from './components/SidebarNav';
import { Routes, Route} from 'react-router-dom';
import './styles/Global.css';
import './App.css';
import StarsBackground from './components/StarsBackground';

function App() {
  return (
    <div className='App bg-center bg-cover w-full h-screen'>
      <div className='w-full h-screen backdrop-blur-md'>
        <StarsBackground />
        <SidebarNav />
        <Routes>
          <Route  exact path='/' element={<Home />}></Route>
          <Route path='/apod' element={<APOD />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
