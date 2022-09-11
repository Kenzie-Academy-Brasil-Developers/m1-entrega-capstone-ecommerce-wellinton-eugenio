const furadeira = [];
const chuveiro  = [];
const clima     = [];
const parafusa  = [];
const ferrame   = [];

function separarProdutos(lista){
    for(let i = 0; i < lista.length; i++){
        let produtoAtual = lista[i]
        if(produtoAtual.tag === "Furadeira"){
            furadeira.push(produtoAtual)
        }
        else if(produtoAtual.tag === "Parafusadeira"){
            parafusa.push(produtoAtual)
        }
        else if(produtoAtual.tag === "Ferramentas"){
            ferrame.push(produtoAtual)
        }
        else if(produtoAtual.tag ==="Climatizador"){
            clima.push(produtoAtual)
        }
        else if(produtoAtual.tag === "Chuveiros"){
        chuveiro.push(produtoAtual)
        }
    }
    return `ok lista separada`
};

separarProdutos(data);

const listaFuradeira = document.querySelector('.lista-furadeiras');
console.log(listaFuradeira);
const listaFerramenta = document.querySelector('.lista-ferramentas');
console.log(listaFerramenta);
const listaChuveiro = document.querySelector('.lista-chuveiros');
console.log(listaChuveiro)
const listaClima = document.querySelector('.lista-clima');
console.log(listaClima)
const listaParafu = document.querySelector('.lista-parafus');
console.log(listaParafu)

function listarProdutos(lista, local){
    for(let i = 0; i<lista.length; i++){
        let produtoAtual = lista[i]

        let novocard = criarCard(produtoAtual)

        local.appendChild(novocard)
    }
}

listarProdutos(furadeira, listaFuradeira);
listarProdutos(chuveiro, listaChuveiro);
listarProdutos(clima, listaClima);
listarProdutos(ferrame, listaFerramenta);
listarProdutos(parafusa, listaParafu);

function criarCard(produto){
    let id     = produto.id;
    let foto   = produto.img;
    let nome   = produto.nameItem;
    let desc   = produto.description;
    let preco  = produto.value;
    let bottom = produto.addCart;
    let secao  = produto.tag;

    //criar tags
    let tagLi     = document.createElement('li');
    let tagImg    = document.createElement('img');
    let tagName   = document.createElement('h3');
    let tagDesc   = document.createElement('p');
    let tagPrice  = document.createElement('h5');
    let tagSec    = document.createElement('h6');
    let tagbutton = document.createElement('button');
    
    //adicionar classe as tags
   tagLi.classList.add("card-produto");
   tagImg.classList.add("img-card");
   tagbutton.classList.add("adc-button")

    tagImg.src         = `./img/${foto}`;
    tagImg.alt         = desc
    tagName.innerText  = nome
    tagDesc.innerText  = desc
    tagPrice.innerText = preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    tagSec.innerText   = secao
    tagbutton.type     = 'submit'
    tagbutton.innerText= bottom

    tagLi.append(tagImg, tagName, tagDesc, tagPrice, tagSec, tagbutton)

    return tagLi
};
//contadora do carrinho
let contaCart = 0;

//soma do carrinho
let somaCart = 0;

let botaoProduto = document.getElementsByClassName('adc-button');
console.log(botaoProduto)
for(let i = 0; i<botaoProduto.length; i++){
    
}
/*
PRODUTO IDENFIFICA
{
    id: 5,
    img: "chufut.jpg",
    nameItem: "Ducha Futura",
    description:
      "Ducha Futura Multitemperaturas, 5500W, Lorenzetti, Branco",
    value: 93.90,
    addCart: "Adicionar ao carrinho",
    tag: "Chuveiros",
},
CARD VITRINE
<li class="card-produto">
     <img src="./img/furboi.jpg" alt="" class="img-card">
     <h3>furadeira boshi</h3>
     <p>furadeira de impacto bosh</p>
     <p><strong>R$469,90</strong></p>
     <h6>furadeiras</h6>
    <button type="submit" class="adc-button">adicionar ao carrinho</button>
</li>
CARD CARRINHO
<li class="produto-car">
    <img src="./img/furboi.jpg" alt="" class="img-car">
    <h5 class="titulo">furadeira boshc</h5>
    <h6>R$469,90</h6>
    <button type="submit" class="remove-prod">-</button>
</li>
*/
