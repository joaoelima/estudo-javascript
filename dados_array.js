/* ### Buscando e contando dados em Arrays ### 

   Baseado no Array de livros por categoria abaixo, faça os seguintes desafios.
   
   * Contar o numero de catagorias e o numero de livros em cada categoria.
   * Contar o numero de autores.
   * Mostrar livros do autor Augusto Cury.
   * Transformar a função acima em uma função que ir[a receber o nome do autor e
   devolver os livros desse autor.
*/

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