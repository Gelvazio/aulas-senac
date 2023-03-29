<?php
/**
 *
 * @var Query
 */
static $Query;

function getQuery() {
    if (!isset($Query)) {
        require_once ("core/Query.php");
        $Query = new Query();
    }
    return $Query;
}

function getHeader(){
    // Carrega header
    require_once("header.php");
}

// corpo da pagina
function getCorpo(){

    executaProcessamentoPagina();

    return '<div class="container">
        <br><br>
        <p class="title" id="cobranca-pago">Cobrancas pagas</p>
        <p class="title" id="cobranca-aberto">Cobrancas em aberto</p>

        <hr>
        <h1>Dados Cobranca</h1>
        <form action="gerarcobrancas.php" method="post" id="formularioGerarCobrancas">
            <label for="usucodigo">Usucodigo:</label>
            <input type="text" name="usucodigo" value="1" class="disabled">
            <label for="mes">Mês:</label>
            <select id="mes" class="campolabelfiltro" name="mesoption">
                <option value="1">Janeiro</option>
                <option value="2">Fevereiro</option>
                <option value="3">Março</option>
                <option value="4">Abril</option>
                <option value="5">Maio</option>
                <option value="6">Junho</option>
                <option value="7">Julho</option>
                <option value="8">Agosto</option>
                <option value="9">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
            </select>
            <input type="submit" class="title" id="gerar-cobranca"
            onclick="gerarCobrancas()" value="Gerar Cobrancas">
        </form>
    </div>';
}

function getFooter(){
    // Carrega footer
    require_once("footer.php");
}

function executaProcessamentoPagina(){
    $bDebugger = false;
    if($bDebugger){
        echo '<hr> <h1>POST</h1>';
        echo "<pre>" . print_r($_POST, true)."</pre>";
    
        echo '<hr> <h1>GET</h1>';
        echo "<pre>" . print_r($_GET, true)."</pre>";
    } else {
        echo '<hr><h1>Faturas geradas com sucesso!</h1>';
    }

    if(isset($_POST["usucodigo"])){
        $usucodigo = $_POST["usucodigo"];
    }

    if(isset($_POST["mesoption"])){
        $mes = $_POST["mesoption"];
    }

    // chama rotina do banco de dados
    require_once ("core/Query.php");
    
    $aListaMeses = $_POST["mesoption"];
    $usucodigo = $_POST["usucodigo"];
    
    criaFatura($usucodigo, $aListaMeses);
}

function listaDadosUsuarios($usucodigo){
    $sSql = "SELECT * FROM tbusuario ORDER BY 1";
    if($usucodigo){
        $sSql = "SELECT * FROM tbusuario where usucodigo = $usucodigo ORDER BY 1";
        if($usucodigo == 1){
            $sSql = "SELECT * FROM tbusuario ORDER BY 1";
        }
    }
    $aDados = Utils::selectAll($sSql);
    // echo 'Dados: <br> <pre>' . print_r($aDados, true). '</pre>';
}

define("STATUS_FATURA_EM_ABERTO", 1);
define ("STATUS_FATURA_PAGA",2);

// script
// drop table public.tbfatura;
//
//CREATE TABLE public.tbfatura (
//	id serial4 NOT NULL,
//	datavencimento date NOT NULL,
//	datapagamento date NOT NULL,
//	valorvencimento numeric(10, 2) NOT NULL,
//	valorpagamento numeric(10, 2) NOT NULL,
//	status int2 NOT NULL DEFAULT 1,
//	usucodigo int not null default 1,
//	CONSTRAINT pk_tbfatura PRIMARY KEY (id)
//);

function geraListaServicosPorUsuario($usucodigo, $idFatura, $mes, $ano_pagto){

    // lista os servicos e insere na tbfaturadetalhe
    $aDados = Utils::selectAll("
        select tbservico.codigoservico,
			   descricaoservico,
			   tbservico.circuito,
			   tbservico.valorservico
		  from tbservicousuario
    inner join tbservico on (tbservico.codigoservico = tbservicousuario.codigoservico)
         where tbservicousuario.usucodigo = $usucodigo");
    
    ///echo '<hr>';
    $valorTotalFatura = 0;
    foreach ($aDados as $oDadosUsuario){
        //echo '<br>Usuario:' . json_encode($oDadosUsuario);
        //echo 'codigoservico:' . $oDadosUsuario["codigoservico"];
    
        $codigoservico    = $oDadosUsuario["codigoservico"];
        $descricaoservico = $oDadosUsuario["descricaoservico"];
        $circuito         = $oDadosUsuario["circuito"];
        $valorservico     = $oDadosUsuario["valorservico"];
    
        $valorTotalFatura = $valorTotalFatura + floatval($valorservico);
        
        $datainicio = $ano_pagto . "-" . $mes . "-01";
        $datafim = $ano_pagto . "-" . $mes . '-30';
        if($mes == 2){
            $datafim = $ano_pagto . "-" . $mes . '-28';
        }
        
        // inserir os dados de detalhes da fatura
        $sql_insert_detalhe = "INSERT INTO public.tbfaturadetalhe (idfatura, codigoservico, descricaoservico,datainicioservico, datafimservico, circuito, valorservico)
         VALUES($idFatura, $codigoservico, '$descricaoservico', '$datainicio', '$datafim', '$circuito', $valorservico);";
    
        // Executa sql de insert no banco de dados
        Utils::executaQuery($sql_insert_detalhe);
    }
    
    return $totalServico = 100;
}

// tbservicousuario - lista de servico por usuario
function criaFatura($usucodigo, $aListaMeses){

    // Todos os meses
    if($aListaMeses == 99){
        $aListaMeses = array(1,2,3,4,5,6,7,8,9,10,11,12);
    } else {
        $aListaMeses = array($aListaMeses);
    }
    
    // Percorre os meses que deve gerar fatura
    foreach ($aListaMeses as $mes){

        if($mes < 10){
            $mes = '0' . $mes;
        }

        $mes_pagto = $mes;
        $ano_pagto = 2022;
        if(intval($mes) == 12){
            $mes_pagto = '01';
            $ano_pagto = $ano_pagto + 1;
        }

        $data_vencimento = $ano_pagto . '-' . $mes . '-10';
        $data_pagamento = $ano_pagto . '-' . $mes_pagto . '-10';

        // gera a lista de servicos
        $aDados = Utils::select("select nextval('public.tbfatura_id_seq') as id");
        $idFatura = $aDados["id"];
        
        // echo 'id da fatura gerado: ' . $idFatura;
        
        $valorFatura = geraListaServicosPorUsuario($usucodigo, $idFatura, $mes, $ano_pagto);

        $valorvencimento = $valorFatura;
        $valorpagamento  = 0;
        $status          = STATUS_FATURA_EM_ABERTO;
        $sql_insert_fatura = "INSERT INTO public.tbfatura
            (id, datavencimento, datapagamento, valorvencimento, valorpagamento, status, usucodigo)
            VALUES($idFatura,
                   '$data_vencimento',
                   '$data_pagamento',
                   $valorvencimento, $valorpagamento, $status, $usucodigo);";
    
        // Executa sql de insert no banco de dados
        Utils::executaQuery($sql_insert_fatura);
    }

}

// Monta a pagina
getHeader();

getCorpo();

getFooter();


