import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import DATA from '../Data';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../redux/actions/index'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    const [productInfo,setproductInfo] = useState([])
    
    const proid = useParams();
    const proDetail = DATA.filter(x=>x.id == proid.id)
    const product = proDetail[0];
    console.log(product);
    const { id } = useParams();
   
   
    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }

    useEffect(()=>{

        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => {
          
          setproductInfo(response.data)
          
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });

    })

    return (
        <>
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src={productInfo.image} alt={productInfo.title}height="400px" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-5 fw-bold">{productInfo.title}</h1>
                    <hr />
                    <h2 className="my-4">${productInfo.price}</h2>
                    <p className="lead">{productInfo.description}</p>
                    {/* <button onClick={()=>handleCart(productInfo)} className="btn btn-outline-primary my-5">{cartBtn}</button> */}
                    <NavLink to={'/'} onClick={()=>handleCart(productInfo)} class="btn btn-outline-primary">{cartBtn}</NavLink>

                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetail
