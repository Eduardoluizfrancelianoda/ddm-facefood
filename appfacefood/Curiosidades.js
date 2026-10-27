import { ScrollView, View, Text, StyleSheet } from 'react-native';

// fatos curiosos sobre comida
const curiosidades = [
  {
    emoji: '🍯',
    titulo: 'O mel nunca estraga',
    texto:
      'Arqueólogos já encontraram potes de mel com mais de 3.000 anos em tumbas do Egito e ele ainda estava bom. O mel tem pouquíssima água e é naturalmente ácido, então bactérias quase não sobrevivem nele.',
  },
  {
    emoji: '🥕',
    titulo: 'A cenoura era roxa',
    texto:
      'As cenouras originais eram roxas ou brancas. A versão laranja que todo mundo conhece hoje foi cultivada na Holanda por volta do século 17 e acabou dominando o mundo.',
  },
  {
    emoji: '🍫',
    titulo: 'O chocolate já foi dinheiro',
    texto:
      'Os astecas usavam sementes de cacau como moeda de troca. Ou seja: teve uma época em que chocolate literalmente valia dinheiro.',
  },
  {
    emoji: '🍿',
    titulo: 'Por que a pipoca estoura',
    texto:
      'Cada grão de milho de pipoca guarda uma gotinha de água dentro. Quando o grão esquenta, a água vira vapor, a pressão sobe e a casca arrebenta com aquele estouro clássico.',
  },
  {
    emoji: '🧊',
    titulo: 'O picolé nasceu por acidente',
    texto:
      'Em 1905, um garoto de 11 anos esqueceu na varanda um copo com pó de refrigerante, água e um palito para mexer. A noite foi fria e, de manhã, a mistura tinha congelado grudada no palito.',
  },
  {
    emoji: '🥔',
    titulo: 'Batata cultivada no espaço',
    texto:
      'Em 1995, a batata se tornou o primeiro vegetal cultivado no espaço, a bordo do ônibus espacial Columbia, em pesquisas da NASA sobre comida para viagens longas.',
  },
  {
    emoji: '🍣',
    titulo: 'O wasabi geralmente é raiz-forte',
    texto:
      'O wasabi verdadeiro é difícil de cultivar e caro. Por isso, o que a maioria dos restaurantes serve é raiz-forte misturada com corante verde.',
  },
  {
    emoji: '🍅',
    titulo: 'O tomate é uma fruta',
    texto:
      'Botanicamente, o tomate é uma fruta: nasce de uma flor e tem sementes. Mas, como é usado em pratos salgados, a cozinha trata como legume — e ninguém vai brigar por isso.',
  },
];

export default function Curiosidades() {
  return (
    <ScrollView style={styles.fundo} contentContainerStyle={styles.lista}>
      <Text style={styles.aviso}>
        Fatos curiosos sobre comida pra você soltar no próximo almoço de família.
      </Text>

      {curiosidades.map((c) => (
        <View key={c.titulo} style={styles.cartao}>
          <Text style={styles.titulo}>
            {c.emoji} {c.titulo}
          </Text>
          <Text style={styles.texto}>{c.texto}</Text>
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
