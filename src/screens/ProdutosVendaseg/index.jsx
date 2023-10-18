import { View, Text , StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import brinquedo from '../../assets/brinquedo.png'
import roupinha from '../../assets/roupinha.png'
import comedouro from '../../assets/comedouro.png'
import caixa from '../../assets/caixa.png'
import leftarrow from '../../assets/left-arrow.png'


export default function ProdutosVendaseg({navigation}){
  return(
    <View style={styles.container}>
      <View style={styles.textInput}>
      <Text style={{backgroundColor: '#D6D8D7', marginTop: 70, borderRadius: 20, fontSize:15, color: '#635F5F', textAlign: 'left', marginLeft:40, marginHorizontal: 60, height: 30, paddingTop: 4, paddingBottom:4}}>      Pesquisar produto</Text>

      <TouchableOpacity onPress={() => navigation.navigate('ProdutosVenda')} ><Image source={leftarrow} style={{width:45, height:45, marginLeft:40, marginTop: 20}}></Image></TouchableOpacity>
    
      <Image source={brinquedo} style={{width:140, height:110, marginTop: 55, marginLeft: 30}}></Image>
      <Text style={{textAlign:'center', width:140, height:100, marginLeft:30, marginTop:15}}>Brinquedo Mordedor para Cachorro </Text>
      <Text style={{textAlign:'center', width:140, height:100, marginLeft:30, marginTop:-15, fontWeight:'bold'}}>R$ 9,00</Text>

      <Image source={roupinha} style={{width:140, height:160, marginTop: -35, marginLeft: 30}}></Image>
      <Text style={{textAlign:'center', width:140, height:100, marginLeft:30, marginTop:15}}> Roupa T-shirt Hoodie Pet</Text>
      <Text style={{textAlign:'center', width:140, height:100, marginLeft: 30, marginTop:-45, fontWeight:'bold'}}>R$ 30,60</Text>

      
      <Image source={comedouro} style={{width:140, height:160, marginTop: -650, marginLeft: 230}}></Image>
      <Text style={{textAlign:'center', width:140, height:100, marginLeft:230, marginTop:15}}>Comedouro Duplo Pet</Text>
      <Text style={{textAlign:'center', width:140, height:100, marginLeft: 230, marginTop:-17, fontWeight:'bold'}}>R$ 12,90</Text>

      
      <Image source={caixa} style={{width:150, height:160, marginTop: -60, marginLeft: 230}}></Image>
      <Text style={{textAlign:'center', width:140, height:100, marginLeft:230, marginTop:35}}> Caixa de Transporte N°02 Home Pet Next </Text>
      <Text style={{textAlign:'center', width:140, height:100, marginLeft: 230, marginTop:-45, fontWeight:'bold'}}>R$ 303, 48</Text>

    
    </View>
    </View>
    );

    }

    const styles= StyleSheet.create({
      container:{
        borderRadius: 15,
        borderColor: '#A73DFF'
      }
    })