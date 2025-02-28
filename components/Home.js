import { SafeAreaView, StyleSheet, Text, ImageBackground } from 'react-native';

export default function Home() {
  return (
    <ImageBackground 
      source={require('../assets/ceu.png')}
      style={estilo.container}
    >
      <SafeAreaView style={estilo.innerContainer}>
        <Text style={estilo.titulo}>Bem Estar</Text>
        <Text style={estilo.subtitulo}>Fique Bem</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    resizeMode: 'cover',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 20,
    borderRadius: 15, 
    margin: 20,
  },
  titulo: {
    fontSize: 36, 
    fontWeight: 'bold', 
    color: '#fff', 
    marginBottom: 10, 
  },
  subtitulo: {
    fontSize: 24, 
    color: '#fff', 
    fontStyle: 'italic', 
  },
});
