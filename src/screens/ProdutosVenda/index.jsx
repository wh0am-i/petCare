import { View, Text , StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import racao from '../../assets/racao.png'
import coleira from '../../assets/coleira.png'
import caminha from '../../assets/caminha.png'
import petiscos from '../../assets/petiscos.png'
import arrow from '../../assets/arrow-right.png'


export default function ProdutosVenda({navigation}){
  return(
    <View style={styles.container}>
      <View style={styles.textInput}>
      <Text style={{backgroundColor: '#D6D8D7', marginTop: 70, borderRadius: 20, fontSize:15, color: '#635F5F', textAlign: 'left', marginLeft:40, marginHorizontal: 60, height: 30, paddingTop: 4, paddingBottom:4}}>     Pesquisar produto</Text>

      <TouchableOpacity onPress={() => navigation.navigate('ProdutosVendaseg')} ><Image source={arrow} style={{width:45, height:45, marginLeft:310, marginTop: 20}}></Image></TouchableOpacity>
    
      <Image source={racao} style={{width:140, height:160, marginTop: 50, marginLeft: 30}}></Image>
      <Text style={{textAlign:'center', width:140, height:100, marginLeft:30, marginTop:15}}>Ração Premier Nattu Cães Adultos Raças Pequenas Mandioca 2,5Kg </Text>
      <Text style={{textAlign:'center', width:140, height:100, marginLeft:30, marginTop:-15, fontWeight:'bold'}}>R$ 68,90</Text>

      <Image source={petiscos} style={{width:140, height:160, marginTop: -35, marginLeft: 30}}></Image>
      <Text style={{textAlign:'center', width:140, height:100, marginLeft:30, marginTop:15}}> Petisco Premier Pet Cookie</Text>
      <Text style={{textAlign:'center', width:140, height:100, marginLeft: 30, marginTop:-45, fontWeight:'bold'}}>R$ 16,40</Text>

      
      <Image source={coleira} style={{width:140, height:160, marginTop: -650, marginLeft: 230}}></Image>
      <Text style={{textAlign:'center', width:140, height:100, marginLeft:230, marginTop:15}}>Coleira SPFC Para Cachorro</Text>
      <Text style={{textAlign:'center', width:140, height:100, marginLeft: 230, marginTop:-17, fontWeight:'bold'}}>R$ 109,99</Text>

      
      <Image source={caminha} style={{width:150, height:160, marginTop: -60, marginLeft: 230}}></Image>
      <Text style={{textAlign:'center', width:140, height:100, marginLeft:230, marginTop:35}}> Caminha Comfort Pet</Text>
      <Text style={{textAlign:'center', width:140, height:100, marginLeft: 230, marginTop:-45, fontWeight:'bold'}}>R$ 391,90</Text>

    
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