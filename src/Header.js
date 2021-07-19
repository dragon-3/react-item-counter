import React from 'react';

function Header(props) {
    return (
        <header className="header">
            <div className="header-title">
                {props.title}
            </div>

            <div className="item-title">
                <p>Items In Cart - Total: {props.totalItems}</p>
            </div>
        </header>
        
    )
}

export default Header;