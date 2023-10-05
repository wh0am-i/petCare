import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native'
import logo from '../../assets/logo.png';
import usuario from '../../assets/usuario.png';
import email from '../../assets/email.png';
import senha from '../../assets/senha.png';
import { db } from '../../db/db'

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  function cadastra() {
    if (nome != "" && email != "" && senha != "") {
      if (email.includes("@gmail.com" || "@hotmail.com")) {
        if (senha.length >= 8) {
            navigation.navigate('Login')
        }
        else {
          alert("A senha deve ter 8 ou mais caracteres")
        }
      }
      else {
        alert("Insira um email válido")
      }
    }
    else {
      alert("campo vazio")
    }

    /*
    inicia o cadastraDB enviando os values
    db.cadastraDB()
    navigation.navigate('Login')
    */
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 350, height: 350, marginTop: 50 }} />
      <Text style={{ fontSize: 30, marginBottom: 40, marginLeft: '-40%', marginTop: '-10%' }}>Bem-vindo(a)</Text>
      <View style={styles.textInput}>
        <Image source={usuario} style={{ marginRight: '5%' }} />
        <TextInput onChangeText={(text) => setNome(text)} placeholder='nome...' style={{ color: '#A1A1A1', fontSize: 20 }}></TextInput>
      </View>
      <View style={styles.textInput}>
        <Image source={email} style={{ marginRight: '5%' }} />
        <TextInput onChangeText={(text) => setEmail(text)} placeholder='email...' style={{ color: '#A1A1A1', fontSize: 20 }}></TextInput>
      </View>
      <View style={styles.textInput}>
        <Image source={senha} style={{ marginRight: '5%' }} />
        <TextInput secureTextEntry={true} onChangeText={(text) => setSenha(text)} placeholder='senha...' style={{ color: '#A1A1A1', fontSize: 20 }}></TextInput>
      </View>
      <View style={styles.botoes}>
        <TouchableOpacity onPress={() => { cadastra() }}>
          <Text style={styles.botao}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ textAlign: 'center', marginBottom: 70 }}>Possui cadastro?</Text>
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
  textInput: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#D9D9D9',
    paddingHorizontal: 100,
    color: '#fff',
  },
  botao: {
    color: '#fff',
    backgroundColor: '#AB41DB',
    fontSize: 20,
    padding: 10,
    paddingHorizontal: 100,
    marginBottom: 15,
    borderRadius: 5
  },
});