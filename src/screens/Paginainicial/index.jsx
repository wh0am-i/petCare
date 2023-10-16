import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native'
import logo from '../../assets/logo.png';
import email from '../../assets/email.png';
import senha from '../../assets/senha.png';

export default function PaginaInicial({ navigation }) {
  const inputs = [
    {id: 1, imagem: email, placeholder: ' Email...'},
    {id: 2, imagem: senha, placeholder: ' Senha...'}
  ]

  return (
    <View style={styles.containerBotoes}>
      <Image source={logo} style={{width: 425, height: 425, marginTop: 50}} />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.botaoDois}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.botaoUm}>Cadastrar</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  containerBotoes: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
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
  botaoUm: { 
    color: '#fff',
    backgroundColor: '#f7f136',
    fontSize: 25,
    padding: 8,
    paddingHorizontal: 90,
    marginBottom: 120,
    borderRadius: 5
  },
  botaoDois: { 
    color: '#fff',
    backgroundColor: '#b136f7',
    fontSize: 25,
    padding: 8,
    paddingHorizontal: 111,
    marginBottom: 20,
    borderRadius: 5
  },
});

