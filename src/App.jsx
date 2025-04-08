import {Routes, Route} from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CategoryPage } from './pages/CategoryPage';
import { DetailPage } from './pages/DetailPage';


export function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-grow">
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/category/:name' element={<CategoryPage />} />
          <Route path='/meal/:id' element={<DetailPage /> } />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}



