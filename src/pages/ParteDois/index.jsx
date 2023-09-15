import { View, Text, TouchableOpacity, Image } from 'react-native'
import nerd from '../../../assets/nerd.jpeg'
import * as Animatable from 'react-native-animatable';

export default function ParteUm({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Motivo Dos!</Text>
      <Text style={{fontSize:20}}>o setup vai curar meu tdah (confia)</Text>
      <Animatable.Image animation='bounceInDown' source={nerd} style={{width:320, height:320}}/>
      <TouchableOpacity onPress={() => navigation.navigate('ParteTres')}><Text style={{ marginTop: 50, fontSize: 20, backgroundColor: 'red', color: '#FFF', padding: 10, borderRadius: 10 }}>Motivo três!!1!</Text></TouchableOpacity>
    </View>  
  );
}