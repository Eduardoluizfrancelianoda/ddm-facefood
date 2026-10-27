import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// páginas do menu da home
const paginas = [
  {
    nome: 'Receitas',
    emoji: '🍲',
    descricao: 'Seis receitas simples para o dia a dia.',
  },
  {
    nome: 'Curiosidades',
    emoji: '🧠',
    descricao: 'Fatos curiosos sobre comida do mundo todo.',
  },
  {
    nome: 'Dicas',
    emoji: '👨‍🍳',
    descricao: 'Dicas práticas para cozinhar melhor.',
  },
];

export default function Inicio({ navigation }) {
  return (
    <ScrollView style={styles.fundo} contentContainerStyle={styles.conteudo}>
      <Text style={styles.emoji}>🍔</Text>
      <Text style={styles.logo}>Facefood</Text>
      <Text style={styles.subtitulo}>Tudo sobre comida em um só lugar.</Text>

      {paginas.map((p) => (
        <TouchableOpacity
          key={p.nome}
          style={styles.cartao}
          onPress={() => navigation.navigate(p.nome)}
        >
          <Text style={styles.cartaoEmoji}>{p.emoji}</Text>
          <View style={styles.cartaoTexto}>
            <Text style={styles.cartaoTitulo}>{p.nome}</Text>
            <Text style={styles.cartaoDescricao}>{p.descricao}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <TouchableOpacity onPress={() => navigation.replace('Login')}>
        <Text style={styles.sair}>Sair</Text>
      </TouchableOpacity>

      <Text style={styles.rodape}>Feito com carinho e fome 🍽</Text>
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
  cartao: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  cartaoEmoji: {
    fontSize: 30,
    marginRight: 14,
  },
  cartaoTexto: {
    flex: 1,
  },
  cartaoTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#3B2417',
  },
  cartaoDescricao: {
    fontSize: 13,
    color: '#8D6E63',
    marginTop: 2,
  },
  sair: {
    color: '#DB0004',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 6,
  },
  rodape: {
    fontSize: 12,
    color: '#B9A69B',
    textAlign: 'center',
    marginTop: 20,
  },
});
