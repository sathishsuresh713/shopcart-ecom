// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/font-awesome-4/css/font-awesome.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Collection from './Pages/Collection';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import PlaceOrder from './Pages/PlaceOrder';
import Orders from './Pages/Orders';
import ShopContextProvider from './Context/ShopContext.js';
import Footer from './Components/Footer.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <ShopContextProvider>
      <ToastContainer />
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/collection' element={<Collection/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/product/:productId' element={<Product/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/placeorder' element={<PlaceOrder/>}/>
     <Route path='/orders' element={<Orders/>}/>
    </Routes>
    <Footer/>
    </ShopContextProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
