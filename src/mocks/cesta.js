import qualidade from '../../assets/qualidade.png';
import desempenho from '../../assets/desempenho.png';
import praticidade from '../../assets/praticidade.png';
import atendimento from '../../assets/atendimento.png';
import suporte from '../../assets/suporte.png';


const cesta = {
  detalhes: {
    nome: "Quem somos?",
    descricao: "A MakeApp é uma empresa inovadora especializada em criar aplicativos sob medida. Com nosso aplicativo exclusivo, você pode transformar suas ideias em aplicativos funcionais sem a necessidade de habilidades de programação. Simplificamos o desenvolvimento de aplicativos para que você possa focar no que realmente importa: sua visão. Junte-se a nós e comece a criar aplicativos personalizados com facilidade.",
  },
  itens: {
    titulo: "Benefícos de trabalhar conosco:",
    lista: [
      {
        nome: "Qualidade",
        imagem: qualidade,
      },
      {
        nome: "Desempenho",
        imagem: desempenho,
      },
      {
        nome: "Praticidade",
        imagem: praticidade,
      },
      {
        nome: "Atendimento",
        imagem: atendimento,
      },
      {
        nome: "Suporte",
        imagem: suporte,
      }
    ]
  }
}

export default cesta;