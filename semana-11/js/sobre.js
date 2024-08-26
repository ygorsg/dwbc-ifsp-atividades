function Text(props) {
  return (
    <>
  <p>{props.children}</p>
    </>
);
}

function Bold(props) {
  return (<strong>{props.children}</strong>);
}

class Content extends React.Component {
  render() {
    return (
      <>
      <Text>O <Bold>Instituto Federal de Educação, Ciência e Tecnologia de São Paulo</Bold> - é uma autarquia federal de ensino.</Text>
      <Text>Fundada em 1909, como Escola de Aprendizes Artífices, é reconhecida pela sociedade paulista por sua excelência no ensino público gratuito de qualidade.</Text>
      <Text>Durante sua história, recebeu, também, os nomes de Escola Técnica Federal de São Paulo e Centro Federal de Educação Tecnológica de São Paulo. Com a transformação em Instituto, em dezembro de 2008, passou a ter relevância de universidade, destacando-se pela autonomia.</Text>
      <Text>Com a mudança, o Instituto Federal de São Paulo passou a destinar 50% das vagas para os cursos técnicos e, no mínimo, 20% das vagas para os cursos de licenciatura sobretudo nas áreas de Ciências e da Matemática. Complementarmente, continuará oferecendo cursos de formação inicial e continuada, tecnologias, engenharias e pós-graduação.</Text>
      <Text>Além dos cursos presenciais, o Instituto Federal de São Paulo oferece os cursos Técnicos em Administração e em Informática para Internet e, a partir de 2012, o superior de Formação de Professores na modalidade de Ensino a Distância (EaD).</Text>
      <Text>O IFSP é organizado em diversos campus e possui mais de 40 mil alunos matriculados nas 36 unidades distribuídas pelo Estado de São Paulo.</Text>
      <Text>Localizado em <Bold>Rua Pedro Vicente, 625 - Canindé - São Paulo - SP - Brasil - Cep: 01109-010</Bold></Text>
      </>
    );
  }
}

const domNode = document.getElementById('root'); // Obtém o elemento DOM onde o React vai renderizar o componente
const root = ReactDOM.createRoot(domNode); // Cria o root do React
root.render(<Content />); // Renderiza o componente Content no elemento DOM