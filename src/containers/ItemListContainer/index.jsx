import React, { useState } from 'react';
import ItemCount from '../../components/ItemCount';
import './styles.scss';
import { products } from '../../data/products';
import { useEffect } from 'react';
import ItemList from '../../components/ItemList';


const ItemListContainer = () => {
  
  const [productsState, setProducsState]=useState([]);


  useEffect(()=>{
    (async()=>{
      const getProducts = new Promise((accept, reject)=>{
        accept(products);
      })

      try {
        setProducsState(products);
      } catch (error) {
        console.log(error);
      }
    })();
  })
  
  
  return (
    
    <div className='ILC'>
        {/* <h1>SitioWeb en construcción...</h1> */}
        {/* <ItemCount/> */}

        <ItemList products={products}/>

    </div>
    
  )
}

export default ItemListContainer