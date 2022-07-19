import './App.css';
import Header from './components/Headercomponent';
import Home from './components/HomeComponent';
import { BrowserRouter, Navigate, Redirect, Route, Routes } from 'react-router-dom';
import Product from './components/ProductComponent';
import About from './components/AboutComponent';
import Contact from './components/ContactComponent';
import Footer from './components/FooterComponent';
import ProductDetail from './components/ProductDetail';
import CartComponent from './components/CartComponent';
import Payment from './components/Payment';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Product />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<CartComponent />} />
          <Route path='/checkout' element={<Payment />}/>
          <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
