<?php
include("conexao.php");
$gmtDate = gmdate("D, d M Y H:i:s");
header("Expires: {$gmtDate} GMT");
header("Last-Modified: {$gmtDate} GMT");
header("Cache-Control: no-cache, must-revalidade");
header("Pragma: no-cache");
//$data = date("Y-m-d");  /* =$_GET["data"] */
$data = $_GET["data"];
$data = implode("-",array_reverse(explode("/",$data)));
$codsetor = $_GET["setor"];
//$codsetor = 1;
$res = mysql_query("SELECT `horario_abertura`, `horario_encerramento` FROM `setor` WHERE `cod_setor`='$codsetor'");
//$total = mysqli_num_rows($res);
$encerramento;
$abertura;
///for($i=0;$i<$total;i++){
	while($dados = mysql_fetch_array($res))
	{
    $abertura = $dados[0];
    $encerramento = $dados[1];
                
	}
$a = explode(":", $abertura);
$e = explode(":", $encerramento);


$res = mysql_query("SELECT `id_sala` FROM `gerencia` WHERE `cod_setorg`='$codsetor'");
//$total = mysqli_num_rows($res);

while($dados =  mysql_fetch_array($res))
{
	$sala[] = $dados[0];
	//echo "</br>";
}

for($i=$a[0];$i<$e[0];$i++){
	foreach ($sala as $s) {
		$tabela[$i][$s]="livre";
	}
}

foreach ($sala as $s) {
	
	$res = mysql_query("SELECT `horario_inicio` , `horario_fim`, `pnome` FROM `reserva`, `usuario` WHERE `data_reserva`='$data' AND `num_sala`='$s' AND `cpf_usr`=`cpf` ORDER BY `horario_inicio`");
	//$total = mysqli_num_rows($res);
	while($dados = mysql_fetch_array($res)){
		$inicio= explode(":", $dados[0]);
		$fim= explode(":", $dados[1]);
		$username=$dados[2];
		$dif= $fim[0]-$inicio[0];
		$aux= $inicio[0];
		while($dif>0){
			$tabela[$aux][$s]=$username;
			$aux++;
			$dif--;
		}
	}
}
echo "<div class=\"panel panel-default\">";
echo "<div class=\"panel-heading\">
      <p class=\"text-center\">$data</p>
    </div>";
echo "<div class=\"panel-body\">
      <ul class=\"pager\">
        <li class=\"previous\"><a href=\"#\">&larr; Ir para o dia anterior</a></li>
        <li><a href=\"#\">Ir para o dia de hoje</a></li>
        <li class=\"next\"><a href=\"#\">Ir para o próximo dia &rarr;</a></li>
      </ul>
    </div>";
echo "<table class=\"table\">";
echo " <thead>";
echo "  <tr>";
echo "   <th>Hora</th>";


foreach ($sala as $s) {
	echo "   <th>sala $s</th>";
}
echo "  </tr>";
echo " </thead>";
echo " <tbody>";
$tabela;
for($i=$a[0];$i<$e[0];$i++){
	echo "  <tr>";
	echo "   <td>$i</td>";
	foreach ($sala as $s) {
		if($tabela[$i][$s] == "livre"){
			echo "   <td><a href=\"solicita-reserva.php?sala=$s&data=$data\">reserve</a></td>";
		}else{
			$saida = $tabela[$i][$s];
			echo "   <td>$saida</td>";
		}
	}
	echo "  </tr>";
}
echo " </tbody>";
echo "</table>";
echo "</div>"
?>

