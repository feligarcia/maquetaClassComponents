import React, { Component} from "react";

export default class Usuarios extends Component {

      
    
    render() {
        
           return <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center"> Usuarios </h3>
                        <form className="form-group p-5">
                            <input
                                id="fileSelector"
                                type="text"
                                className="form-control "
                                placeholder="nombre"
                                name="nombre"
                                required
                            />
                             <input
                                id="fileSelector"
                                type="text"
                                className="form-control "
                                placeholder="apellido"
                                name="apellido"
                                required
                            />
                            <div className="d-grid gap-2 mx-auto mt-2">
                                <input
                                    value="Save"
                                    type="submit"
                                    className="btn btn-outline-dark"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>

}
}