import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';

export default function CadastraPet({ navigation }) {
  const [listaPet, setListaPet] = useState([]);
  const [nome, setNome] = useState('');
  const [animal, setAnimal] = useState('');
  const [idade, setIdade] = useState('');
  const [raca, setRaca] = useState('');

  const handleCadastroPet = () => {
    if (nome && animal && idade && raca) {
      const novoPet = { nome, animal, idade, raca };
      setListaPet([...listaPet, novoPet]);
      // Limpar os campos após o cadastro
      setNome('');
      setAnimal('');
      setIdade('');
      setRaca('');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={{ flex: 1, paddingTop: 200, marginHorizontal: 40 }}>
      <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', marginBottom: 40 }}>Cadastre seu pet!</Text>
      <TextInput
        placeholder={'Nome...'}
        style={styles.inputs}
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        placeholder={'Animal...'}
        style={styles.inputs}
        value={animal}
        onChangeText={(text) => setAnimal(text)}
      />
      <TextInput
        placeholder={'Idade...'}
        style={styles.inputs}
        value={idade}
        onChangeText={(text) => setIdade(text)}
      />
      <TextInput
        placeholder={'Raça...'}
        style={styles.inputs}
        value={raca}
        onChangeText={(text) => setRaca(text)}
      />
      <TouchableOpacity style={styles.botao} onPress={handleCadastroPet}>
        <Text style={{ color: '#FFF', fontSize: 18 }}>Cadastrar pet</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>Lista de Pets:</Text>
      <FlatList
        data={listaPet}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.petItem}>
            <Text><Text style={styles.label}>Nome: </Text>{item.nome}</Text>
            <Text><Text style={styles.label}>Animal: </Text>{item.animal}</Text>
            <Text><Text style={styles.label}>Raça: </Text>{item.raca}</Text>
            <Text><Text style={styles.label}>Idade: </Text>{item.idade}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs: {
    borderBottomWidth: 2,
    borderBottomColor: '#A1A1A1',
    marginBottom: 18,
    fontSize: 20,
  },
  botao: {
    backgroundColor: '#6E23B4',
    fontSize: 20,
    padding: 10,
    paddingHorizontal: 100,
    borderRadiusBottom: 5,
    marginTop: 20,
  },
  label: {
    fontWeight: 'bold',
  },
  petItem: {
    backgroundColor: '#EDEDED',
    padding: 10,
    marginBottom: 10,
  },
});