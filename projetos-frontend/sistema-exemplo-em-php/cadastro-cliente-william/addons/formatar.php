<?php
// formata telefone celular comecado com 9
function formataTelefone($numero){
    // deixa somente numeros
    $numero = preg_replace('/[^0-9]/', '', $numero);

    $formata = substr($numero, 0, 2);
    $formata_2 = substr($numero, 2, 5);
    $formata_3 = substr($numero, 7, 12);

//    echo '<br>numero formatado 1:' . $formata;
//    echo '<br>numero formatado 2:' . $formata_2;
//    echo '<br>numero formatado 3:' . $formata_3;
//
//    echo '<br><br><br>';

    $novo_numero = "(".$formata.") " . $formata_2 . "-". $formata_3;

//    echo 'numero formatado:' . $novo_numero;

    return $novo_numero;
}