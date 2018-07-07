import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            imageUrl: '',
            productName: '',
            productPrice: ''
        }
        console.log(constructor)
        this.nameChangeHandler = this.nameChangeHandler.bind(this)

    }

    addProduct = (param) => {
        const { imageUrl, productName, productPrice  } = this.state
        axios.post('/api/addImage', { imageUrl, productName, productPrice }).then( res => {
            axios.get('/api/allProducts').then(response => {
                this.setState({
                    imageUrl: response.data,
                    productName: response.data,
                    productPrice: response.data
                })
            })
        })

    }
    
    imageChangeHandler = (val) => {
        this.setState({
          imageUrl: val
        })
    }

    nameChangeHandler(val) {
        this.setState({
            productName: val
        })
    }

    priceChangeHandler = (val) => {
        this.setState({
            productPrice: val
        })
    }

    cancelProduct = () => {
        this.setState({
            imageUrl: '',
            productName: '',
            productPrice: ''
        })
    }

    
    render() {
        return (
            <div className="theForm">
                <input className="insertImage" onChange={(e) => this.imageChangeHandler(e.target.value)} placeholder=" "/>
                <input className="insertProductName" onChange={(e) => this.nameChangeHandler(e.target.value)} placeholder=" " />
                <input className="insertPrice" onChange={(e) => this.priceChangeHandler(e.target.value)} placeholder=" " />
                <button className="cancelButton" onClick={ () => this.cancelProduct() }> Cancel </button>
                <button className="addInventoryButton" onClick={(this.addProduct)} ></button>
            </div>
        )
    }
}