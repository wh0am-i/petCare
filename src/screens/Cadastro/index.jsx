import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import logo from '../../assets/logo.png';
import usuarioImg from '../../assets/usuario.png';
import emailImg from '../../assets/email.png';
import senhaImg from '../../assets/senha.png';
import CadastraUser from '../../db/db.jsx';
const Db = new CadastraUser();

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function cadastra() {
    if (nome !== '' && email !== '' && senha !== '') {
      if (email.includes('@gmail.com') || email.includes('@hotmail.com')) {
        if (senha.length >= 8) {
          if (await Db.cadastra(nome, email, senha)) {
            navigation.navigate('Login');
          }
        } else {
          alert('A senha deve ter 8 ou mais caracteres');
        }
      } else {
        alert('Insira um email válido');
      }
    } else {
      alert('Campo vazio');
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.welcomeText}>Bem-vindo(a)</Text>
      </View>
      <View style={styles.textInput}>
        <Image source={usuarioImg} style={styles.inputIcon} />
        <TextInput
          onChangeText={(text) => setNome(text)}
          placeholder="Nome..."
          style={styles.input}
        />
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
      <View style={styles.botoes}>
        <TouchableOpacity onPress={() => { cadastra() }}>
          <Text style={styles.botao}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ textAlign: 'center', marginTop: 5 }}>Possui cadastro?</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
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
  botao: {
    color: '#fff',
    backgroundColor: '#AB41DB',
    fontSize: 20,
    padding: 10,
    paddingHorizontal: 100,
    marginBottom: 15,
    marginTop: 10,
    borderRadius: 5,
  },
  botoes: {
    width: '100%',
    alignItems: 'center',
  },
});
