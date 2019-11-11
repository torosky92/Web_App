import React, {Component} from 'react';
import logo from '../img/Logo-big.png';

import '../css/App.css';
import Navigation from './Navigation'
import ControlDisplay from './Control_Display'
import BusquedaDisplay from './Busqueda_Display'
import Login from './Login'
import Register from './Register'
import {Product} from '../json/product.json'
import {Display} from '../json/Display.json'

class App extends Component {
  constructor() {
      super();
      this.state = {
      Product,
      Display
    };
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.handleAddDisplay = this.handleAddDisplay.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleAddProduct(product){
    this.setState({
      Product:[...this.state.Product, Product]
    })
    console.log(product);
  }
  handleAddDisplay(display){
    this.setState({
      Display:[...this.state.Display, display]
    })
    console.log(display);
  }
  handleAddUser(){

  }
  handleLogin(){
    
  }
  removeDisplay(index){
    if (window.confirm('Estas seguro de eliminarlo?')){
      this.setState({
        Display: this.state.Display.filter((e,i)=>{
          return i !== index
        })
      })
    }
  }
  removeDisplay(index){
    if (window.confirm('Estas seguro de eliminarlo?')){
      this.setState({
        Display: this.state.Display.filter((e,i)=>{
          return i !== index
        })
      })
    }
  }
  render(){
    return (
      <div className="App">
        <Navigation />
        <div>
          <img src={logo} href="" className="App-logo" alt="logo" />
        </div>
        <div className="container middle-xs center-xs">
          <div className="row mt-4">
            <BusquedaDisplay onAddProduct={this.handleAddProduct}/>
          </div>
        </div>
        <div className="container middle-xs center-xs">
          <div className="row mt-4">
            <ControlDisplay onAddDisplay={this.handleAddDisplay}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
