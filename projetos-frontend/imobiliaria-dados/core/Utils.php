<?php
function getMesPorExtenso($mes) {
    $mes = (int)($mes);

    $meses = array(null, 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    return $meses[$mes];
}

function mostraMensagem($mensagem) {
    echo '<div class="centralizaElemento">
            <div class="mensagem centralizaElemento"><span class="texto-mensagem centralizaElemento">' . $mensagem . '</span></div>
          </div>';
}

function mostraParametros($method = 'POST') {
    if ($method == 'POST') {
        echo "<pre>" . print_r($_POST, true) . "</pre>";
    } else if ($method == 'GET') {
        echo "<pre>" . print_r($_GET, true) . "</pre>";
    } else {
        echo 'Método diferente de POST ou GET!';
    }
}
