<?php

echo '<!DOCTYPE html>
<html lang="en-US">

<head>

    <title>Central do assinante - Rede Unifique</title>

    <link href="./unifique_files/jquery-ui-1.10.4.min.css" rel="stylesheet">
    <link href="./unifique_files/bootstrap.min.css" rel="stylesheet">
    <link href="./unifique_files/bootstrap-select.min.css" rel="stylesheet">
    <link href="./unifique_files/magic-bootstrap.css" rel="stylesheet">
    <link href="./unifique_files/jasny-bootstrap.min.css" rel="stylesheet">
    <link href="./unifique_files/bootstrap-colorpicker.min.css" rel="stylesheet">
    <link href="./unifique_files/theme.css" rel="stylesheet">
    <link rel="stylesheet" href="./unifique_files/font-awesome.min.css">
    <link href="./unifique_files/css2" rel="stylesheet">

    <link rel="stylesheet" href="./css/styles.css">
    <link rel="stylesheet" href="./css/theme.css">

    <style>
        .container {
            display: flex;
            justify-content: center;
            width: 100vw;
            flex-direction: column;
        }

        .centraliza-cabecalho {
            display: flex;
            justify-content: center;
            width: 100vw;
            flex-direction: column;
            align-items: center;
        }

        .containerTable-body {
            overflow: scroll;
        }

        .hide {
            display: none;
        }

        .content-modal-fatura {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        #gerar-cobranca {
            cursor: pointer;
        }
    </style>
</head>

<!-- inicia filtrando apenas as faturas em aberto -->

<body onload="onLoadPaginas()">
    <!-- Fixed navbar -->
    <div class="centraliza-cabecalho">
        <div class="navbar navbar-default navbar-fixed-top visible-xs" role="navigation">
            <div class="container centro">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#/cobrancas/pagas/#">Central do assinante</a>
                </div>
                <!-- Minimizado -->
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#/">Home</a></li>
                        <li><a href="#/cobrancas/pagas/" onclick="registraLog(cobrancasPagas)" class="current">Cobrancas pagas</a></li>
                        <li><a href="#/cobrancas/abertas/" onclick="registraLog(cobrancasEmAberto)">Cobrancas em aberto</a></li>
                        <li class="disabled"><a href="#/gerenciar/emails/" onclick="registraLog(gerenciarEmails)">Gerenciar e-mails</a></li>
                        <li class="disabled"><a href="#/gerenciar/dominios/" onclick="registraLog(gerenciarDominios)">Gerenciar dominios</a></li>
                        <li class="disabled"><a href="#/gerenciar/ftps/" onclick="registraLog(usuariosFtps)">Usu�rios de FTPs</a></li>
                        <li class="disabled"><a href="#/gerenciar/bancodedados/" onclick="registraLog(bancoDeDados)">Banco de dados</a></li>
                        <li><a href="#/telefonia/" onclick="registraLog(telefonia)">Telefonia</a></li>
                        <li><a href="#/tv/" onclick="registraLog(tv)">TV</a></li>
                        <li><a href="#/internet/wifi/" onclick="registraLog(redeSenhaWifi)">Rede e Senha Wi-Fi</a></li>
                        <li><a href="#/ouvidoria/" onclick="registraLog(ouvidoria)">Ouvidoria</a></li>
                        <li><a href="#/suporte/" onclick="registraLog(suporte)">Solicitar suporte</a></li>
                        <li><a href="login/logout.php">Sair</a></li>
                    </ul>
                </div>
                <!--/.nav-collapse -->
            </div>
        </div>

        <img style="max-width:432px;" src="./unifique_files/logo2017.png" width="100%">

        <!-- Maximizado -->
        <ul class="iconMenuDark hidden-xs background-menu">
            <li><a title="Cobrancas pagas" href="#" onclick="atualizaFaturas(2)" class="current"><span class="ico_light_cobrancas_pagas"></span>Cobrancas Pagas</a></li>
            <li><a title="Cobrancas em aberto" href="#" onclick="atualizaFaturas(1)"><span class="ico_light_cobrancas_abertas"></span>Cobrancas em aberto</a></li>
            <li class="disabled"><a title="Gerenciar e-mails (Plano nao contratado)" href="#/cobrancas/pagas/#" onclick="registraLog(gerenciarEmails)"><span class="ico_light_emails"></span>Gerenciar e-mails</a></li>
            <li class="disabled"><a title="Gerenciar dominios (Plano nao contratado)" href="#/cobrancas/pagas/#" onclick="registraLog(gerenciarDominios)"><span class="ico_light_dominios"></span>Gerenciar dominios</a></li>
            <li class="disabled"><a title="Gerenciar usuarios de FTP (Plano nao contratado)" href="#/cobrancas/pagas/#" onclick="registraLog(usuariosFtps)"><span class="ico_light_ftps"></span>Usuarios de FTPs</a></li>
            <li class="disabled"><a title="Gerenciar banco de dados (Plano nao contratado)" href="#/cobrancas/pagas/#" onclick="registraLog(bancoDeDados)"><span class="ico_light_bases"></span>Banco de dados</a></li>
            <li><a title="Gerenciar telefonia" href="#/telefonia/" onclick="registraLog(telefonia)"><span class="ico_light_telefonia"></span>Telefonia</a></li>
            <li><a title="Gerenciar TV" href="#/tv/" onclick="registraLog(tv)"><span class="ico_light_tv"></span>TV</a></li>
            <li><a title="Rede e Senha Wi-Fi" href="#/internet/wifi/" onclick="registraLog(redeSenhaWifi)"><span class="ico_light_rede"></span>Rede e Senha Wi-Fi</a></li>
            <li><a title="Ouvidoria" href="#/ouvidoria/" onclick="registraLog(ouvidoria)"><span class="ico_light_ouvidoria"></span>Ouvidoria</a></li>
            <li><a title="Contatos Suporte" href="#/suporte/" onclick="javascript:registraLog(suporte)"><span class="ico_light_suporte"></span>Contatos Suporte</a></li>
            <li><a title="Sair" href="login/logout.php"><span class="ico_light_sair"></span>Sair</a></li>
        </ul>
    </div>
    <div style="clear:both;"></div>
';
