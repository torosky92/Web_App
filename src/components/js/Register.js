import React, {Component} from 'react';
import '../css/Login.css';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            Company:'',
            Email: '',
            Nombre: '',
            lastname: '',
            Address_Home: '',
            City: '',
            Country: '',
            Code_Postal: '',
            User: '',
            password: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }
    handleSubmit(e){
        e.preventDefault();
    }
    render(){
        return(
        <div className="modal-dialog text-center">
            <div className="col-sm-12 main-section">
                <div className="modal-content">
                    <div className="row">
                        <div className="content">
                            <div className="card">
                                <div className="card-header">
                                    <h1 className="card-title">Registras</h1>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-5 pr-1">
                                                <div className="form-group">
                                                    <label>Compañia</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Los Tres Consultoria"
                                                        name="Company"
                                                        onChange={this.handleInput}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4 px-1">
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Email (*)</label>
                                                    <input 
                                                        type="email" 
                                                        className="form-control" 
                                                        placeholder="Email"
                                                        name="Email"
                                                        onChange={this.handleInput}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 pr-1">
                                                <div className="form-group">
                                                    <label>Nombre (*)</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="David Antonio"
                                                        name="Nombre"
                                                        onChange={this.handleInput}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 pl-1">
                                                <div className="form-group">
                                                    <label>Apellidos (*)</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Toro Medina"
                                                        name="lastname"
                                                        onChange={this.handleInput}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Dirección</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Calle ..."
                                                        name="Address_Home"
                                                        onChange={this.handleInput}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 pr-1">
                                                <div className="form-group">
                                                    <label>Ciudad (*)</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Medellin"
                                                        name="City"
                                                        onChange={this.handleInput}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4 px-1">
                                                <div className="form-group">
                                                    <label>Pais (*)</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Colombia"
                                                        name="Country"
                                                        onChange={this.handleInput}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4 pl-1">
                                                <div className="form-group">
                                                    <label>Código Postal</label>
                                                    <input 
                                                        type="number" 
                                                        className="form-control" 
                                                        placeholder="..."
                                                        name="Code_Postal"
                                                        onChange={this.handleInput}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <form className="col-md-12" method="get">
                                            <div className="form-group" id="user-group">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="Usuario"
                                                    name="User"
                                                    onChange={this.handleInput}
                                                />
                                            </div>
                                            <div className="form-group" id="contrasena-group">
                                                <input 
                                                    type="password" 
                                                    className="form-control" 
                                                    placeholder="Contrasena"
                                                    name="password"
                                                    onChange={this.handleInput}
                                                />
                                            </div>
                                        </form>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 forgot">
                            <button  
                                className="btn btn-primary"
                                href=""
                                onClick={this.handleSubmit}
                            > 
                                Registrarme
                            </button>
                            <p>
                                ______________
                            </p>
                            <button  
                                className="btn btn-primary"
                                href=""
                                //onClick={}
                            > 
                                Regresar 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default Register;