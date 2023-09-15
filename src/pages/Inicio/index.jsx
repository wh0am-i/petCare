import { Text, View, TouchableOpacity, Image } from "react-native";
import pcGamer from '../../../assets/pcgamer.webp';
import * as Animatable from 'react-native-animatable';

export default function Inicio({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Animatable.Image animation='bounceInUp' source={pcGamer} style={{width: 440, height: 440}}/>
      <Text>(Aplicativo para meus pais)</Text>
      <Text style={{fontSize:40, textAlign: 'center', fontWeight: 'bold'}}>5 Motivos para eu ter um pc gamer!!11!1!1!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ParteUm')}><Text style={{ marginTop: 50, fontSize: 20, backgroundColor: 'red', color: '#FFF', padding: 10, borderRadius: 10 }}>Clique para descobrir!!1!</Text></TouchableOpacity>
    </View>
  );
}
