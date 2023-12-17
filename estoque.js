let estoque = {
    joao: [{ tipo: "maca", qtd: 1}, {tipo: "pera", qtd: 1}],
    maria: [{tipo: "maca", qtd: 2}, {tipo: "banana", qtd: 1}]
}

function getEstoque(){
    return structuredClone(estoque)
}

function limpaEstoque() {
    estoque = {}
}

function transacao(origem, destino, quantidade, fruta){
    if(origem === "pomar"){
        estoque[destino][0].qtd += quantidade
    }
}

export {getEstoque, limpaEstoque}