import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { connect } from 'http2';

class Counter extends Component{
    // state = {
    //     order: 4
    // }

    // Functional Props
    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue);
    // }

    // Statefull Component
    // handleTambah = () => {
    //     this.setState ({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //     })
    // }
    
    // Statefull Component
    // handleKurang = () => {
    //     if(this.state.order > 0) {
    //         this.setState ({
    //             order: this.state.order - 1
    //         }, () => {
    //             this.handleCounterChange(this.state.order); 
    //         })
    //     } 
    // }

    render() {
        console.log(this.props); 
        return (    
            <div className="counter">
                <button className="minus" onClick={this.props.handleMinus}> - </button>
                <input type="text" value={this.props.order}/>
                <button className="plus" onClick={this.props.handlePlus}> + </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({type: 'PLUS_ORDER'}),
        handleMinus: () => dispatch({type: 'MINUS_ORDER'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
