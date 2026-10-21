import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacao, setConfirmacao] = useState('');
  const [erro, setErro] = useState('');

  const criarConta = () => {
    if (!nome || !email || !senha || !confirmacao) {
      setErro('Preencha todos os campos.');
      return;
    }
    if (senha !== confirmacao) {
      setErro('As senhas não conferem.');
      return;
    }

    // sem banco de dados: só leva os dados pra tela de login
    navigation.navigate('Login', { nome, email, senha });
  };

  return (
    <ScrollView
      style={styles.fundo}
      contentContainerStyle={styles.conteudo}
      keyboardShouldPersistTaps="handled"
    >
      <StatusBar style="dark" />
      <Text style={styles.emoji}>🍔</Text>
      <Text style={styles.logo}>Facefood</Text>
      <Text style={styles.subtitulo}>Crie sua conta</Text>

      <TextInput
        style={styles.campo}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.campo}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.campo}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TextInput
        style={styles.campo}
        placeholder="Confirmar senha"
        value={confirmacao}
        onChangeText={setConfirmacao}
        secureTextEntry
      />

      {erro !== '' && <Text style={styles.erro}>{erro}</Text>}

      <TouchableOpacity style={styles.botao} onPress={criarConta}>
        <Text style={styles.botaoTexto}>Criar conta</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Já tem conta? Voltar ao login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#FFF7EC',
  },
  conteudo: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  emoji: {
    fontSize: 56,
    textAlign: 'center',
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#DB0004',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 15,
    color: '#8D6E63',
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 28,
  },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#EBDCC8',
    borderRadius: 12,
    height: 50,
    paddingHorizontal: 14,
    marginBottom: 12,
    fontSize: 15,
  },
  erro: {
    color: '#C62828',
    marginBottom: 12,
    fontSize: 14,
  },
  botao: {
    backgroundColor: '#DB0004',
    borderRadius: 12,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: '#DB0004',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 16,
  },
});
