import React, {Component} from 'react';
import {Product} from '../json/product.json'
import {Display} from '../json/Display.json'
class BusquedaDisplay extends Component {
    constructor() {
        super();
        this.control = {
            Product,
            Display
        };
        this.state = {
            Producto: '',
            Ubicacion: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
        console.log(this.setState);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onAddProduct(this.setState);
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
                                    <h3>Control Productos</h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="badge badge-pill badge-danger">Producto</label>
                                                    <input 
                                                        type="text"
                                                        name="Producto"
                                                        onChange={this.handleInput}
                                                        className="form-control" 
                                                        placeholder="Producto"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="badge badge-pill badge-danger">Ubicación en Estantes</label>
                                                    <select 
                                                        type="text"
                                                        name="Ubicacion"
                                                        onChange={this.handleInput} 
                                                        className="form-control" 
                                                        placeholder="address"
                                                    >
                                                        {Displays}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={this.handleSubmit}
                                            className="btn btn-info btn-fill pull-right"
                                        >
                                            Buscar
                                        </button>
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

export default BusquedaDisplay;