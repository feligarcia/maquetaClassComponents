import React, { Component } from 'react';
import { url } from '../helpers/url';

export default class Lista extends Component {

    render() {
        console.log(this.props.productAc)
        return <div>
            <div>
                <table className="table text-center mt-3">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Product</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                   {
                       this.props.productAc.map(product=>(
                       <tr key={product.id}>  
                            <td><img src={product.imagen} width="100" height="100"/></td>
                            <td>{product.product}</td>
                            <td>{product.descripcion}</td>
                       </tr>
                   ))}
                    </tbody>
                </table>
            </div>
        </div>;
    }
}

