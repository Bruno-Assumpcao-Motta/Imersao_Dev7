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
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><button onClick="adicionarVitoria()">Vitória</button></td>
        <td><button onClick="adicionarEmpate()">Empate</button></td>
        <td><button onClick="adicionarDerrota()">Derrota</button></td>
    </tr>
` 

function adicionarVitoria() {

} 

function adicionarEmpate() {

}

function adicionarDerrota() {

}