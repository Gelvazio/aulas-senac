<?php
$aCidades = array();
switch ($_POST['estado']){
    case 'PR':
        $aCidades[] = 'Curitiba';
        $aCidades[] = 'Maringa';
    break;
    case 'SC':
        $aCidades[] = 'Rio do Sul';
        $aCidades[] = 'Ibirama';
    break;
    case 'RS':
        $aCidades[] = 'Porto Alegre';
        $aCidades[] = 'Uruguaina';
    break;
}
echo json_encode($aCidades);
