import React, { Component } from 'react'
import './Contact.css';
import Header from './header'
import Feno from './Feno.jpg';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <h1>Contacts</h1>
                <div className="center">
                    
                    <div className="leftText">
                        <img src={Feno} 
                            height={400}
                            width={325}/>
                    </div>
                    <div className="rightText">
                    <p>
                        Name: Rakotoaritsoa Fenohasina
                        <br/>
                        Nim: 1841720221
                        <br/>
                        Class: TI-2G
                    </p>
                
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default Contact;