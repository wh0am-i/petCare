import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import rostopet from '../../assets/pet.jpg';

export default function CarteirinhaPet() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>CarteirinhaPet</Text>
      <Image source={rostopet} style={{width: 300, height: 250, marginTop: 100, borderRadius: 10, marginLeft: 50}} />
      
      <Text style={{backgroundColor:'#A3D4FF' }}> Idade</Text>
      <Text style={{backgroundColor:'#A3D4FF' }}> Raça</Text>
      <Text style={{backgroundColor:'#A3D4FF' }}> Vacinas</Text>
      <Text style={{backgroundColor:'#A3D4FF' }}> Vacinas</Text>





    </View>
  )
}

const styles =StyleSheet.create({
  
  container:{
    fontsize: 30
  },
  h1:{
    fontSize: 40,
    color: '#6E23B4',
    fontStyle: 'italic',
    marginTop: 100
  }
})