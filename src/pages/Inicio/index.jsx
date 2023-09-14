import { Text, View, TouchableOpacity } from "react-native";

export default function Inicio({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}><Text style={{ marginTop: 50, fontSize: 50 }}>Trocar de janela</Text></TouchableOpacity>
    </View>
  );
}
