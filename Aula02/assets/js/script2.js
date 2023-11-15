var numeroSecreto = 581;

var chute = prompt('Digite o número entre 1 e 1000');

if(chute == numeroSecreto){
    alert('Acertou!')
} else if(chute > numeroSecreto){
    alert('Errou... o número secreto é menor')
} else if(chute < numeroSecreto){
    alert('Errou... o número secreto é maior')
}