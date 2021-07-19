import React from 'react';
import './App.css';

function Products (props) {
    
    return (
        <div className="products">
            
            <div className="product-centered">
                <ul>
                    <li>
                        <span className="product-name">{props.name}</span>
                        <span className="product-price">{props.price}</span>
                    </li>
                </ul>
            </div>
            
        </div>
        
    )
    
    
    
}




export default Products;