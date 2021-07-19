import React from 'react';
import { render } from 'react-dom';

function Items (props) {
    
    return (
        <div className="items">
            
            <div className="item-centered">
                <ul>
                    <li>
                        <span className="item-name">{props.name}</span>
                        <span className="item-price">{props.price}</span>
                        <button className="button" onClick={() => props.removeItem(props.id)}>Remove</button>
                    </li>
                </ul>
            </div>
            
        </div>
        
    )
    
    
    
}




export default Items;