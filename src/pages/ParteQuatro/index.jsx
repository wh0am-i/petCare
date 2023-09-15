import { View, Text, TouchableOpacity } from 'react-native'

export default function ParteUm({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Parte Quatro</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ParteCinco')}><Text style={{ marginTop: 50, fontSize: 50 }}>Trocar de janela</Text></TouchableOpacity>
    </View>  
  );
}