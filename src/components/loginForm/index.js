import React, { useState } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';

const LoginForm = () => {
  const [login, setLogin] = useState({username: "", password: ""})

  
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

  return (
    <form onSubmit={this.handleSubmit}>
        <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
    </form>
  )
}

export default LoginForm;