import React from 'react';
function Home(props){
    console.log("home",props)
    return (
        <div>
            
            <h1>home component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item" >
                    <img src="https://as2.ftcdn.net/v2/jpg/05/32/90/37/1000_F_532903780_RpcmzjKkrFf6Ki3mW70PNnvcieQ7eJzB.jpg" />
                </div>
                <div className="text-wrapper item" >
                 <span>I Phone</span>
                 <span>$ 1000</span>
                 </div>

                <div className="btn-wrapper item" >
                <button onClick={()=>props.addToCartHandler({price:1000,name:'I phone'})} >add to cart</button>
                <button className="remove-cart-btn" onClick={()=>props.removeToCartHandler()} >Remove to cart</button>
                 </div>
            </div>
        </div>
    )
}
export default Home;