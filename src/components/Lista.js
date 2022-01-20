import React, { Component } from 'react';
import { url } from '../helpers/url';
export default class Lista extends Component {

 constructor(){
     super();
     this.state = {
         products: []
     }
 }
componentDidMount(){
    this.getData()
}

 async getData(){
     const response = await fetch(url)
     const data = await response.json()
     console.log(response)
     this.setState({products:data})
 }
    render() {
        
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
                       this.state.products.map(product=>(
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
