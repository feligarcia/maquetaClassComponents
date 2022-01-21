import React, { Component } from 'react';
import styled from 'styled-components';
import Lista from './Lista';
import { url } from '../helpers/url';
import getData from './GetData'




const Input = styled.input`
    background-color: #F3C881;
`

const TextArea = styled.textarea`
    resize: none;
`

const Form = styled.form`
   background-color: #F3C881;
   background-image: url("./assets/fondo.png");
`



export default class Formulario extends Component {
    
    constructor(){
        super()
        this.state ={
            form:{
                product: '',
                description: '',
            },
            ProductosAc:[],
        }
    }

handleInputCHanged = ({target}) => {
    this.setState({
        form:{
           ...this.state.form,
           [target.name]: target.value 
        }}
    )
    console.log(this.state.form)
}

async componentDidMount(){
    const listadoData = await getData(url)
    this.setState({ProductosAc:listadoData})
}



handleSubmit = async (e) =>{
    e.preventDefault();
    await this.addData()
    const listadoData = await getData(url)
    this.setState({ProductosAc:listadoData})
    console.log(this.state.ProductosAc)
    
}


addData = async () =>{
await fetch(url, {
    method: 'POST',
    body: JSON.stringify(this.state.form),
    headers: {
        "Content-Type" : "application/json; charset=UTF-8"
    }
})
}
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center"> Productos </h3>
                        <Form className="form-group p-5" onSubmit={this.handleSubmit}>
                            <input
                                id="fileSelector"
                                type="text"
                                className="form-control "
                                placeholder="url image"
                                name="imagen"
                                required
                                onChange={this.handleInputCHanged}
                               />

                            <input
                                type="text"
                                className="form-control mt-2"
                                name="product"
                                autoComplete="off"
                                placeholder="product name"
                                required
                                onChange={this.handleInputCHanged}
                                />

                            <TextArea
                                className="form-control mt-2"
                                autoComplete="off"
                                name="descripcion"
                                placeholder="description"
                                required
                                onChange={this.handleInputCHanged}
                         
                            ></TextArea>

                            <div className="d-grid gap-2 mx-auto mt-2">
                                <Input
                                    value="Save"
                                    type="submit"
                                    className="btn btn-outline-dark"
                                />
                            </div>
                        </Form>
                        <Lista productAc={this.state.ProductosAc} />
                    </div>

                </div>
            </div>
        );
    }
}
