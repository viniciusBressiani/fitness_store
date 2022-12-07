import { BrowserRouter,Routes,Route } from 'react-router-dom';

import {About,Contact,Gallery,Home,Navbar,NotFound,Plans,Trainers} from './pages/export';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='plans' element={<Plans />} />
        <Route path='trainers' element={<Trainers />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
