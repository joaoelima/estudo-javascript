/* ### Buscando e contando dados em Arrays ### 

   Baseado no Array de livros por categoria abaixo, faça os seguintes desafios.
   
   * Contar o numero de catagorias e o numero de livros em cada categoria.
   * Contar o numero de autores.
   * Mostrar livros do autor Augusto Cury.
   * Transformar a função acima em uma função que ir[a receber o nome do autor e
   devolver os livros desse autor.
*/

//objet array com as informção do livros.
const booksByCategory = [
    {
        category: 'Riqueza',
        books: [ 
            {
                title: "Os segredos da mente milionaria",
                author:"T. Harv Eker",
            },
            {
                title: "O Homem mais rico da babilonia",
                author:"George S. Clason",
            },
            {
                title: "Pai rico, Pai pobre",
                author:"Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
       category: 'Inteligencia Emocional',
        books: [
            {
                title: "Você é insubstituivel",
                author:"Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author:"Augusto Cury",
            },
            {
                title: "Os 7 habitos das pessoas altamente eficazes",
                author:"Stephen R. Covey",
            },
        ], 
    },
];

//estrutura de repetição, onde irá conta qunantos livros e categorias existem.
const totalCategories = booksByCategory.length

for(let category of booksByCategory) {
    console.log('Total de livros da categoria:' , category.category)
    console.log(category.books.length)
}

//função que irá verifciar se existe o autor dentro do array, caso não exista ele irá colocar o nome do autor.
function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores:", authors.length)
}

countAuthors();

//função que irá verificar os livros do autor desejado, e retornar os livros do autor que estão dentro do Array.
function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}:, ${books}`)
}

booksOfAuthor('Nome do autor');