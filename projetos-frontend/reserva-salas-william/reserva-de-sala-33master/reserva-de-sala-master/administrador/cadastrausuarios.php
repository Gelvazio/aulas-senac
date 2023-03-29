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

$pnome  = $_POST ['pnome']; //atribuição do campo "nome" vindo do formulário para variavel  
$unome  = $_POST ['unome']; //atribuição do campo "email" vindo do formulário para variavel
$email  = $_POST ['email']; //atribuição do campo "ddd" vindo do formulário para variavel
$cpf  = $_POST ['cpf'];  //atribuição do campo "telefone" vindo do formulário para variavel
$senha  = $_POST ['senha'];  //atribuição do campo "endereco" vindo do formulário para variavel
$SIAP = $_POST ['SIAP'];  //atribuição do campo "cidade" vindo do formulário para variavel
$codepto  = $_POST ['codepto'];  //atribuição do campo "estado" vindo do formulário para variavel  //atribuição do campo "bairro" vindo do formulário para 
$tipo_usr = $_POST['tipousuario'];


if((strcmp ($pnome, "") != 0) && (strcmp ($unome, "") != 0) && (strcmp ($email, "") != 0) && (strcmp ($cpf, "") != 0) && (strcmp ($senha, "") != 0) && (strcmp ($SIAP, "") != 0) && (strcmp ($codepto, "") != 0))
{

  $query = "INSERT INTO `usuario` ( `cpf` , `pnome` , `unome`, `senha` , `email`) 
  VALUES ('$cpf', '$pnome', '$unome', '$senha', '$email')";
  
    $result = mysql_query($query, $conexao);

  if(strcmp($tipo_usr, "Professor") == 0 )
  {
      $query = "INSERT INTO `professor` ( `cod_depto` , `siap` , `cpf_prof`) 
    VALUES ('$codepto', '$SIAP', '$cpf')";
  
  }

  else if(strcmp($tipo_usr, "Moderador") == 0 )
  {
    $query = "INSERT INTO `moderador` ( `cpf_mod` , `cpf_adm`) 
    VALUES ('$cpf', '10')";
   
  }

  $result = mysql_query($query, $conexao);

  if($result)
  {
    echo "Usuário cadastrado com sucesso!";
  }

  else 
  {
    echo mysql_error();
  }
}

?>

