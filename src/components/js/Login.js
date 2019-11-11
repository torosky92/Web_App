import React, {Component} from 'react';
import '../css/Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
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
  render (){
    return(
      <div className="modal-dialog text-center">
          <div className="col-sm-8 main-section">
              <div className="modal-content">
                  <form className="col-12" method="get" onSubmit={this.handleSubmit}>
                    <article>
                      <div className="form-group" id="user-group">
                          <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nombre de usuario" 
                            name="username"
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
                      <button 
                        type="submit" 
                        className="btn btn-primary fas fa-sign-in-alt"
                        //onClick={}
                      >
                        Sign in 
                      </button>
                    </article>
                  </form>
                  <div className="col-12 forgot">
                    <button  
                      className="btn btn-primary"
                      href=""
                      onClick={this.handleSubmit}
                    > 
                      Registrar
                    </button>
                    <p>
                        _____________________
                    </p>
                    <button  
                      className="btn btn-primary"
                      href=""
                      //onClick={}
                    > 
                      Regresar 
                    </button>
                    <p>
                        _____________________
                    </p>
                    <a href="">Recordar contraseña?</a>
                  </div>
                    <div className="alert alert-danger" role="alert">
                        Usuario y Password incorrecto.
                    </div>
                    <div className="alert alert-success" role="alert">
                        Password correcto.
                    </div>
                </div>
          </div>
      </div>
    )
  }
}

export default Login;