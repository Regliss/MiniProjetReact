import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, Image, Button} from 'react-native';
import axios from 'axios';
import styled from 'styled-components';

const LoginScreen = () => {
  const [user, setUser] = useState({username: '', password: ''});

  useEffect(() => {
    console.log(`user= ${user.username} ${user.password}`);
  }, [user]);

  const handleSubmit = (event) =>  {
    alert('Un essai a été envoyé : ' + this.state.value);
    event.preventDefault();
  }

  return (
    <View>
        <Image
          style={{ height: 150, width: 360 }}
          source={{ uri: `https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4.png` }}
        />          
      <LoginForm>
        <TextInput
          onChangeText={value => setUser({...user, username: value})}
          value={user.username}
          placeholder="Username"
          keyboardType="Username"
        />
        <TextInput
          onChangeText={value => setUser({...user, password: value})}
          value={user.password}
          placeholder="Password"
          secureTextEntry
        />
        <Button
          title="Login"
          onPress={handleSubmit}
        />
      </LoginForm>
    </View>
  );
};

const LoginForm = styled.View`
    display: flex;
    flex-direction: column;
    //justify-content:center;
    align-items: center;
`;

export default LoginScreen;