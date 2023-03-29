<?php

include("conexao.php");

$nsala = $_GET['numsala'];
$dreserva = $_GET['data'] ;
$horInicio = $_POST['Inicio'] ;
$horFim = $_POST['Fim'] ;
session_start();
$cpf = $_SESSION['cpf'] ;
$tipousuario = $_SESSION['tipousuario'] ;


if($tipousuario == 3)
{
	$result = mysql_query("INSERT INTO `reserva` ( `data_reserva` , `horario_inicio`, `horario_fim`, `cpf_usr`, `num_sala`, `moderacao`) VALUES ('$dreserva', '$horInicio', '$horFim', '$cpf', '$nsala', '1' )");
	if($result)
	{
		echo "Sala reservada com sucesso!!";
			
	}
	else
	{
		mysql_error();
	}
}
else
{
	$result = mysql_query("INSERT INTO `reserva` ( `data_reserva` , `horario_inicio`, `horario_fim`, `cpf_usr`, `num_sala`, `moderacao`) VALUES ('$dreserva', '$horInicio', '$horFim', '$cpf', '$nsala', '0' )");
	if($result)
	{
		echo "Sala reservada com sucesso!!";
			
	}
	else
	{
		mysql_error();
	}
}


?>