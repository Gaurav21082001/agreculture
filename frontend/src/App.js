import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ProductType from './components/ProductType';
import Insectisides from './components/Pages/Insecticides';
import { Route, Routes } from 'react-router-dom';
import Nutritions from './components/Pages/Nutritions';
import Herbicides from './components/Pages/Herbicides';
import Fungicides from './components/Pages/Fungicides';
import AddToKart from './components/Pages/AddToCart';
import About from './components/About';
import { CartProvider } from 'react-use-cart';
import Address from './components/Address';
import Order from './components/Pages/Order';
import ChangePassword from './components/ChangePassword';
import EditProfile from './components/EditProfile';
import EditAddress from './components/EditAddress';
import AddItem from './components/bidding/AddItem';
import Bid_Products from './components/bidding/Bid_Products';

function App() {
  return (
    <div className="container">
      <CartProvider>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='insecticides' element={<Insectisides/>}/>
        <Route path='add-to-cart' element={<AddToKart/>}/>
        <Route path='address' element={<Address/>}/>
        <Route path='order' element={<Order/>}/>
        <Route path='changePassword' element={<ChangePassword/>}/>
        <Route path='editProfile' element={<EditProfile/>}/>
        <Route path='editAddress' element={<EditAddress/>}/>
        
        <Route path='register' element={<Register/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='products' element={<ProductType/>}/>
        <Route path='fungicides' element={<Fungicides />}/>
        <Route path='herbicides' element={<Herbicides/>}/>
        <Route path='nutritions' element={<Nutritions/>}/>
        <Route path='addproduct' element={<AddItem/>}/>
        <Route path='bid_product' element={<Bid_Products/>}/>
        <Route path='bid_product_details' element={<Bid_Products/>}/>
        
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
