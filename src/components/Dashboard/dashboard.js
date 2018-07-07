import React, { Component } from 'react';
import Product from '../Product/Product'



const Dashboard = (props) => {

    // theProducts = props.listedProducts.map(
        
            let theProduct = props.listedProducts.map(
                product => {
                    return <div>
                            {product.product_id}
                            {product.name}
                        </div>
                }
            )
    return (
        <div>
            {theProduct}
        </div>
    )
}

export default Dashboard;


// export default class Dashboard extends Component {
//     render() {

//         return (
//             <div>
//             <p>Dashboard</p>
//             <Product />
//             </div>
//         )
//     }
// }