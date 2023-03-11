import React, { useState } from "react";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from "../../components/loader/loader.jsx";
import Product from "../../components/product/product";
import api from "../../components/utils/api";

const productId = "63f2ec333aa285034f78acb9";
function ProductPage() {
    const [cards, setCards] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState(null);

    const handleFormSubmit = (e) => {
      e.preventDefault();
      handleRequest();
    };
  
    const handleRequest = () => {
      api
      .search(searchQuery)
      .then((res) => setCards(res))
      .catch((err) => console.log(err));
    }; 

    const {productId} = useParams();

    useEffect(() => {
      setIsLoading(true);
      api.getUserInfo().then((userData) => setCurrentUser(userData));
      api
        .getProductById(productId)
        .then((productData) => setProduct(productData))
        .catch((err) => console.log('err', err))
        .finally(() => setIsLoading(false));
    }, [productId]);
  return (
    <>
      {/* <div className='content__cards'>
        {isLoading ? ( 
        <Loader /> 
        ) : ( 
          <Product 
            {...product}
            currentUser={currentUser}
          /> 
        )}
      </div> */}
  </>
  );
}

export default ProductPage
