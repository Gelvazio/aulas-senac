function salvar() {

    let nome = document.getElementById("nome").value
    let sobre_nome = document.getElementById("sobre_nome").value
    let tel = document.getElementById("tel").value
    let email = document.getElementById("email").value
    let endereco = document.getElementById("endereco").value
    let cep = document.getElementById("cep").value
    let numero = document.getElementById("numero").value
    let produto = document.getElementById("produto").value
    let marca = document.getElementById("marca").value
    let valor = document.getElementById("valor").value

    //
    
   

    //
    let blob = new Blob([`Nome: ${nome}\n`,
    `Sobre nome: ${sobre_nome}\n`,
    `Tel: ${tel}\n`,
    `E-Mail: ${email}\n`,
    `Endereço: ${endereco}\n`,
    `Cep: ${cep}\n`,
    `Numero: ${numero}\n`,
    `Produto: ${produto}\n`,
    `Marca: ${marca}\n`,
    `Valor: ${valor}\n`],
        {
            type: 'text/json'
        });

    saveAs(blob, `${nome}`);

}

