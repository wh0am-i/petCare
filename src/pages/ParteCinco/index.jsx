import { View, Text, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';
import hacker from '../../../assets/hacker.jpg'

export default function ParteUm({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>5!</Text>
      <Text style={{fontSize:20}}>prometo não ir para a deep web :D</Text>
      <Animatable.Image animation='wobble' source={hacker} style={{width:320, height:320}}/>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text style={{ marginTop: 50, fontSize: 20, backgroundColor: 'red', color: '#FFF', padding: 10, borderRadius: 10 }}>voltar para o começo xD!!1!</Text></TouchableOpacity>
    </View>  
  );
}