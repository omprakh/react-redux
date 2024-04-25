import React from 'react';
function Header(props){
    console.log("header",props.data)
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/archive/d/df/20141108175526%21Shopping_cart_icon.svg" />
            </div>
           
        </div>
    )
}
export default Header;