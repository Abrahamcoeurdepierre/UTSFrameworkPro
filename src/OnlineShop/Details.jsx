import React, { Component } from 'react'
import './Details.css';
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

function Details() {
  let{topicId,price} = useParams();
        return (
            <div className="itemDetail">
                <div className="itemNameDetail">
                    {topicId}
                </div>
                <div className="itemPriceDetail">
                    {price}
                </div>
                <div className="details">
                    <p>
                        The standard Lorem Ipsum passage, used since the 1500s
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    
                </div>
            </div>
        )
}

export default Details;
