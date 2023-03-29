<?php
$oJsonNota = new stdClass();
$oPessoa->codigo = 1;
$oPessoa->nome = "Gelvazio 123";
$oPessoa->idade = 35;



$ch = curl_init("http://localhost/erp-senac/api/index.php");

curl_setopt($ch, CURLOPT_HEADER, 0);

$retorno = curl_exec($ch);

if(curl_error($ch)) {
    echo 'erro ao chamar api';
}

curl_close($ch);

echo json_decode($retorno);







