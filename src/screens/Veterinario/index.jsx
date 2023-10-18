import { View, Text , StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import medicoum from '../../assets/medicoum.png'
import medicadois from '../../assets/doutoradois.png'
import doutortres from '../../assets/doutortres.png'
import doutoraquatro from '../../assets/doutoraquatro.png'



export default function Veterinario({navigation}){
  return(
    <View style={styles.container}>
      <View style={styles.textInput}>
      <Text style={{backgroundColor: '#D6D8D7', marginTop: 70, borderRadius: 20, fontSize:15, color: '#635F5F', textAlign: 'left', marginLeft:40, marginHorizontal: 60, height: 30, paddingTop: 4, paddingBottom:4}}>     Pesquisar veterinário</Text>

   <Text style={{textAlign:'center', marginTop:40, color:'#AB41DB', fontSize: 20}}> Veterinários Profissionais</Text>
      <Image source={medicoum} style={{width:140, height:110, marginTop: 55, marginLeft: 30}}></Image>
      <Text style={{textAlign:'center', width:140, height:100, marginLeft:30, marginTop:15}}>Doutor João Kleber Cardoso</Text>
      <Text style={{textAlign:'center', width:90, height:40, marginLeft:50, marginTop:-35, fontWeight:'bold', color:'#AB41DB', borderColor:'#DE94FF', borderWidth:1, borderRadius:15, paddingTop:8}}>Ver mais</Text>

      <Image source={medicadois} style={{width:140, height:160, marginTop:15, marginLeft: 30}}></Image>
      <Text style={{textAlign:'center', width:140, height:100, marginLeft:30, marginTop:15}}> Doutora Clarissa Esperanto dos Santos</Text>
      <Text style={{textAlign:'center', width:90, height:40, marginLeft:50, marginTop:-35, fontWeight:'bold', color:'#AB41DB', borderColor:'#DE94FF', borderWidth:1, borderRadius:15, paddingTop:8}}>Ver mais</Text>


      
      <Image source={doutortres} style={{width:140, height:90, marginTop: -510, marginLeft: 230}}></Image>
      <Text style={{textAlign:'center', width:140, height:100, marginLeft:230, marginTop:20}}>Doutor José Severino Rocha</Text>
      <Text style={{textAlign:'center', width:90, height:40, marginLeft:250, marginTop:-35, fontWeight:'bold', color:'#AB41DB', borderColor:'#DE94FF', borderWidth:1, borderRadius:15, paddingTop:8}}>Ver mais</Text>


      
      <Image source={doutoraquatro} style={{width:150, height:160, marginTop: 20, marginLeft: 230}}></Image>
      <Text style={{textAlign:'center', width:140, height:100, marginLeft:230, marginTop:10}}> Doutora Soraya Menezes </Text>
      <Text style={{textAlign:'center', width:90, height:40, marginLeft:260, marginTop:-35, fontWeight:'bold', color:'#AB41DB', borderColor:'#DE94FF', borderWidth:1, borderRadius:15, paddingTop:8}}>Ver mais</Text>


    
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