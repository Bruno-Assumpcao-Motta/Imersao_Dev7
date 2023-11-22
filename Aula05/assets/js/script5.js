var paulo = {
    nome:'Paulo',
    vitoria:0,
    empate:0,
    derrota:0,
    pontos:0
};
var rafa = {
    nome:'Rafa',
    vitoria:0,
    empate:0,
    derrota:0,
    pontos:0

};

var bruno = {
    nome:'Bruno',
    vitoria:0,
    empate:0,
    derrota:0,
    pontos:0

};

var elementoTabela = document.getElementById('tabelaJogadores')
elementoTabela.innerHTML = `
    <tr>
        <td>${paulo.nome}</td>
        <td>${paulo.vitoria}</td>
        <td>${paulo.empate}</td>
        <td>${paulo.derrota}</td>
        <td>${paulo.pontos}</td>
        <td><button onClick="adicionarVitoria(paulo)">Vitória</button></td>
        <td><button onClick="adicionarEmpate()">Empate</button></td>
        <td><button onClick="adicionarDerrota()">Derrota</button></td>
    </tr>
` 

function adicionarVitoria(jogador) {
    console.log(jogador);
    jogador.vitoria++;
    jogador.pontos = jogador.pontos + 3;
    console.log(jogador);
} 

function adicionarEmpate(jogador) {
    jogador.empate++;
    jogador.pontos = jogador.pontos + 1;
}

function adicionarDerrota() {

}