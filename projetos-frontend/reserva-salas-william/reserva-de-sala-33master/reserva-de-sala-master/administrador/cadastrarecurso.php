<?php
session_start();
if (empty($_SESSION['user'])){
  header('location: ../index.html');
}
?>
//<!-- Fim do JavaScript que validará os campos obrigatórios! -->
<?php 
include('../conexao.php');
header('Content-type: text/html; charset=UTF-8'); 
?>


<?php 
// RECEBENDO OS DADOS PREENCHIDOS DO FORMULÁRIO !

//$codigo  = $_POST ['codigo']; //atribuição do campo "nome" vindo do formulário para variavel  
$nome  = $_POST ['nome']; //atribuição do campo "email" vindo do formulário para variavel
$categoria  = $_POST ['categoria']; //atribuição do campo "nome" vindo do formulário para variavel  
$situacao  = $_POST ['situacao']; //atribuição do campo "email" vindo do formulário para variavel


if((strcmp ($nome, "") != 0) && (strcmp ($categoria, "") != 0) && (strcmp ($situacao, "") != 0))
{

  $query = "INSERT INTO `recurso` (`nome`, `categoria`, `situacao`) 
  VALUES ('$nome', '$categoria', '$situacao')";
  
    $result = mysql_query($query, $conexao);

  if($result)
  {
    echo "Recurso cadastrado com sucesso!";
  }

  else 
  {
    echo mysql_error();
  }
}

?>

