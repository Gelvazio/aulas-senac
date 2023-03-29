<?php

$html_cliente = " 
 <!DOCTYPE html>
<html lang=\"en\">

<head>
    <meta charset=\"UTF-8\">
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title>Cadastro Cliente</title>
    <link rel=\"stylesheet\" href=\"css/formulario.css\">
    <link rel=\"stylesheet\" href=\"css/style.css\">
    <link rel=\"stylesheet\" href=\"css/headers.css\" >
    <link rel=\"stylesheet\" href=\"css/footer.css\" >
</head>

<body>
   <header>
        <div class=\"navigation\">
            <ul class=\"menu\">
                <div class=\"close-btn\"></div>
                <li class=\"menu-item\"><a href=\"index.php\">Home</a></li>
                <li class=\"menu-item\"><a href=\"cliente.php?acao=CONSULTA\">Cliente</a></li>
            </ul>
        </div>
        <a class=\"logo\" href=\"#\">Sistema Comercial</a>
    </header>
    <div class=\"section-home corpo_formulario\">
        <div class='formulario'>
            <div class=\"header-form\">Cliente</div>
            <form action='inclusaocliente.php' data-viacep>
            
                <br>    
                <label for='cep'>Cep:</label>
                <input name=\"cep\" data-viacep-cep>
                
                <br>    
                <label for='endereco'>Endereco:</label>
                <input name=\"endereco\" data-viacep-endereco>
                
                <br>    
                <label for='bairro'>Bairro:</label>
                <input name=\"bairro\" data-viacep-bairro>
                
                <br>    
                <label for='cidade'>Cidade:</label>
                <input name=\"cidade\" data-viacep-cidade>
                
                <br>    
                <label for='estado'>Estado:</label>
                <input name=\"estado\" data-viacep-estado>
            </form>
        </div>
    </div>
    
    <script src=\"https://cdn.jsdelivr.net/npm/@vsilva472/jquery-viacep/dist/jquery-viacep.min.js\"></script>
    
</body>

    <footer class=\"fixarRodape\">
        <div class=\"direitos\">
        <p>&copy; Todos os direitos reservados.</p>                        
        </div>
        <div class=\"datahora\">
        <p>2022</p>                        
        </div>
    </footer>
</html>";

echo $html_cliente;