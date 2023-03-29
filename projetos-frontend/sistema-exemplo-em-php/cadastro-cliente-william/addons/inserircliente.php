<?php

require_once("../core/Query.php");
include_once("../web/head.php");
$oQuery = new Query();
require_once("formatar.php");

if(isset($_GET['action']) && $_GET['action'] == 'inserir'){
  // ADICIONANDO UM A MAIS NO CODIGO
  $sql_codigo = "select codigo + 1 as codigo from tbcliente order by codigo desc limit 1";
  $aDados = $oQuery->select($sql_codigo);

  // ORGANIZANDO
  $codigo = 1;
  if($aDados){
    $codigo = $aDados["codigo"];
    echo 'novo codigo do banco de dados:' . $codigo;
  } else {
      echo 'novo codigo fixo:' . $codigo;
  }

//  return ;

  $nome     = $_POST['nome'];
  $telefone = formataTelefone($_POST['telefone']);

  // INSERINDO
  $sql_insert = "INSERT INTO 
                public.tbcliente
                (codigo, nome, telefone)
                VALUES
                ($codigo,'$nome','$telefone')";

  $aDadosCliente = $oQuery->select($sql_insert);
  
  header('Location: ../index.php');
}

$html_link = '<link rel="stylesheet" href="../css/style.css">';

$html_form = '

            <form action="inserircliente.php?action=inserir" method="POST">
            <label for="Nome">Nome:</label>
            <input type="text" name="nome" placeholder="Nome" id="nome" required>
            <br>
            <br>
            <label for="Telefone">Telefone:</label>
            <input type="text" name="telefone" maxlength="15" placeholder="Telefone" id="telefone" required>
            <br><br>
            <input type="submit" value="Inserir">
            </form>'
            ;

echo $html_link . $html_form;