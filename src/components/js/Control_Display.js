import React, {Component} from 'react';
import {Product} from '../json/product.json'
import {Display} from '../json/Display.json'
class ControlDisplay extends Component {
    constructor() {
        super();
        this.control = {
            Product,
            Display
        };
        this.state = {
            Address: '',
            Products: '',
            Price: 0,
            Descount: 0,
            Quantity: 0,
            Data: '',
            Code: 0
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e){
        const {value, name} = e.target;
        if(name === 'Price' || name === 'Quantity' || name === 'Descount' || name === 'Code'){
            if(isNaN(value)){
                alert('Debe ser un numero');
                return;
            }
        }
        this.setState({
            [name]: value
        });
        console.log(this.setState);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onAddDisplay(this.state);
    }
    render(){
        const Displays = this.control.Display.map((Display,i)=>{
            return (
                <option>{Display.Display_address}</option>
            )
          })
        return(
            <div className="card mt-12 middle-xs center-xs">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card mt-12">
                                <div className="card-header">
                                    <h3>Control Display</h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="badge badge-pill badge-danger">Dirección de Estante</label>
                                                    <select 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Estante"
                                                        name="Address"
                                                        onChange={this.handleInput}
                                                    >
                                                        {Displays}
                                                    </select>
                                                </div>
                                                </div>
                                            </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="badge badge-pill badge-danger">Producto</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="Producto"
                                                    name="Products"
                                                    onChange={this.handleInput}
                                                />
                                            </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 pr-1">
                                            <div className="form-group">
                                                <label className="badge badge-pill badge-danger">Precio</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="$..."
                                                    name="Price"
                                                    onChange={this.handleInput} 
                                                />
                                            </div>
                                            </div>
                                            <div className="col-md-6 pl-1">
                                            <div className="form-group">
                                                <label className="badge badge-pill badge-danger">Descuento</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="0"
                                                    name="Descount"
                                                    onChange={this.handleInput}
                                                />
                                            </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 pr-1">
                                                <div className="form-group">
                                                    <label className="badge badge-pill badge-danger">Cantidad</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="cantidad"
                                                        name="Quantity"
                                                        onChange={this.handleInput}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4 px-1">
                                            <div className="form-group">
                                                <label className="badge badge-pill badge-danger">Fecha de Caducidad</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="11/11/2019"
                                                    name="Data"
                                                    onChange={this.handleInput}
                                                />
                                            </div>
                                            </div>
                                            <div className="col-md-4 pl-1">
                                            <div className="form-group">
                                                <label className="badge badge-pill badge-danger">Código de Barras</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="9832003"
                                                    name="Code"
                                                    onChange={this.handleInput}
                                                />
                                            </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 pr-1">
                                            <div className="form-group">
                                                <button 
                                                    className="btn btn-info btn-fill pull-right"
                                                    onClick={this.handleSubmit}
                                                >
                                                    Buscar
                                                </button>
                                            </div>
                                            </div>
                                            <div className="col-md-6 pl-1">
                                            <div className="form-group">
                                                <button 
                                                    className="btn btn-info btn-fill pull-right"
                                                    //onClick={}
                                                >
                                                    Actualizar
                                                </button>
                                            </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ControlDisplay;