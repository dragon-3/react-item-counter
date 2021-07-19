import React from 'react';
import { render } from 'react-dom';

function Items (props) {
    
    return (
        <div className="items">

            <div className="centered">
                <ul>
                    <li>
                        <span className="name">{props.name}</span>
                        <span className="price">{props.price}</span>
                    </li>
                </ul>
            </div>
            
        </div>
        
    )
    
    
    
}




export default Items;