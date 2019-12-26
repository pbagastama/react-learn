import React, { Component, Fragment } from 'react';
import './Product.css'
import CardProduct from './CardProduct/CardProduct';
import { connect } from 'react-redux';

class Product extends Component {
    // state = {
    //     order: 4
    // }

    // Functional Props
    // handleCounterChange = (newValue) => {
    //     this.setState ({
    //         order: newValue
    //     })
    // }
    render() {
        return (
            <Fragment>
                <p>Product Page</p>
                <hr/>
                <div className="header">
                    <div className="logo">
                        <img src="https://www.etanee.id/img/content/img_logo_etanee_white.png" alt="logo-baru"/>
                    </div>
                    <div className="basket">
                        <img src="https://www.etanee.id/img/icon/ic_cart_white.svg" alt="troley"/>
                        <div className="count">{this.props.order}</div>
                    </div>
                </div>
                {/* Send Functional with Props */}
                <CardProduct />
            </Fragment> 
        );
    }
}

const mapStateToProps = state => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(Product);


