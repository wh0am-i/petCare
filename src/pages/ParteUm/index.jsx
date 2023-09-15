import { View, Text, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';
import rtx from '../../../assets/rtxlol.png';

export default function ParteUm({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize:40, textAlign: 'center', fontWeight: 'bold'}}>Motivo 1!</Text>
            <Text style={{fontSize:20}}>Me ajuda com os estudos (principalmente a rtx 4090 asus 💀)</Text>
            <Animatable.Image source={rtx} style={{width: 400, height: 400}}/>
            <TouchableOpacity onPress={() => navigation.navigate('ParteDois')}><Text style={{ marginTop: 50, fontSize: 20, backgroundColor: 'red', color: '#FFF', padding: 10, borderRadius: 10 }}>Motivo dois!!1!</Text></TouchableOpacity>
    </View>  
  );
}