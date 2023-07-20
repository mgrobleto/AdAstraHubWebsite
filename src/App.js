import Home from './pages/Home/Home';
import APOD from './pages/APOD/APOD';
import About from './pages/About/About';
import Posts from './pages/Posts/Posts';
import SidebarNav from './components/SidebarNav';
import { Routes, Route} from 'react-router-dom';
import './styles/Global.css';
import './App.css';
import StarsBackground from './components/StarsBackground';

function App() {
  return (
    <div className='App bg-hero bg-center bg-cover w-full h-auto md:min-h-screen sm:min-h-screen max-sm:min-h-screen lg:min-h-screen tracking-wide'>
      <div className='w-full h-auto md:min-h-screen sm:min-h-screen max-sm:min-h-screen lg:min-h-screen backdrop-blur-md'>
        <StarsBackground />
        <SidebarNav />
        <Routes>
          <Route  exact path='/AdAstraHubWebsite' element={<Home />}></Route>
          <Route path='/apod' element={<APOD />}></Route>
          <Route path='/posts' element={<Posts />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
