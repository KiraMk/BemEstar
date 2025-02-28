import { SafeAreaView, View, StyleSheet, Text, FlatList, Image } from 'react-native';
 
export default function Incenso1() {
  return (
    <SafeAreaView style={estilo.container}>
      <Text style={estilo.header}>Incenso</Text>
      <FlatList
        data={Incenso}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <View style={estilo.containerFlat}>
            <Text style={estilo.tituloBemEstar}>{item.titulo}</Text>
            <Image style={estilo.foto} source={item.foto} />
            <Text style={estilo.descricaoBemEstar}>{item.descricao}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
 
const Incenso = [
  {
    uid: '1',
    titulo: 'Incenso de Lavanda',
    foto: require('../assets/incenso/incensoLavanda.png'),
    descricao: 'Relaxe com a fragrância calmante da lavanda.'
  },
  {
    uid: '2',
    titulo: 'Incenso de Sândalo',
    foto: require('../assets/incenso/incensoSandalo.png'),
    descricao: 'Fragrância amadeirada que purifica o ambiente.'
  },
    {
    uid: '3',
    titulo: 'Incenso de Canela',
    foto: require('../assets/incenso/incensoCanela.png'),
    descricao: 'Aroma doce e picante que ativa a energia do ambiente.'
  },
];
 
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  containerFlat: {
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  tituloBemEstar: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  foto: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginVertical: 10,
  },
  descricaoBemEstar: {
    fontSize: 14,
    color: '#555',
  },
});