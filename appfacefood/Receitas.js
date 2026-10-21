import { ScrollView, View, Text, StyleSheet } from 'react-native';

// lista de receitas que aparecem na tela
const receitas = [
  {
    nome: 'Brigadeiro',
    emoji: '🍫',
    tempo: '30 min',
    nivel: 'Fácil',
    ingredientes: [
      '1 lata de leite condensado (395g)',
      '2 colheres de sopa de chocolate em pó',
      '1 colher de sopa de manteiga',
      'Chocolate granulado para cobrir',
    ],
    modo: [
      'Em uma panela, misture o leite condensado, o chocolate em pó e a manteiga.',
      'Leve ao fogo baixo e mexa sem parar até a massa desgrudar do fundo da panela.',
      'Transfira para um prato e deixe esfriar bem.',
      'Unte as mãos com manteiga, enrole as bolinhas e passe no granulado.',
    ],
  },
  {
    nome: 'Pão de Queijo',
    emoji: '🧀',
    tempo: '40 min',
    nivel: 'Fácil',
    ingredientes: [
      '500g de polvilho azedo',
      '250ml de leite',
      '100ml de óleo',
      '1 colher de chá de sal',
      '2 ovos',
      '200g de queijo minas ralado',
    ],
    modo: [
      'Ferva o leite com o óleo e o sal.',
      'Escalde o polvilho com essa mistura e mexa até esfriar.',
      'Junte os ovos e o queijo e sove até a massa ficar homogênea.',
      'Faça bolinhas e asse em forno preaquecido a 200°C por uns 25 minutos.',
    ],
  },
  {
    nome: 'Bolo de Cenoura',
    emoji: '🥕',
    tempo: '50 min',
    nivel: 'Fácil',
    ingredientes: [
      '3 cenouras médias picadas',
      '3 ovos',
      '1 xícara de óleo',
      '2 xícaras de açúcar',
      '2 e ½ xícaras de farinha de trigo',
      '1 colher de sopa de fermento em pó',
      '1 lata de leite condensado (para a cobertura)',
      '3 colheres de sopa de chocolate em pó (para a cobertura)',
      '1 colher de sopa de manteiga (para a cobertura)',
    ],
    modo: [
      'Bata no liquidificador as cenouras, os ovos e o óleo.',
      'Misture o açúcar e a farinha em uma tigela e junte a massa batida.',
      'Acrescente o fermento por último e mexa devagar.',
      'Asse em forma untada a 180°C por uns 40 minutos.',
      'Para a cobertura, leve ao fogo o leite condensado, o chocolate e a manteiga até engrossar e espalhe sobre o bolo.',
    ],
  },
  {
    nome: 'Feijoada',
    emoji: '🍲',
    tempo: '2h30',
    nivel: 'Média',
    ingredientes: [
      '500g de feijão preto',
      '200g de costelinha de porco',
      '150g de linguiça calabresa',
      '150g de paio',
      '1 cebola picada',
      '2 dentes de alho',
      '2 folhas de louro',
      'Sal a gosto',
    ],
    modo: [
      'Deixe o feijão de molho de um dia para o outro.',
      'Cozinhe o feijão na panela de pressão com o louro por uns 30 minutos.',
      'Em outra panela, refogue a cebola e o alho e doure as carnes.',
      'Junte as carnes ao feijão e cozinhe por mais 20 minutos para apurar o caldo.',
      'Sirva com arroz branco, couve refogada e fatias de laranja.',
    ],
  },
  {
    nome: 'Moqueca de Peixe',
    emoji: '🐟',
    tempo: '1h',
    nivel: 'Média',
    ingredientes: [
      '1kg de peixe em postas (robalo ou badejo)',
      'Suco de 2 limões',
      '2 tomates em rodelas',
      '1 cebola em rodelas',
      '1 pimentão em rodelas',
      '200ml de leite de coco',
      '2 colheres de sopa de azeite de dendê',
      'Coentro, sal e pimenta a gosto',
    ],
    modo: [
      'Tempere o peixe com o suco de limão, sal e pimenta e deixe marinar por 30 minutos.',
      'Em uma panela, faça camadas com a cebola, o tomate e o pimentão.',
      'Coloque o peixe por cima e regue com o leite de coco e o dendê.',
      'Cozinhe tampado em fogo baixo por uns 20 minutos.',
      'Finalize com coentro fresco e sirva com arroz branco.',
    ],
  },
  {
    nome: 'Strogonoff',
    emoji: '🥘',
    tempo: '40 min',
    nivel: 'Fácil',
    ingredientes: [
      '500g de frango em tiras (ou carne)',
      '1 cebola picada',
      '1 lata de molho de tomate',
      '200g de champignon',
      '1 lata de creme de leite',
      'Sal, pimenta e azeite a gosto',
    ],
    modo: [
      'Refogue a cebola no azeite e doure o frango.',
      'Junte o champignon e o molho de tomate e cozinhe por uns 15 minutos.',
      'Desligue o fogo e misture o creme de leite.',
      'Sirva com arroz branco e batata palha.',
    ],
  },
];

export default function Receitas() {
  return (
    <ScrollView style={styles.fundo} contentContainerStyle={styles.lista}>
      <Text style={styles.aviso}>
        Receitas simples para o dia a dia. Escolha uma e mãos à obra!
      </Text>

      {receitas.map((r) => (
        <View key={r.nome} style={styles.cartao}>
          <Text style={styles.nome}>
            {r.emoji} {r.nome}
          </Text>
          <Text style={styles.info}>
            {r.tempo} • {r.nivel}
          </Text>

          <Text style={styles.secao}>Ingredientes</Text>
          {r.ingredientes.map((item) => (
            <Text key={item} style={styles.linha}>
              • {item}
            </Text>
          ))}

          <Text style={styles.secao}>Modo de preparo</Text>
          {r.modo.map((passo, i) => (
            <Text key={i} style={styles.linha}>
              {i + 1}. {passo}
            </Text>
          ))}
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
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3B2417',
  },
  info: {
    fontSize: 13,
    color: '#B14A44',
    marginTop: 2,
    marginBottom: 6,
  },
  secao: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#DB0004',
    marginTop: 10,
    marginBottom: 4,
  },
  linha: {
    fontSize: 14,
    color: '#4E342E',
    lineHeight: 22,
  },
});
