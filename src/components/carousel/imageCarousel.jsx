import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './imageCarousel.css';
import image1 from '../../assets/e-commerce-main-image.jpg';
import image2 from '../../assets/e-commerce-image.jpg';
import image3 from '../../assets/ecommerce-shopping-online.jpg';
import image4 from '../../assets/cover.jpg';
import image5 from '../../assets/cover1.jpeg';
import Login from '../buttons/Login';
import CartBtn from '../buttons/CartBtn';
import LangDropdown from '../langDropdown';




import Navbar from '../navbar/navBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import DropdownInput from '../dropdown';
import HamburgerMenu from '../HamburgerMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import Product from '../Product';
import { useState } from 'react';
const ImageCarousel = () => {

    const dropdownOptions = [
        { label: 'All Category', value: 'category' },
        { label: 'Jewelery', value: 'jewelery' },
        { label: 'Electronics', value: 'electronics' },
        // Add more options as needed
      ];

      const dropdownOptions1 = [
        { value: 'option1', label: 'English', flag: '🇺🇸' },
        { value: 'option2', label: 'Hindi', flag: '🇬🇧' },
        { value: 'option3', label: 'French', flag: '🇫🇷' },
        // Add more options as needed
      ];


      const ham =[
        { value: 'home', label: 'Home', flag: '🇺🇸' },
        { value: 'about', label: 'About', flag: '🇬🇧' },
        { value: 'contact', label: 'Contact', flag: '🇫🇷' },

      ]
      const [allCategory,setAllCategory] = useState([]);
      const [jewelery,setJewelry] = useState([]);
      const [electronics,setElectronics] = useState([]);
      const [allproducts,setAllProducts] = useState(false);
      const [alljewelery,setallJewelery] = useState(false);
      const [allElectronics,setallElectronics] = useState(false);
    
      const handleDropdownChange = (event) => {


        if(event.target.value === 'category'){

          setAllProducts(true);
          setallElectronics(false)
          setallJewelery(false)
        }

        if(event.target.value === 'jewelery'){
          setallJewelery(true);
          setallElectronics(false);
        }

        if(event.target.value === 'electronics'){
          setallElectronics(true);
          setallJewelery(false);
          setAllProducts(false);
        }

        if(event.target.value === 'category'){
          axios.get('https://fakestoreapi.com/products/categories')
          .then(response => {
            setAllCategory(response.data.data);
         
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
          
        }

        if(event.target.value === 'jewelery'){
          axios.get('https://fakestoreapi.com/products/category/jewelery')
          .then(response => {
            setJewelry(response.data.data)
         
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
          
        }

     
        if(event.target.value === 'electronics'){
          axios.get('https://fakestoreapi.com/products/category/electronics')
          .then(response => {
            setElectronics(response.data.data)
         
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
          
        }



      };
    

  return (
    <>
    <div className="carousel-container">
    
      <Carousel infiniteLoop showStatus={false} showThumbs={false}>
        <div>
          <img src={image5} alt="Image 1" />
        </div>
        <div>
          <img src={image2} alt="Image 2" />
        </div>
        <div>
          <img src={image3} alt="Image 3" />
        </div>
      </Carousel>
      <div className="overlay-content">
        <Navbar />
        
        
        
        <div className='heading'>
        <h2 style={{color:'white',fontWeight:'bold'}}>Eflyer</h2></div>
        <div className='row-element'>
         
        <div className="dropdown-container">
        <HamburgerMenu options={ham} />

          <DropdownInput options={dropdownOptions} onChange={handleDropdownChange} />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <FontAwesomeIcon icon={faSearch}  />
          

          {/* <Login  /> 
          /* <CartBtn/> */}


        </div>

        <div className='droplang'><DropdownInput options={dropdownOptions1} onChange={handleDropdownChange}/></div>
        <div className='add-cart1'><CartBtn/></div>
        <div className='add-cart'><Login/></div>
        

        </div>
        <h1 style={{textAlign:'center',color:'white',marginBottom:'50px'}}> Get start <br></br> your Favourite Shopping</h1>
        <button type='submit' style={{width:'100px',height:'35px',backgroundColor:'black',
  alignItems: 'center',marginLeft:'800px',marginBottom:'30px'}}><p style={{color:'white',fontWeight:'bold',margin:'0',textAlign: 'center',}}>Buy Now</p></button>
        {/* <div>
          <LanguageDropdown options={dropdownOptions1} onChange={handleDropdownChange} />
        </div> */}
        {/* <div className='flag-dropdown-container'>
          <DropdownInput options={dropdownOptions} onChange={handleDropdownChange} />
        </div> */}
      </div>
    </div>
    <Product allproduct={allproducts} allElectronic={allElectronics} alljewelerys ={alljewelery}/>
    </>
  );
};

export default ImageCarousel;
