<?php
require_once("core/Utils.php");
require_once("default/header.php");

function consulta(){
    require_once("consulta/pages/consultapessoa.php");
}

function executaInclusao(){
    require_once ("core/Query.php");

    /* @var $oQuery Query */
    $oQuery = new Query();

    // buscar o ultimo codigo mais 1
    $sql_codigo_pessoa = "select pescodigo + 1 as codigo from tbpessoa order by pescodigo desc limit 1";

    $aDados = $oQuery->select($sql_codigo_pessoa);

    $pescodigo = $aDados["codigo"];
    $pesnome   = $_POST['nome'];
    $pessexo   = $_POST['sexo'];
    $pestipo   = $_POST['tipopessoa'];
    $logcodigo   = $_POST['logradouro'];

    $sql_insert = "INSERT INTO public.tbpessoa (pescodigo, pesnome, pessexo, pestipo, logcodigo)
                VALUES($pescodigo, '$pesnome', $pessexo, $pestipo, $logcodigo);";

    $oQuery->executaQuery($sql_insert);

    header('Location: pessoa.php?acao=CONSULTA');
}

function cadastro(){
    $html_cadastro = '<div class="section-home corpo_formulario">
        <div class="formulario">
            <div class="header-form">Pessoa</div>
            <form action="pessoa.php?acao=EXECUTA_INCLUSAO" method="post" id="formularioPessoa">
                <label for="nome">Nome</label>
                <input id="nome" name="nome" placeholder="Informe o nome..." type="text">
    
                <label for="sexo">Sexo</label>
                <select id="sexo" name="sexo">
                    <option value="0" selected>Não Informado</option>
                    <option value="1">Feminino</option>
                    <option value="2">Masculino</option>
                    <option value="3">Outros</option>
                </select>
        
                <label>Tipo Pessoa</label>
                <select id="tipopessoa" name="tipopessoa">
                    <option value="Nenhuma" selected>Selecione...</option>
                    <option value="1">Física</option>
                    <option value="2">Jurídica</option>
                    <option value="3">Outros</option>
                </select>
    
                <label>Logradouro</label>
                <select id="logradouro" name="logradouro">
                    <option value="1" selected>LISTAR DO BANCO DE DADOS</option>            
                </select>
                <input type="submit" value="Confirmar">
            </form>
        </div>
    </div>';

    echo $html_cadastro;
}

function executaAlteracaoCadastro(){
    require_once ("core/Query.php");

    /* @var $oQuery Query */
    $oQuery = new Query();

    $pescodigo = $_POST['pescodigo'];
    $pesnome   = $_POST['nome'];
    $pessexo   = $_POST['sexo'];
    $pestipo   = $_POST['tipopessoa'];
    $logcodigo = $_POST['logradouro'];

    $sql_update = "UPDATE public.tbpessoa SET pesnome='$pesnome', pessexo=$pessexo, pestipo=$pestipo, logcodigo=$logcodigo 
                    WHERE pescodigo=$pescodigo;";

    // Executa a alteracao no banco de dados
    $oQuery->executaQuery($sql_update);

    // Chama a tela de consulta
    header('Location: pessoa.php?acao=CONSULTA');
}

function executaExclusaoCadastro(){
    require_once ("core/Query.php");

    /* @var $oQuery Query */
    $oQuery = new Query();

    $pescodigo = $_GET["chave"];

    $valida_exclusao = true;

    $sql_lista_imoveis = "select * from tbimovel where pescodigo = $pescodigo";
    if($oDados = $oQuery->select($sql_lista_imoveis)){
        $valida_exclusao = false;
    }

    if($valida_exclusao){
        $sql_delete = "DELETE FROM public.tbpessoa WHERE pescodigo = $pescodigo;";

        // Executa a exclusao no banco de dados
        $oQuery->executaQuery($sql_delete);

        // Chama a tela de consulta
        header('Location: pessoa.php?acao=CONSULTA');
    } else {
        mostraMensagem("Pessoa com imoveis no nome, não e possivel excluir!");

        // ir para pagina de consulta de imoveis
    }
}

function alteracaoCadastro(){
    require_once ("core/Query.php");

    /* @var $oQuery Query */
    $oQuery = new Query();

    // Pega a chave da pessoa
    $pescodigo = $_GET["chave"];
    $sql_pessoa = "select * from tbpessoa where pescodigo = " . $pescodigo;

    $pesnome   = "";
    $logcodigo = "";

    $sexo_nao_informado = '';
    $sexo_feminino      = '';
    $sexo_masculino     = '';
    $sexo_outros        = '';

    $Fisica   = '';
    $Juridica = '';
    $Outros   = '';

    if($oDadosPessoa = $oQuery->select($sql_pessoa)){
        $pesnome   = $oDadosPessoa['pesnome'];
        $pessexo   = $oDadosPessoa['pessexo'];
        $pestipo   = $oDadosPessoa['pestipo'];
        $logcodigo = $oDadosPessoa['logcodigo'];

        switch ($pessexo){
            case 0:
                $sexo_nao_informado = ' selected ';
                break;
            case 1:
                $sexo_feminino = ' selected ';
                break;
            case 2:
                $sexo_masculino = ' selected ';
                break;
            case 3:
                $sexo_outros = ' selected ';
                break;
        }

        switch ($pestipo){
            case 1:
                $Fisica = ' selected ';
                break;
            case 2:
                $Juridica = ' selected ';
                break;
            case 3:
                $Outros = ' selected ';
                break;
        }
    } else {
        mostraMensagem('Pessoa não encontrada para alterar: ' . $pescodigo);
    }

    $html_cadastro = '<div class="section-home corpo_formulario">
        <div class="formulario">
            <div class="header-form">Pessoa</div>
            <form action="pessoa.php" method="post" id="formularioPessoa">
                <input id="pescodigo" name="pescodigo" type="hidden" value="' . $pescodigo . '">
                <input id="acao" name="acao" type="hidden" value="EXECUTA_ALTERACAO">
                
                <label for="nome">Nome</label>
                <input id="nome" name="nome" placeholder="Informe o nome..." type="text" value="' . $pesnome . '">
    
                <label for="sexo">Sexo</label>
                <select id="sexo" name="sexo">
                    <option value="0" ' . $sexo_nao_informado . '>Não Informado</option>
                    <option value="1" ' . $sexo_feminino . '>Feminino</option>
                    <option value="2" ' . $sexo_masculino . '>Masculino</option>
                    <option value="3" ' . $sexo_outros . '>Outros</option>
                </select>
        
                <label>Tipo Pessoa</label>
                <select id="tipopessoa" name="tipopessoa">
                    <option value="1" ' . $Fisica . '>Física</option>
                    <option value="2" ' . $Juridica . '>Jurídica</option>
                    <option value="3" ' . $Outros . '>Outros</option>
                </select>
    
                <label>Logradouro</label>
                <select id="logradouro" name="logradouro">
                    <option value="' . $logcodigo . '" selected>LISTAR DO BANCO DE DADOS</option>            
                </select>
                <input type="submit" value="Confirmar">
            </form>
        </div>
    </div>';

    echo $html_cadastro;
}

if(isset($_GET["acao"])){

    $acao = $_GET["acao"];

    switch ($acao){
        case 'CONSULTA':
            consulta();
        break;
        case 'INCLUSAO':
            cadastro();
            break;
        case 'EXECUTA_INCLUSAO':
            executaInclusao();
            break;
        case 'ALTERACAO':
            alteracaoCadastro();
            break;
        case 'EXCLUSAO':
            executaExclusaoCadastro();
            break;
        default:
            mostraMensagem('Acão invalida!');
            break;
    }
} else if(isset($_POST["acao"])){
    $acao = $_POST["acao"];

    switch ($acao){
        case 'EXECUTA_ALTERACAO':
            executaAlteracaoCadastro();
            break;
        default:
            mostraMensagem('Acão invalida!');
            break;
    }
} else {
    mostraMensagem('Acão nao encontrada para Pessoa!');
}

require_once("default/footer.php");



