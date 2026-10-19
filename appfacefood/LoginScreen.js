import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, Linking, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // Reset error
    setError(null);

    // Basic validation
    if (username.trim() === '') {
      setError('Por favor, digite seu nome de usuário');
      return;
    }

    if (password.trim() === '') {
      setError('Por favor, digite sua senha');
      return;
    }

    // Show loading state
    setLoading(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // In a real app, you would validate credentials against a backend
      // For this demo, we'll accept any non-empty credentials
      if (username.trim() !== '' && password.trim() !== '') {
        // Navigate to main app
        navigation.navigate('MainApp');
      } else {
        setError('Credenciais inválidas');
      }
    } catch (err) {
      setError('Erro ao tentar fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Left Column */}
      <View style={styles.leftColumn}>
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/Eduardoluizfrancelianoda/GCW/main/Facefood/imgs/milharal.PNG' }}
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
          <Text style={styles.loginTitle}>Faça seu Login aqui:</Text>

          {error && (
            <View style={styles.errorMessage}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite o seu nome de usuário"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite a sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <Button
            title="Entrar"
            onPress={handleLogin}
            color="#DB0004"
            loading={loading}
          />

          <View style={styles.linkContainer}>
            <Button
              title="Criar Conta"
              onPress={() => navigation.navigate('Register')}
              color="#DB0004"
            />
          </View>
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
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  errorMessage: {
    backgroundColor: 'rgba(255, 0, 0, 0.8)',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '80%',
  },
  errorText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 15,
    width: '80%',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  linkContainer: {
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
});

export default LoginScreen;