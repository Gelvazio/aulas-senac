<?php
//selecionar email de moderadores que moderam setor de sala 
//que foi solicitada pelo usuário
// select setor da sala -> select moderadores do setor 
// -> select email de user de mesmo cpf do moderador
//
require("conexao.php");
$idsalassolicitada=10;
/*
$query1= mysql_query ("SELECT cod_setorg FROM gerencia WHERE id_sala=$idsalassolicitada");
$codigosetor= mysql_fetch_array($query1);
print_r($codigosetor);


$query2= mysql_query("SELECT cpf_usuario FROM modera WHERE cod_setor IN (SELECT cod_setorg FROM gerencia WHERE id_sala=$idsalassolicitada)");

while ($moderadoressetor= mysql_fetch_array($query2)){
$array[]=$moderadoressetor;
}
print_r($array);
*/

$query3= mysql_query("SELECT email FROM usuario WHERE cpf IN (SELECT cpf_usuario FROM modera WHERE cod_setor=(SELECT cod_setorg FROM gerencia WHERE id_sala=$idsalassolicitada))");
#$query3= mysql_query("SELECT email FROM usuario WHERE cpf IN (SELECT cpf_usuario FROM modera WHERE cod_setor=(SELECT cod_setorg FROM gerencia WHERE id_sala=$idsalassolicitada))");

$var=array();
while ($resultado[]= mysql_fetch_array($query3)){
$var[]= $resultado;
}
print_r($resultado);
/*
while ($emailsmod= mysql_fetch_array($query3)){
$array[]=$emailsmod;
echo $array;
}
*/
//print_r($array);


$to      = 'brsdcc@gmail.com';
$subject = 'TEST php';
$message = 'hello test php '$resultado'';
$headers = 'From: brsdcc@gmail.com' . "\r\n" .
    'Reply-To: brsdcc@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
*/
?> 
