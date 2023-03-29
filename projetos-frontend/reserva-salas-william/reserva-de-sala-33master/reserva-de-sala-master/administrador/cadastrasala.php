<?php
session_start();
if (empty($_SESSION['user'])){
  header('location: ../index.html');
}

include('../conexao.php');
header('Content-type: text/html; charset=UTF-8'); 
header('Content-type:application/json'); 

$nsala = $_POST ['nsala'];
$csala = $_POST ['csala'];
$tsala = $_POST['tiposala'];
$recurso = $_POST['recurso'];
$csetor = $_POST['setor'];
echo $csetor;


if((strcmp ($nsala, "") != 0) && (strcmp ($csala, "") != 0) && (strcmp ($tsala, "") != 0)){
  $query = "INSERT INTO `sala` ( `nr_sala` , `capacidade`, `id_tipo_sala`) VALUES ('$nsala', '$csala', '$tsala')";
  $result = mysql_query($query, $conexao);
  if($result){
    echo "Tipo de Sala cadastrada com sucesso!";
  }else{
    echo "Erro ao cadastra!";
    echo mysql_error();
  }
  foreach ($recurso as $key => $valor){
    $sql = "INSERT INTO utiliza (codigo_recurso, nr_sala) VALUES ($valor, $nsala);";
    $result = mysql_query($sql, $conexao);
    if($sql){
      echo "Recurso Associado a sala\n";
    }else{
      echo "Recursso NAO associado a sala\n";
      echo mysql_error();
    }   
  }
  $sql = "INSERT INTO gerencia (cod_setorg, id_sala) VALUES ($csetor, $nsala)";
  $result = mysql_query($sql, $conexao);
  if($sql){
    echo "Sala Associado a setor";
  }else {
    echo "Sala NAO associado a setor";
    echo mysql_error();
  }
}

?>