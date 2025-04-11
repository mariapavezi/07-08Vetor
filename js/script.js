const botao = document.getElementById('add');
const entrada = document.getElementById('entrada');
const lista = document.getElementById('lista');

// array, lista, vetor
const itens = [];

botao.addEventListener('click',
    function(){
        let valorInput = entrada.value;
        itens.push(valorInput);
        entrada.value = "";
        console.log(itens);
        atualizar();
    }
);

function atualizar(){
    lista.innerHTML = "";

    for(let i = 0; i <itens.length; i++){

    let li = document.createElement("li");
    li.textContent = itens[i];
    lista.appendChild(li);

    }
    
}