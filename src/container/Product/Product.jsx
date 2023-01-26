import React, { Component, Fragment } from "react";
import './Product.css';

class Product extends Component {
    state = {
        order: 4
    }
    render(){
        return <Fragment>
            <div className="header">
                <div className="logo">
                    <img className="img" src="https://digitaraya.com/assets/img/startups/etanee.png"></img>
                </div>
                <div className="troley">
                    <img src="https://as2.ftcdn.net/v2/jpg/03/25/88/35/1000_F_325883504_eRAkffimiMBBmwbMPLu16if5etHb1qDV.jpg"></img>
                    <div className="count">{this.state.order}</div>
                </div>
            </div>
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/01/19/393903023.jpg"></img>
                </div>
                <p className="product-title">Daging Ayam Berbumbu Rasa Original plus Tepung Crispy [1 Carton - 10 Pack]</p>
                <p className="product-price">Rp 410.000</p>
                <div className="counter">
                    <button className="minus">-</button>
                    <input type="text" defaultValue={this.state.order}/>
                    <button className="plus">+</button>
                </div>
            </div>
        </Fragment>
    }
}
export default Product;