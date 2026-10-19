import React from 'react';
import { View, Text, Image, Button, StyleSheet, Linking, Dimensions } from 'react-native';

const IntroScreen = ({ navigation }) => {
  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      {/* Left Column */}
      <View style={styles.leftColumn}>
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/Eduardoluizfrancelianoda/GCW/main/Facefood/imgs/milharal.png' }}
          style={styles.bgImage}
          resizeMode="cover"
        />
        {/* Note: GIFs might not work perfectly in React Native */}
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/Eduardoluizfrancelianoda/GCW/main/Facefood/gifs/vaca%20olhano%20pra%20cima.gif' }}
          style={styles.cow}
          resizeMode="cover"
        />
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/Eduardoluizfrancelianoda/GCW/main/Facefood/gifs/vaca%20de%20boa.gif' }}
          style={styles.cow2}
          resizeMode="cover"
        />
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/Eduardoluizfrancelianoda/GCW/main/Facefood/gifs/ufo.gif' }}
          style={styles.ufo}
          resizeMode="cover"
        />
      </View>

      {/* Right Column */}
      <View style={styles.rightColumn}>
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/Eduardoluizfrancelianoda/GCW/main/Facefood/imgs/restaurante%20massa.jpg' }}
          style={styles.bgImage}
          resizeMode="cover"
        />

        <View style={styles.content}>
          <Text style={styles.logo}>Facefood.com</Text>
          <View style={styles.separator} />
          <Text style={styles.description}>
            rede social de comidas e receitas, um espaço criado para quem ama cozinhar, experimentar novos
            sabores e compartilhar suas criações com o mundo. Aqui você pode publicar suas próprias receitas, descobrir novas ideias e encontrar inspiração para o que
            preparar hoje.
          </Text>

          <Button
            title="entrar →"
            color="#DB0004"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
  },
  leftColumn: {
    flex: 1,
    position: 'relative',
  },
  rightColumn: {
    flex: 1,
    position: 'relative',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  cow: {
    position: 'absolute',
    bottom: '40%',
    left: '50%',
    width: 180,
    transform: [{ translateX: 30 }],
  },
  cow2: {
    position: 'absolute',
    bottom: '30%',
    left: '50%',
    width: 170,
    transform: [{ translateX: -100 }],
  },
  ufo: {
    position: 'absolute',
    top: '5%',
    left: '50%',
    width: 200,
    transform: [{ translateX: -70 }],
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(219, 0, 4, 0.7)', // Semi-transparent red overlay
  },
  logo: {
    fontFamily: 'Inspiration',
    fontSize: 48,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 6,
    textAlign: 'center',
    marginBottom: 20,
  },
  separator: {
    width: '80%',
    height: 2,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: 300,
  },
});

export default IntroScreen;