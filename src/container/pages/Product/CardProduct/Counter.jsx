import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { connect } from 'http2';

class Counter extends Component{
    // state = {
    //     order: 4
    // }

    // Functional Props
    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    // Statefull Component
    handleTambah = () => {
        this.setState ({
            order: this.state.order + 1
        }, () => {
            // Update State child to parent
            this.handleCounterChange(this.state.order);
        })
    }
    
    // Statefull Component
    handleKurang = () => {
        if(this.state.order > 0) {
            this.setState ({
                order: this.state.order - 1
            }, () => {
                // Update State child to parent
                this.handleCounterChange(this.state.order); 
            })
        } 
    }

    render() {
        console.log(this.props); 
        return (    
            <div className="counter">
                <button className="minus" onClick={this.handleKurang}> - </button>
                <input type="text" value={this.props.order}/>
                <button className="plus" onClick={this.handleTambah}> + </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
} 

export default connect(mapStateToProps)(Counter);
