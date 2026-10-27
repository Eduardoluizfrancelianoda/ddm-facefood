import { ScrollView, View, Text, StyleSheet } from 'react-native';

// dicas práticas de cozinha
const dicas = [
  {
    emoji: '🔪',
    titulo: 'Faca afiada é mais segura',
    texto:
      'A faca cega é a mais perigosa de todas: ela escorrega no alimento e a chance de acidente sobe. Uma faca bem afiada corta limpo e com menos esforço.',
  },
  {
    emoji: '🧂',
    titulo: 'Tempere a água do macarrão',
    texto:
      'Salgue a água antes de colocar o macarrão. Essa é a única chance de temperar a massa por dentro — o sal do molho depois não resolve.',
  },
  {
    emoji: '🥩',
    titulo: 'Deixe a carne descansar',
    texto:
      'Depois de tirar a carne do fogo, espere uns 5 minutos antes de cortar. Os sucos se redistribuem e ela fica mais suculenta.',
  },
  {
    emoji: '🍚',
    titulo: 'Arroz soltinho',
    texto:
      'Lave o arroz até a água sair quase transparente antes de cozinhar. Isso tira o excesso de amido, que é o que deixa o arroz empapado.',
  },
  {
    emoji: '🥚',
    titulo: 'Teste do ovo fresco',
    texto:
      'Na dúvida se o ovo ainda presta, coloque ele num copo de água: ovo fresco afunda e deita no fundo, ovo velho sobe e flutua.',
  },
  {
    emoji: '🧅',
    titulo: 'Cebola que não faz chorar',
    texto:
      'Deixe a cebola uns 15 minutos na geladeira antes de picar. O frio reduz o composto que solta no ar e arde os olhos.',
  },
  {
    emoji: '🧄',
    titulo: 'Cuidado com o alho',
    texto:
      'O alho queima rápido e fica amargo. Na hora do refogado, coloque ele depois da cebola, ou em fogo mais baixo.',
  },
  {
    emoji: '🥦',
    titulo: 'Legumes verde-vivos',
    texto:
      'Depois de cozinhar brócolis ou ervilha, mergulhe na água com gelo. O choque térmico trava o cozimento e mantém a cor viva.',
  },
];

export default function Dicas() {
  return (
    <ScrollView style={styles.fundo} contentContainerStyle={styles.lista}>
      <Text style={styles.aviso}>
        Dicas simples que fazem diferença no dia a dia da cozinha.
      </Text>

      {dicas.map((d) => (
        <View key={d.titulo} style={styles.cartao}>
          <Text style={styles.titulo}>
            {d.emoji} {d.titulo}
          </Text>
          <Text style={styles.texto}>{d.texto}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#FFF7EC',
  },
  lista: {
    padding: 16,
  },
  aviso: {
    fontSize: 15,
    color: '#8D6E63',
    textAlign: 'center',
    marginBottom: 14,
  },
  cartao: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    elevation: 2,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3B2417',
    marginBottom: 6,
  },
  texto: {
    fontSize: 14,
    color: '#4E342E',
    lineHeight: 22,
  },
});
