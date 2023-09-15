import { View, Text, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';
import maos from '../../../assets/maos.webp';

export default function ParteUm({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Four!</Text>
      <Text style={{fontSize:20}}>vou conseguir uma namorada com o setup (prometo!1!)</Text>
      <Animatable.Image animation='fadeInUpBig' source={maos} style={{width:320, height:320}}/>
      <TouchableOpacity onPress={() => navigation.navigate('ParteCinco')}><Text style={{ marginTop: 50, fontSize: 20, backgroundColor: 'red', color: '#FFF', padding: 10, borderRadius: 10 }}>Motivo cinco!!1!</Text></TouchableOpacity>
    </View>  
  );
}