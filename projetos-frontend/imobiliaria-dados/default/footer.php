<?php
/* UPDATE ARQUIVOS FTP*/
require_once("core/Utils.php");

$dia = date("d");
$mes = date("m");
$ano = date("Y");

$hora = date("H:i:s");

$html_footer = '
    <footer class="fixarRodape">
        <div class="direitos">
        <p>&copy; Todos os direitos reservados.</p>                        
        </div>
        <div class="datahora">
        <p>' . $dia . ' de ' . getMesPorExtenso($mes) . ' de ' . $ano . '</p>                        
        </div>
    </footer>

    </body>        
    
     <script defer charset="utf-8" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</html>';

echo $html_footer;
