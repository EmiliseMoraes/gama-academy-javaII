const livros = require('./database')


//Pegar o input 

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N')

// Se for sim, mostra as categorias disponiveis e pergunta qual categoria o usuario escolhe
// Se escolher não, mostra todos os livros em ordem crescente pela quantidade de páginas

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias que temos disponíveis no momento')
    console.log('Romance', '/Fantasia e Ficção', 'Fantasia')

    const entradaCategoria = readline.question('Qual categoria vc escolhe: ')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)

}else {
 const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)

    console.log('Essas são todos os livros disponíveis: ')
    console.table(livrosOrdenados)
}