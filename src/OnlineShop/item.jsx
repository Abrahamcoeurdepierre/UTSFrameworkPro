import React, { Component } from 'react'
import './item.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
  
function Item(props) {
    return (
       
            <div className="item">

                <div className="left">
                    <img src={ props.linkGambar }
                        height={300}
                        width={400}/>
                </div>

                <div className="right">
                    <div className="itemName">
                        {props.itemName}
                    </div>
                    <div className="itemPrice">
                        Price: {props.itemPrice} Rp
                    </div>
                    <div className="itemStok">

                        Number of stock: {props.itemStock}
                    </div>
                    <div className="buyBtn">
                        <Link to = {`/${props.itemName}/${props.itemPrice}/${props.linkGambar}`}>
                            <button className="buy" onClick = {props.greetHandler}>Buy</button>
                        </Link>
                        
                        
                    </div>
                    <div className="detailsBtn">
                        <Link to = {`/${props.itemName}/${props.itemPrice}`}>
                            <button className="details">Details</button>
                        </Link>
                    </div>
                </div>


                
                
                 
                
            </div>
        
    );
}

export default Item;
