<?php

$html = '<link href="css/headers.css" rel="stylesheet">
<link href="css/header.css" rel="stylesheet">
<header>
    <div class="navigation">
        <ul class="menu">
            <div class="close-btn"></div>
            <li class="menu-item"><a href="home.php">Home</a></li>
            <li class="menu-item">
                <a class="sub-btn" href="#">Cadastro <i class="fas fa-angle-down"></i></a>
                <ul class="sub-menu">
                    <li class="sub-item"><a href="alterarusuario.php">Usuario</a></li>
                    <li class="sub-item"><a href="usuarioformulario.php">Usuario Formulario</a></li>
                    <li class="sub-item"><a href="contato.php">Contato</a></li>
                    <li class="sub-item"><a href="portfolio.php">Portfólio</a></li>
                </ul>
            </li>
            <li class="menu-item">
                <a class="sub-btn" href="#">Faturamento<i class="fas fa-angle-down"></i></a>
                <ul class="sub-menu">
                    <li class="sub-item"><a href="cadastro-venda/consultavenda.php" id="transparent">Venda</a></li>
                    <li class="sub-item"><a href="cadastro-usuario/consultausuario.php" id="transparent">Usuario</a></li>
                    <li class="sub-item"><a href="cadastro-produto/index.php" id="transparent">Inclusão Produto</a></li>
                    <li class="sub-item"><a href="cadastro-produto/consultaproduto.php" id="transparent">Consulta Produto</a></li>
                    <li class="sub-item"><a href="cadastro-cliente/index.php" id="transparent">Inclusão Cliente</a></li>
                    <li class="sub-item"><a href="cadastro-cliente-william/index.php" id="transparent">Cliente William</a></li>
                    
                    <li class="sub-item"><a href="#">Sub Item 04</a></li>
                    <li class="sub-item more">
                        <a class="more-btn" href="#">More Items <i class="fas fa-angle-right"></i></a>
                        <ul class="more-menu">
                            <li class="more-item"><a href="#">More Item 01</a></li>
                            <li class="more-item"><a href="#">More Item 02</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="menu-item"><a href="produto.php">Produtos</a></li>
            <li class="menu-item"><a href="servicos.php">Serviços</a></li>
            <li class="menu-item"><a href="sobre.php">Sobre</a></li>
            <li class="menu-item"><a href="contato.php">Contato</a></li>
            <li class="menu-item"><a href="logout.php">Logout</a></li>
        </ul>
    </div>
    <div class="menu-btn"></div>
    <a class="logo" href="#">logo</a>
</header>';

echo $html;
