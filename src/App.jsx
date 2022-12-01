import { BrowserRouter,Routes,Route } from 'react-router-dom';

import {About,Contact,Gallery,Home,Navbar,NotFound,Plans,Trainers} from './pages/export';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <About />
      <Contact />
      <Gallery />
      <Home />
      <Navbar />
      <NotFound />
      <Plans />
      <Trainers />
    </BrowserRouter>
  )
}

export default App
