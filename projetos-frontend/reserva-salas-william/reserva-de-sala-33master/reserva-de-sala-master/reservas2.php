<?php
include('conexao.php');
$gmtDate = gmdate("D, d M Y H:i:s");
header("Expires: {$gmtDate} GMT");
header("Last-Modified: {$gmtDate} GMT");
header("Cache-Control: no-cache, must-revalidade");
header("Pragma: no-cache");
//$data = $_GET["data"];
date("Y-m-d", $data);
//$codsetor = $_GET["setor"];
$codsetor = 1; 
$res = mysql_query("SELECT horario_abertura, horario_encerramento FROM setor WHERE cod_setor=$codsetor");
//$total = mysqli_num_rows($res);
$encerramento;
$abertura;
///for($i=0;$i<$total;i++){
	while($dados = mysqli_fetch_array($res))
	{
    $abertura = $dados[0];
    $encerramento = $dados[1];
                
	}
$a = explode(":", $abertura);
$e = explode(":", $encerramento);


$res = mysql_query("SELECT id_sala FROM gerencia WHERE cod_setorg=$codsetor");
//$total = mysqli_num_rows($res);
$sala = mysqli_fetch_array($res);
                   
for($i=$a[0];$i<$e[0];$i++){
	foreach ($sala as $s) {
		$tabela[$i][$s]="livre";
	}
}
foreach ($sala as $s) {
	
	$res = mysql_query("SELECT horario_inicio , horario_fim, pnome FROM  reserva, usuario WHERE data_reserva='$data' AND num_sala=$s AND cpf_usr=cpf ORDER BY horario_inicio");
	//$total = mysqli_num_rows($res);
	while($dados = mysqli_fetch_array($res)){
		$inicio= explode(":", $dados[0]);
		$fim= explode(":", $dados[1]);
		$username=$dados[2];
	}
}

?>