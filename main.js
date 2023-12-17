import { getEstoque, limpaEstoque, transacaoNoEstoque } from "./estoque.js";

document.entrada.addEventListener('submit', leFormulario)

const olJoao = document.querySelector("#olJoao")
const olMaria = document.querySelector("#olMaria")

function leFormulario(event){
    event.preventDefault()
    const fruta = document.entrada.fruta.value
    const quantidade = document.entrada.quantidade.value
    const origem = document.entrada.origem.value
    const destino = document.entrada.destino.value

    console.log(`${origem} doa ${quantidade} ${fruta} para ${destino}`)

    transacaoNoEstoque(origem, destino, quantidade, fruta)
}

function preencheListaPessoa(pessoa, lista){
    lista.innerHTML = ""

    if(Array.isArray(pessoa)){
        for(let i = 0; i < pessoa.length; i++){
            const monte = pessoa[i]
            const eLi = document.createElement('li')
            eLi.innerText = `${monte.tipo}: ${monte.quantidade}`
            lista.append(eLi)
        }
    }
}