var numeroSecreto = parseInt(Math.random() * 1001);

while(chute != numeroSecreto) {
    var chute = prompt('Digite o número entre 0 e 1000')

    if(chute == numeroSecreto) {
    alert('Acertou!')
    } else if(chute > numeroSecreto) {
    alert('Errou! Tente novamente. O número secreto é menor')
    } else if(chute < numeroSecreto) {
    alert('Errou! Tente novamente. O número secreto é maior')
    }
}
