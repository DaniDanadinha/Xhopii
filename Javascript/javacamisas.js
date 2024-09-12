function selecionarimgproduto(MiniaturaEscolhida){
    document.getElementById("imagem-principal").src = MiniaturaEscolhida.src;
}
function mudarPreco(botaoEscolhido){
    if( botaoEscolhido.id == "btnmodeloPreto"){
    document.getElementById('precoProduto').innerText = "R$56,90"
    document.getElementById('qtdDisponivel').innerHTML = "10 peças disponivel"
    }

    else if( botaoEscolhido.id == "btnmodeloVerde"){
        document.getElementById('precoProduto').innerHTML = "R$100,99"
        document.getElementById('qtdDisponivel').innerHTML = "11 peças disponivel"
    }
    else if( botaoEscolhido.id == "btnmodeloAzul"){
        document.getElementById('precoProduto').innerHTML = "R$560,90"
        document.getElementById('qtdDisponivel').innerHTML = "18 peças disponivel"
    }
    else if( botaoEscolhido.id == "btnmodeloRosa"){
        document.getElementById('precoProduto').innerHTML = "R$156,90"
        document.getElementById('qtdDisponivel').innerHTML = "81 peças disponivel"
    }
    else if( botaoEscolhido.id == "btnmodeloCinza"){
        document.getElementById('precoProduto').innerHTML = "R$67,90"
        document.getElementById('qtdDisponivel').innerHTML = "45 peças disponivel"
    }
}
