import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import pet from '../../assets/pet.png';

export default function CarteirinhaPet({navigation}){
  return(
    
    <View style={styles.container}>
      <View style={styles.textInput}>
      <Text style={{backgroundColor: '#D6D8D7', marginTop: 70, borderRadius: 20, fontSize:15, color: '#635F5F', textAlign: 'left', marginLeft:40, marginHorizontal: 60, height: 30, paddingTop: 4, paddingBottom:4}}>    Pesquisar produto</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ProdutosVenda')}><Text style={{ textAlign: 'center', marginTop: 10, fontSize: 13 , color:'#A73DFF', fontStyle: 'italic'}}>Ir para Produtos</Text></TouchableOpacity>
    </View>
    
    <Image source={pet} style={{width:270, height:170, marginTop: 40, marginLeft: 70}}></Image>
    <Text id={Text.h1} style={{color:'#AB41DB', fontSize:20, marginTop: 35, borderRadius: 10, borderColor: '#A73DFF', borderWidth: 1, textAlign: 'center', marginHorizontal: 110, borderColor: '#B7BBB9',paddingTop: 8, paddingBottom: 8, paddingLeft: 4, paddingRight: 4}} >Carteirinha do Pet</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Veterinario')}><Text style={{ textAlign: 'center', marginTop: 8, fontSize: 13 , color:'#A73DFF',  fontStyle: 'italic'}}>Ir para Veterinários</Text></TouchableOpacity>
  
    <Text id={Text.h2} style={{fontSize: 18, marginTop: 40, marginLeft: 40, color:'#7D7A7A' , borderBottomWidth: 1.5, borderColor: '#B8B8B8', marginHorizontal: 55}}>Nome</Text>
    <Text id={Text.h2} style={{ fontSize: 18, marginLeft: 40, marginTop:12  ,color:'#7D7A7A' , borderBottomWidth: 1.5, borderColor: '#B8B8B8', marginHorizontal: 55}}>Tipo de Animal</Text>
    <Text id={Text.h2} style={{fontSize: 18, marginLeft: 40, marginTop:12, color:'#7D7A7A', borderBottomWidth: 1.5, borderColor: '#B8B8B8', marginHorizontal: 55}}>Raça</Text>
    <Text id={Text.h2} style={{fontSize: 18, marginLeft: 40, marginTop:12, color:'#7D7A7A', borderBottomWidth: 1.5, borderColor: '#B8B8B8', marginHorizontal: 55}}>Cor</Text>
    <Text id={Text.h2} style={{fontSize: 18, marginLeft: 40, marginTop:12, color:'#7D7A7A', borderBottomWidth: 1.5, borderColor: '#B8B8B8', marginHorizontal: 55}}>Data de nascimento</Text>
    <Text id={Text.h2} style={{fontSize: 18, marginLeft: 40, marginTop:12, color:'#7D7A7A', borderBottomWidth: 1.5, borderColor: '#B8B8B8', marginHorizontal: 55}}>Sexo</Text>
    <Text id={Text.h2} style={{fontSize: 18, marginLeft: 40, marginTop:12, color:'#7D7A7A', borderBottomWidth: 1.5, borderColor: '#B8B8B8', marginHorizontal: 55}}>Vacinas</Text> 
    <TouchableOpacity onPress={() => navigation.navigate('CadastraPet')}style={{ alignItems: 'center', marginTop: 30, fontSize: 20 }}><Text>Precisa cadastrar Pet?</Text></TouchableOpacity>

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
