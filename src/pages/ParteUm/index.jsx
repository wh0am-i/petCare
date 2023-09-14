import { View, Text, TouchableOpacity } from 'react-native'

export default function ParteUm({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text style={{ marginTop: 50, fontSize: 50 }}>Trocar de janela</Text></TouchableOpacity>
    </View>  
  );
}