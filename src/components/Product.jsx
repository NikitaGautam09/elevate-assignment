import React from 'react'
import { NavLink } from 'react-router-dom';
import DATA from '../Data'
import { useEffect,useState } from 'react';
import axios from 'axios';

const Product = (props) => {
    const [products, setProducts] = useState([]);

    const [allCategory,setAllCategory] = useState([]);
      const [jewelery,setJewelry] = useState([]);
      const [electronics,setElectronics] = useState([]);

      console.log('propsss',props)
    useEffect(()=>{
        if(props.allproduct=== false && props.allElectronic === false && props.alljewelerys === false){
            axios.get('https://fakestoreapi.com/products')
            .then(response => {
              // Set the fetched data to the 'products' state
              console.log('ress--->',response)
              setProducts(response.data);
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
        }

        if(props.allproduct=== true && props.allElectronic === false && props.alljewelerys === false){
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
          // Set the fetched data to the 'products' state
          console.log('ress--->',response)
          setProducts(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }

    if(props.allproduct=== false && props.allElectronic === true && props.alljewelerys === false){
        axios.get('https://fakestoreapi.com/products/category/electronics')
        .then(response => {
          // Set the fetched data to the 'products' state
          console.log('ress--->',response)
          setProducts(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }

    if(props.allproduct=== false && props.allElectronic === false && props.alljewelerys === true){
        axios.get('https://fakestoreapi.com/products/category/jewelery')
        .then(response => {
          // Set the fetched data to the 'products' state
          console.log('ress--->',response)
          setProducts(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }

    



    })

    const cardItem = (item) => {
        return (
            <div class="card my-5 py-4" key={item.id} style={{width: "18rem"}}>
                <img src={item.image} class="card-img-top" alt={item.title} style={{ maxHeight: "150px", objectFit: "cover" }}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">{item.title}</h5>
                        <p className="lead">${item.price}</p>
                        <NavLink to={`/products/${item.id}`} class="btn btn-outline-primary">Buy Now</NavLink>
                    </div>
</div>
                );
    }

                return (
                <div>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 style={{fontWeight:'bold', fontSize:'30px'}}>Man & Women Fashion</h1>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-around">
                            {products.map(cardItem)}
                        </div>
                    </div>
                </div>
                )
}

                export default Product
