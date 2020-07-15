import React from 'react';
import {Link} from 'react-router-dom';
import Shoes from './../Shoes.json';

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <div className="prodCont">
        {Object.keys(Shoes).map(keyName=>{
          const juti=Shoes[keyName];
          return(
            <Link key={keyName} className="link" to={`/products/${keyName}`}>
              
              <h4>{juti.name}</h4>
              <img src={juti.img} height={150} alt="Shoes"/>
            </Link>
          )
        })}
      </div>

     
    </div>
  );
}

export default Products;
