import { BrowserRouter,Routes,Route } from 'react-router-dom';

import {About,Contact,Gallery,Home,Navbar,NotFound,Plans,Trainers} from './pages/export';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route path='fitness-store-routes/' element={<Home />} />
        <Route path='fitness-store-routes/about' element={<About />} />
        <Route path='fitness-store-routes/gallery' element={<Gallery />} />
        <Route path='fitness-store-routes/plans' element={<Plans />} />
        <Route path='fitness-store-routes/trainers' element={<Trainers />} />
        <Route path='fitness-store-routes/contact' element={<Contact />} />
        <Route path='fitness-store-routes/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
