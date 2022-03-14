/*
Quando clicar mo pokemon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na lista;

Pra iso vamos precisar vamos trabalhar com dois elementos:
1° Listagem;
2° Cartão pokemon;

Criar duas variaveis no JS pra trabalhar com os elementos da tela;

Vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokemon;

-Remover a classe aberto só do cartão que está aberto;
-Ao clicar em algum pokemon da listagem pegamos o id dele pra saber qual cartão mostrar;
-remover a classe ativa que marca o pokemon selecionado;
-Adicionar a classe ativo no item selecionado
*/ 

//Presisamos criar duas variaveis para trabalhar com os elementos da tela.

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonnCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    //Vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokemon;
    
    pokemon.addEventListener('click', () => {
        //-Remover a classe aberto só do cartão que está aberto;
        
        const cartaoPokemonAberto= document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //-Ao clicar em algum pokemon da listagem pegamos o id dele pra saber qual cartão mostrar;
        
        const idPokemonSelecioando= pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecioando
        const cartaoPokemonParaAbrir= document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativa que marca o pokemon selecionado;

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //-Adicionar a classe ativo no item selecionado;

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecioando)
        pokemonSelecionadoNaListagem.classList.add('ativo')
                                                                                    
    })
})