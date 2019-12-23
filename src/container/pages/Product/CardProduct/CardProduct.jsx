import React, { Component } from 'react';
import '../Product.css'
import Counter from './Counter';

export default class CardProduct extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <div className="thumb-product">
                        <img src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/rendang_1Kg_pack5.jpg" alt="product-1"/>
                    </div>
                    <p className="prod-title">Daging Sapi Rendang Frozen 1000 gr [1 Carton - 5 Pack]</p>
                    <p className="prod-price">Rp. 480.000</p>
                    <Counter onCounterChange={(value) => this.props.onCounterChange(value )}/>
                </div>
            </div>
        )
    }
}
