import { SafeAreaView, View, StyleSheet, Text, FlatList, Image } from 'react-native';

export default function Guia1 () {
  return (
    <SafeAreaView style={estilo.container}>
      <Text style={estilo.header}>Guias</Text>
      <FlatList
        data={Guia}
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

const Guia = [
  {
    uid: '1',
    titulo: 'Guia de Exu',
    foto: require('../assets/guia/exu.png'),
    descricao: 'Exu é o mensageiro entre os mundos. Ele traz abertura e proteção nos caminhos.'
  },
  {
    uid: '2',
    titulo: 'Guia de Iemanjá',
    foto: require('../assets/guia/iemanja.png'),
    descricao: 'Iemanjá é a orixá das águas, protetora das famílias e da maternidade.'
  },
    {
    uid: '3',
    titulo: 'Guia de Ogum',
    foto: require('../assets/guia/ogum.png'),
    descricao: 'Um compacto elétrico com excelente autonomia e tecnologia embarcada.'
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