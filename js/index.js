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

const listaFerramenta = document.querySelector('.lista-ferramentas');

const listaChuveiro = document.querySelector('.lista-chuveiros');

const listaClima = document.querySelector('.lista-clima');

const listaParafu = document.querySelector('.lista-parafus');


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

    let tagLi     = document.createElement('li');
    let tagImg    = document.createElement('img');
    let tagName   = document.createElement('h3');
    let tagDesc   = document.createElement('p');
    let tagPrice  = document.createElement('h5');
    let tagSec    = document.createElement('h6');
    let tagbutton = document.createElement('button');
    
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
    tagbutton.setAttribute("id", `pd-${id}`)

    tagLi.append(tagImg, tagName, tagDesc, tagPrice, tagSec, tagbutton)

    return tagLi
};


let contaCart = 0;


function vigiarCarrinho(){
    let carrinhoVazio = document.querySelector('.carrinho-vazio')
    carrinhoVazio.innerHTML = ""
    if(contaCart===0){
    
        let aviso = document.createElement('p')
        aviso.innerHTML = `<strong>Carrinho Vazio</strong>`
        carrinhoVazio.appendChild(aviso)
    }
}

let somaCart = 0;

let botaoProduto = document.getElementsByClassName('adc-button');

for(let i = 0; i<botaoProduto.length; i++){
    let botaoAtual = botaoProduto[i]
    botaoAtual.addEventListener('click', function(event){
        let produtoClick = event.target;
        let idProduto = produtoClick.id
        let id = parseInt(idProduto.substring(3))
        
        let prodObj = procurarProduto(id)
        
        
        
        adicionaCarrinho(prodObj)
        
    });
}

function procurarProduto(id){
    for(let i = 0; i<data.length; i++){
        let item = data[i]
        if(item.id===id){
           return item;
        }
    }
    return false
}

function adicionaCarrinho(item){
    contaCart++;
    vigiarCarrinho()
    document.querySelector('.qtd-car').innerHTML = `${contaCart}`
    somaCart += item.value
    document.querySelector('.valor-car').innerHTML = somaCart.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const carrinho = document.querySelector('.lista-car')
    let id    = item.id;
    let img   = item.img
    let nome  = item.nameItem;
    let preco = item.value

    let tagLi    = document.createElement('li');
    let tagImg   = document.createElement('img');
    let tagNome  = document.createElement('h5');
    let tagPreco = document.createElement('h6');
    let tagBot   = document.createElement('button');

    tagLi.classList.add("produto-car")
    tagImg.classList.add("img-car")
    tagBot.classList.add("remove-prod")
    tagBot.setAttribute("id", `rmv-${id}`)

    tagImg.src         = `./img/${img}`;
    tagImg.alt         = nome;
    tagNome.innerText  = nome;
    tagPreco.innerText = preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    tagBot.type        = 'submit';
    tagBot.innerHTML   = '-';

    tagBot.addEventListener('click', function(event){
        let li = event.path[1]
        li.remove()

        contaCart--
        document.querySelector('.qtd-car').innerHTML = `${contaCart}`
        somaCart -= item.value
        document.querySelector('.valor-car').innerHTML = somaCart.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        vigiarCarrinho()
    });
    
    tagLi.append(tagImg, tagNome, tagPreco, tagBot);

    carrinho.appendChild(tagLi);
}
function pesquisar(){
    let input,filtro,vitrine,vitrineItens,links;
    input = document.getElementById("search");
    filtro = input.value.toUpperCase();
    vitrine = document.querySelector('.vitrine');
    vitrineItens = vitrine.getElementsByTagName('li');
    for(var i=0; i<vitrineItens.length; i++){
        links = vitrineItens[i].getElementsByTagName('h3')[0];
        if(links.innerHTML.toUpperCase().indexof(filtro)>-1){
            vitrineItens[i].style.display="";
        }
        else{vitrineItens[i].style.display="none"}
    }
}