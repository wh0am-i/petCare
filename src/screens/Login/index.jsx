import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import logo from '../../assets/logo.png';
import emailImg from '../../assets/email.png';
import senhaImg from '../../assets/senha.png';
import CadastraUser from '../../db/db.jsx';

const Db = new CadastraUser();

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function login() {
    if (email !== '' && senha !== '') {
      if (await Db.login(email, senha)) {
        navigation.navigate('CarteirinhaPet');
      } else {
        alert('Senha incorreta');
      }
    } else {
      alert('Campos em branco');
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.welcomeText}>Bem-vindo(a) de volta!</Text>
      </View>

      <View style={styles.textInput}>
        <Image source={emailImg} style={styles.inputIcon} />
        <TextInput
          onChangeText={(text) => setEmail(text)}
          placeholder="E-mail..."
          style={styles.input}
        />
      </View>

      <View style={styles.textInput}>
        <Image source={senhaImg} style={styles.inputIcon} />
        <TextInput
          secureTextEntry={true}
          onChangeText={(text) => setSenha(text)}
          placeholder="Senha..."
          style={styles.input}
        />
      </View>

      <View>
        <TouchableOpacity onPress={login}>
          <Text style={styles.button}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Cadastro')}>
          <Text>Não possui cadastro?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 350,
    height: 350,
    marginTop: -15,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 30,
    marginBottom: 40,
    marginLeft: '5%',
    marginTop: -25,
  },
  textInput: {
    flexDirection: 'row',
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#D9D9D9',
    paddingHorizontal: 10,
    alignItems: 'center', 
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    color: '#A1A1A1',
    fontSize: 20,
    flex: 1, 
  },
  button: {
    color: '#fff',
    backgroundColor: '#AB41DB',
    fontSize: 20,
    padding: 10,
    paddingHorizontal: 100,
    marginBottom: 15,
    marginTop: 10,
    borderRadius: 5,
  },
  link: {
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
});
