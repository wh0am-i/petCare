import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import pet from '../../assets/pet.jpg';

export default function CarteirinhaPet({navigation}){
  return(
    <View style={styles.container}>
      <View style={styles.textInput}>
      <Text style={{backgroundColor: '#D6D8D7', marginTop: 70, borderRadius: 20, fontSize:15, textAlign: 'center', marginHorizontal: 60, height: 30}}>Pesquisar produto</Text>
    </View>
    
    <Image source={pet} style={{width:150, height:150, marginTop: 90,marginLeft: 120}}></Image>
    <Text id={Text.h1} style={{color:'#AB41DB', fontSize:30, marginTop: 40, borderRadius: 10, borderColor: '#A73DFF', borderWidth: 1, textAlign: 'center', marginHorizontal: 30}} >Carteirinha do Pet</Text>
    <Text id={Text.h2} style={{fontSize: 18, marginTop: 40, marginLeft: 40, color:'#7D7A7A' }}>Nome</Text>
    <Text id={Text.h2} style={{ fontSize: 18, marginLeft: 40, marginTop:5,color:'#7D7A7A' }}>Tipo de Animal</Text>
    <Text id={Text.h2} style={{fontSize: 18, marginLeft: 40, marginTop:5, color:'#7D7A7A'}}>Raça</Text>
    <Text id={Text.h2} style={{fontSize: 18, marginLeft: 40, marginTop:5, color:'#7D7A7A'}}>Cor</Text>
    <Text id={Text.h2} style={{fontSize: 18, marginLeft: 40, marginTop:5, color:'#7D7A7A'}}>Data de nascimento</Text>
    <Text id={Text.h2} style={{fontSize: 18, marginLeft: 40, marginTop:5, color:'#7D7A7A'}}>Sexo</Text>
    <Text id={Text.h2} style={{fontSize: 18, marginLeft: 40, marginTop:5, color:'#7D7A7A'}}>Vacinas</Text>
    <TouchableOpacity style={{ alignItems: 'center', marginTop: 30 }}><Text style={{ fontSize: 30, backgroundColor: '#6E23B4', padding: 2 }}>Precisa cadastrar Pet?</Text></TouchableOpacity>
    </View>
  );
}

const styles= StyleSheet.create({
  container:{
    borderRadius: 15,
    borderColor: '#A73DFF'
  }
  *{
    backgroundColor: '#fff'
  }
})
