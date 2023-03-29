function adicionaItem(){
    event.preventDefault();

    var total = document.getElementById("total").value;

    if(parseFloat(total) > 0){
        adicionaNovoItem();
        // adiciona item no grid
        console.log("Adicionando dados no grid...");
        //
        // var oTable = document.getElementById("dados_item");
        //
        // var oLinhaNova = document.createElement("tr");
        // oLinhaNova.innerText = "testesasas";
        //
        // oTable.append(oLinhaNova);
    }
}

function adicionaNovoItem(){
    // Quantidade de linha da tabela
    var qtdRows = document.getElementById("dados_item").rows.length;

    var table = document.getElementById("dados_item");
    var newRow = table.insertRow(qtdRows);

    var chave = "composto_" + qtdRows;

    newRow.id = chave;

    // add cells to the row
    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    var cel5 = newRow.insertCell(4);
    var cel6 = newRow.insertCell(5);

    var codigoproduto    = document.getElementById("item").value;
    var precounitario    = document.getElementById("preco").value;
    var quantidade       = document.getElementById("quantidade").value;
    var descricaoproduto = document.getElementById("descricao").value;
    var totalitem        = document.getElementById("total").value;

    // add values to the cells
    cel1.innerHTML = codigoproduto;
    cel2.innerHTML = descricaoproduto;
    cel3.innerHTML = precounitario;
    cel4.innerHTML = quantidade;
    cel5.innerHTML = totalitem;
    cel6.innerHTML = "<button onclick='removerItem();'>Excluir</button>";
}

function removerItem(){
    event.preventDefault();
    document.getElementById(this).remove();
}

function onchangeProduto(){
    // coloca o preco do produto
    debugger;

    var produto = document.getElementById("produto").value;

    var aDadosProduto = produto.split("_");

    var codigoproduto    = aDadosProduto[0];
    var precoproduto     = aDadosProduto[1];
    var descricaoproduto = aDadosProduto[2];

    document.getElementById("item").value = codigoproduto;
    document.getElementById("preco").value = precoproduto;
    document.getElementById("descricao").value = descricaoproduto;

    // Atualiza os totais
    mudaQuantidade();
}

function mudaQuantidade(){
    var preco = document.getElementById("preco").value;
    var quantidade = document.getElementById("quantidade").value;

    var total = quantidade * preco;

    document.getElementById("total").value = total;
}