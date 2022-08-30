
import './App.css';
import Header from './Common/Header';
import ContactHeader from './Common/contactHeader';
import { Routes, Route} from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Blog from './Component/Blog';
import Footer from './Component/Footer';
import Contactus from './Component/Contactus';
import SigelProduct from './Component/SigelProduct';
import Cart from './Component/Cart';
import Checkout from './Component/Checkout';
import WishList from './Component/WishList';
import Shop from './Component/Shop'
function App() {
  
  return (
  <>

  <ContactHeader></ContactHeader>
    <Header></Header>
    <Routes>
    <Route path="E-commerce/" element={<Home/>} /> 
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path="blog"  element={<Blog/>} />
        <Route path="contact"  element={<Contactus/>} />
        <Route path='singelProduct' element={<SigelProduct/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='wishlist' element={<WishList/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='shop' element={<Shop/>}/>
      </Routes>
      <Footer></Footer>
  
  </>
  );
}

export default App;
