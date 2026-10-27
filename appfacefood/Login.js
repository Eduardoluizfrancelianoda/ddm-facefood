import { useState, useEffect } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// conta de teste pra conseguir entrar sem precisar cadastrar
const EMAIL_TESTE = 'facefood@app.com';
const SENHA_TESTE = '123456';

export default function Login({ navigation, route }) {
  const [email, setEmail] = useState(route.params?.email ?? '');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  // quando volta do cadastro, preenche o e-mail da conta nova
  useEffect(() => {
    if (route.params?.email) {
      setEmail(route.params.email);
      setSenha('');
      setErro('');
    }
  }, [route.params?.email]);

  const entrar = () => {
    if (!email || !senha) {
      setErro('Preencha o e-mail e a senha.');
      return;
    }

    const contaNova = route.params;
    const podeEntrar =
      (email === EMAIL_TESTE && senha === SENHA_TESTE) ||
      (contaNova && email === contaNova.email && senha === contaNova.senha);

    if (podeEntrar) {
      navigation.replace('Inicio');
    } else {
      setErro('E-mail ou senha incorretos.');
    }
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
      <Text style={styles.subtitulo}>Bem-vindo de volta!</Text>

      {route.params?.nome && (
        <Text style={styles.sucesso}>Conta criada, {route.params.nome}! Faça login.</Text>
      )}

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

      {erro !== '' && <Text style={styles.erro}>{erro}</Text>}

      <TouchableOpacity style={styles.botao} onPress={entrar}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>

      <Text style={styles.dica}>
        Conta de teste: {EMAIL_TESTE} / senha {SENHA_TESTE}
      </Text>
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
  sucesso: {
    color: '#2E7D32',
    textAlign: 'center',
    marginBottom: 12,
    fontSize: 14,
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
  dica: {
    fontSize: 12,
    color: '#B9A69B',
    textAlign: 'center',
    marginTop: 24,
  },
});
