<?php 


include('erro.php');

$servidor = 'localhost';
$usuario = 'root';
$senha = '';
$banco = 'siges';

if($conexao = mysqli_connect($servidor, $usuario, $senha)){
	mysqli_select_db($conexao, $banco);
}else {
	echo "Nao foi possivel conectar com o servidor";
}

