import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MainAppScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem-vindo ao Facefood!</Text>
      <Text style={styles.infoText}>Você está logado com sucesso.</Text>
      <Button
        title="Logout"
        onPress={() => navigation.navigate('Login')}
        color="#DB0004"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DB0004',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
});

export default MainAppScreen;