import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props) {
        super(props);
        this.state = {
        name: '',
        surname: '',
        email: '',
        password: '',
        };
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    placeholder="Nombre"
                />
                <input
                    type="text"
                    name="surname"
                    value={this.state.surname}
                    onChange={this.handleInputChange}
                    placeholder="Surname"
                />
                <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    placeholder="Email"
                />
                <input
                    type="text"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    placeholder="Password"
                />
                <button onClick={this.handleSubmit}>Enviar</button>
            </form>
        );
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
        // Realizar la solicitud POST al backend aquí y enviar los datos
        const nuevoUsuario = {
          name: this.state.name,
          surname: this.state.surname,
          email: this.state.email,
          password: this.state.password
        };
    
        fetch('http://localhost:3030/ini/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(nuevoUsuario),
        })
          .then((response) => response.json())
          .then((data) => {
            // Manejar la respuesta del backend
            console.log('Respuesta del servidor:', data);
            // Puedes redirigir al usuario o realizar otras acciones aquí
          })
          .catch((error) => {
            console.error('Error al enviar solicitud POST:', error);
          });
      };

}

export default Formulario;