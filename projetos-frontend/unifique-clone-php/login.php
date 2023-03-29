<?php

require_once ("core/Utils.php");

function setSessaoUsuario($usucodigo){
    $sql_usuario = "select usucodigo,usunome
                      from public.tbusuariounifique
                     where usucodigo = $usucodigo";
    
    $aDadosUsuario = Utils::select($sql_usuario);
    
    //Seta os dados do usuario na sessao
    session_start();
    $oUsuario = new stdClass();
    $oUsuario->usucodigo = $aDadosUsuario["usucodigo"];
    $oUsuario->nome = $aDadosUsuario["usunome"];
    
    $_SESSION["usuario"] = serialize($oUsuario);
}

function validaLogin($cpfcnpj, $password){
    // verificar se ja tem usuario para este cpf
    $sql_usuario_existente = "select usucodigo from public.tbusuariounifique
        where usucpf ilike '$cpfcnpj' and ususenha ilike '$password'";
    
    $aDadosUsuarioExistente = Utils::select($sql_usuario_existente);
    
    if(is_array($aDadosUsuarioExistente)){
        // verifica se tem dados no array
        if(intval($aDadosUsuarioExistente["usucodigo"]) > 0){
            
            $usucodigo = intval($aDadosUsuarioExistente["usucodigo"]);
            setSessaoUsuario($usucodigo);
            
            return true;
        }
    }
    
    return false;
}


/**
 * Cadastra o usuario no banco de dados
 * @param $nome
 * @param $email
 * @param $cpfcnpj
 * @param $password
 * @return bool|resource
 * @throws Exception
 */
function cadastraLogin($nome, $email, $cpfcnpj, $password){
  
    $sql_insert = "INSERT INTO public.tbusuariounifique (usunome, usuemail, usucpf, ususenha)
           VALUES('$nome', '$email', '$cpfcnpj', '$password');";
    
    // Executa sql de insert no banco de dados
    return Utils::executaQuery($sql_insert);
}

function validaCPFCadastrado($cpfcnpj){
    // verificar se ja tem usuario para este cpf
    $sql_usuario_existente = "select count(1) as total from public.tbusuariounifique where usucpf ilike '$cpfcnpj'";
    
    $aDadosUsuarioExistente = Utils::select($sql_usuario_existente);
    
    // verifica se tem dados no array
    if(intval($aDadosUsuarioExistente["total"]) > 0){
        return false;
    }
    
    return true;
}

if(isset($_POST["acao"])){
    $acao = $_POST["acao"];

    if($acao == "EXECUTA_LOGIN"){
        // EXECUTA A VALIDACAO DO LOGIN

        if(isset($_POST["cpfcnpj"])){
            $cpfcnpj = $_POST["cpfcnpj"];
            $password = $_POST["password"];

            if(validaLogin($cpfcnpj, $password)){
                header('Location:dashboard.php');
            } else {
                echo 'Usuário/Senha Invalido!';
            }
        }
    } else if($acao == "CADASTRA_LOGIN"){
        // EXECUTA O CADASTRO DO LOGIN

        if(isset($_POST["cpfcnpj"])){
            $nome = $_POST["nome"];
            $email = $_POST["email"];
            $cpfcnpj = $_POST["cpfcnpj"];
            $password = $_POST["password"];

            if(!validaCPFCadastrado($cpfcnpj)){
                echo 'Erro ao cadastrar usuario!Já existe um usuario com este cpf!' . $cpfcnpj;
                return false;
            }
            
            if(cadastraLogin($nome, $email, $cpfcnpj, $password)){
                header('Location:index.php');
            } else {
                echo 'Não foi possivel cadastrar o Usuário!';
            }
        }
    }
} else if(isset($_GET["acao"])){
    $acao = $_GET["acao"];

    switch ($acao){
        case "PRIMEIRO_ACESSO":
            // Redireciona para formulario de cadastro de usuarios
            header('Location:cadastrarusuario.php');
            break;
            case "ESQUECEU_SENHA":
                // Redireciona para formulario de esqueceu senha
                header('Location:esqueceusenhausuario.php');
            break;
        case "ALTERAR_SENHA":
            // Redireciona para formulario de alterar senha
            header('Location:alterarsenhausuario.php');
            break;
    }
    
} else {
    echo 'Acao nao encontrada!';
}
