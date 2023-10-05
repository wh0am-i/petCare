import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native'
import logo from '../../assets/logo.png';
import usuario from '../../assets/usuario.png';
import email from '../../assets/email.png';
import senha from '../../assets/senha.png';

export default function Login({ navigation }) {
  const inputs = [
    {id: 1, imagem: email, placeholder: ' Email...'},
    {id: 2, imagem: senha, placeholder: ' Senha...'}
  ]

  return (
    <View style={styles.container}>
      <Image source={logo} style={{width: 350, height: 350, marginTop: 50}} />
      <Text style={{fontSize: 30, marginBottom: 40, }}>Bem-vindo(a) de volta!</Text>
        <FlatList
          data={inputs}
          renderItem={({item}) => (
            <View style={styles.textInput}>
              <Image source={item.imagem}/>
              <TextInput placeholder={item.placeholder} style={{color: '#A1A1A1', fontSize: 20}}/>
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <TouchableOpacity onPress={() => navigation.navigate('CarteirinhaPet')}>
            <Text style={styles.botao}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginBottom: 120, marginTop: 20 }} onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles}>Não possui cadastro?</Text>
        </TouchableOpacity>
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
    borderRadius: 5
  },
});