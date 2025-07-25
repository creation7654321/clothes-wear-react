import React from 'react'
import './realtedproducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
export default function RelatedProducts() {
  return (
    <div className='realtedproducts'>
        <h1>Realted Products</h1>
        <hr />
        <div className="realtedproducts-item">
            {data_product.map((item, i)=>{
                return <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            })}
        </div>
    </div>
  )
}
