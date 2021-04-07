import React, { Component } from 'react';
import  './header.css';
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




class Header extends Component {
    render() {
        return (
            <div class="header">
                <a class="logo">
                    <Link to = "/">MyShoeShop</Link>
                </a>
                <div class="header-right">
                    <a>
                        <Link to = "/list">List</Link>
                    </a>
                    <a>
                        <Link to = "/">Home</Link>
                    </a>
                    <a><Link to = "/contact">Contact</Link></a>
            </div>
          </div>     
        )
    }
}

export default Header;