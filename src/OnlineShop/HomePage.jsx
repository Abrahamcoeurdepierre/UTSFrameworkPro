import React, { Component } from 'react';
import Item from './item';
import './HomePage.css';



class Homepage extends Component {
    greetParent = this.greetParent.bind(this);
    state = {
        listArtikel: []
    }

    componentDidMount(){
        fetch('http://localhost:3001/posts/')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI =>{
            this.setState({
                listArtikel: jsonHasilAmbilDariAPI
            })
        })
    }
    greetParent(){
           
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nama: 'React POST Request Example' })
            };
            fetch('http://localhost:3001/posts', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({ postId: data.id }));
            alert('The Item has been added to the cart')

    }

    render() {
        return (
           <div className="general">
                    <div className="itemList">
                    {
                       
                        this.state.listArtikel.map(artikel => {
                            return <Item    key = {artikel.id}
                                            linkGambar={artikel.gambar}
                                            itemName = {artikel.nama}
                                            itemPrice = {artikel.harga}
                                            itemStock ={artikel.stok}
                                            greetHandler={this.greetParent}
                                    />
                        })
                    }
                    </div>
           </div>       
        )
    }
}

export default Homepage;