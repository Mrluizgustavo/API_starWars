import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';

const Imperio = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        const jsonData = await response.json();
        setData(jsonData.results); // Extraia 'results' da resposta
      } catch (error) {
        console.error('Erro ao buscar os dados da API', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    const meuDicionario = {
      'R2-D2': require('../img/r2d2.jpg'),
      'C-3PO': require('../img/C-3PO.jpg'),
    };

    const imageSource = meuDicionario[item.name];

    // Verificar se o personagem está no dicionário antes de renderizar
    if (imageSource) {
      return (
        <View style={styles.item}>
          <Image
            source={imageSource}
            style={{ width: 350, height: 350, margin: 5, borderRadius: 30 }}
          />
          <Text style={styles.text}>Nome: {item.name}</Text>
          <Text style={styles.text}>Altura: {item.height} cm</Text>
          <Text style={styles.text}>Peso: {item.mass} kg</Text>
          <Text style={styles.text}>Gênero: {item.gender}</Text>
        </View>
      );
    } else {
      // Se o personagem não está no dicionário, retornar null para não renderizar nada
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.box_imperio}>
          <View style={{ flex: 1 }}>
            <Text style={styles.text}>Drois</Text>
          </View>
          <View style={styles.text_imperio}>
            <Text style={styles.text_imperio}>
              Os robôs em Star Wars, chamados de "droids", são robôs
              multifuncionais com papéis variados, desde navegação e comunicação
              até combate. São personagens essenciais na saga, enriquecendo o
              universo de Star Wars com sua diversidade e importância.
            </Text>
          </View>
        </View>

        <View style={styles.box_person}>
          <Text style={styles.text}>Personagens:</Text>
          <View>
            <FlatList
              data={data ? data : []} // Ajuste para usar a propriedade 'results'
              renderItem={renderItem}
              keyExtractor={(item) => item.name}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Imperio;

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    display: 'flex',
    minHeight: '100%',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'black',
  },
  box_imperio: {
    display: 'flex',
    backgroundColor: 'gray',
    borderRadius: 30,
    marginBottom: 20,
  },

  text_imperio: {
    flex: 3,
    fontSize: 25,
    color: 'black',
    marginHorizontal: 5,
    marginBottom: 10,
    fontWeight: '400',
  },
  box_person: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: 30,
    marginBottom: 40,
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: '600',
    margin: 20,
  },
});
