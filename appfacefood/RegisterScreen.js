import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, Alert } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    // Reset error
    setError(null);

    // Basic validation
    if (!username.trim()) {
      setError('Por favor, digite seu nome de usuário');
      return;
    }

    if (!password.trim()) {
      setError('Por favor, digite sua senha');
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    // Note: In a real app, you would handle image upload here
    // For this demo, we'll proceed with or without an image

    // Show loading state
    setLoading(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // In a real app, you would send data to backend here
      // For this demo, we'll simulate successful registration
      setLoading(false);
      setError('Conta criada com sucesso! Redirecionando para login...');
      // Navigate to login after successful registration
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);
    } catch (err) {
      setLoading(false);
      setError('Erro ao tentar criar conta');
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
          <Text style={styles.registerTitle}>Crie sua Conta:</Text>
          <Text style={styles.registerSubtitle}>Preencha os campos abaixo para criar sua conta e acessar o sistema.</Text>

          {error && (
            <View style={[
              styles.messageBox,
              error.includes('sucesso') ? styles.successMessage : styles.errorMessage
            ]}>
              <Text style={styles.messageText}>{error}</Text>
            </View>
          )}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Foto de perfil:</Text>
            <View style={styles.imagePicker}>
              {profileImage ? (
                <Image
                  source={{ uri: profileImage }}
                  style={styles.previewImage}
                />
              ) : (
                <View style={styles.placeholderImage}>
                  <Text style={styles.placeholderText}>Selecionar Foto</Text>
                </View>
              )}
              <Button
                title="Escolher Foto"
                onPress={() => {
                  // In a real app, you would use expo-image-picker or similar
                  Alert.alert(
                    'Funcionalidade não implementada',
                    'Em um app real, você usaria expo-image-picker para selecionar uma foto da galeria ou câmera.'
                  );
                }}
              />
            </View>
          </View>

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
            title="Cadastrar"
            onPress={handleRegister}
            color="#DB0004"
            loading={loading}
          />

          <View style={styles.linkContainer}>
            <Button
              title="Voltar"
              onPress={() => navigation.goBack()}
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
  registerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  registerSubtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    maxWidth: 300,
  },
  messageBox: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '80%',
  },
  successMessage: {
    backgroundColor: 'rgba(0, 255, 0, 0.8)',
  },
  errorMessage: {
    backgroundColor: 'rgba(255, 0, 0, 0.8)',
  },
  messageText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 15,
    width: '80%',
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  imagePicker: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  placeholderImage: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
  previewImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
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

export default RegisterScreen;