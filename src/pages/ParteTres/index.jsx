import { View, Text, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';
import kid from '../../../assets/kid.jpg';

export default function ParteUm({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Movito Three!</Text>
      <Text style={{fontSize:20}}>vou ser responsavel e nunca jogar as 4 da manhã em dia de semana :)</Text>
      <Animatable.Image animation='fadeIn' source={kid} style={{width:320, height:320}}/>
      <TouchableOpacity onPress={() => navigation.navigate('ParteQuatro')}><Text style={{ marginTop: 50, fontSize: 20, backgroundColor: 'red', color: '#FFF', padding: 10, borderRadius: 10 }}>Motivo quatro!!1!</Text></TouchableOpacity>
    </View>  
  );
}