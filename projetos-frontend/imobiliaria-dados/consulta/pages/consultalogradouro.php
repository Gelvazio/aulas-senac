<?php

require_once ("core/Utils.php");

/**
 * Buscar os dados do banco de dados
 * @return void
 */
function getDadosConsulta(){
    require_once ("core/Query.php");

    /* @var $oQuery Query */
    $oQuery = new Query();

    $sql = " select tbpessoa.pescodigo,
                    tbpessoa.pesnome,
                case 
                    when tbpessoa.pestipo = 0 then 'outros'
                    when tbpessoa.pestipo = 1 then 'física'
                    when tbpessoa.pestipo = 2 then 'jurídica'
                end as tipopessoa,
                case 
                    when tbpessoa.pessexo = 0 then 'não informado'
                    when tbpessoa.pessexo = 1 then 'feminino'
                    when tbpessoa.pessexo = 2 then 'masculino'
                end as sexopessoa,
                tbpessoa.logcodigo,
                tblogradouro.logtipo,
                tblogradouro.logdescricao as descricaologradouro
           from tbpessoa
     inner join tblogradouro on (tbpessoa.logcodigo = tblogradouro.logcodigo) 
       order by pescodigo desc";

    $aDados = $oQuery->selectAll($sql);

    return $aDados;
}

function montaTabelaConsulta($aDadosPessoas){

//    mostraMensagem('<pre>' . print_r($aDadosPessoas, true).'</pre>');

    $html_tabela = '<table id="example" class="table table-striped table-bordered second" style="width:100%">
                        <thead>
                            <tr>
                                <th>Cód. Pessoa</th>
                                <th>Nome</th>
                                <th>Sexo</th>
                                <th>Tipo</th>
                                <th>Tipo Endereço</th>
                                <th>Logradouro</th>                                
                            </tr>
                        </thead>
                        <tbody>';

    $html_dados_table = '';
    foreach ($aDadosPessoas as $pessoa){
        // inicia a linha
        $html_dados_table .= "<tr>";

        // campos - colunas
        $html_dados_table .= "<td align='center'>" . $pessoa['pescodigo'] . "</td>";
        $html_dados_table .= "<td align='left'>"   . $pessoa['pesnome'] . "</td>";
        $html_dados_table .= "<td align='center'>" . $pessoa['sexopessoa'] . "</td>";
        $html_dados_table .= "<td align='center'>" . $pessoa['tipopessoa'] . "</td>";
//    $html_table .= "<td align='center'>" . $pessoa['logcodigo'] . "</td>";
        $html_dados_table .= "<td align='center'>" . $pessoa['logtipo'] . "</td>";
        $html_dados_table .= "<td align='center'>" . $pessoa['descricaologradouro'] . "</td>";

        // finaliza a linha
        $html_dados_table .= "</tr>";
    }


    $aListaDadosTeste = ' <tr>
                                <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>Edinburgh</td>
                                <td>61</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                            </tr>
                            <tr>
                                <td>Garrett Winters</td>
                                <td>Accountant</td>
                                <td>Tokyo</td>
                                <td>63</td>
                                <td>2011/07/25</td>
                                <td>$170,750</td>
                            </tr>
                            <tr>
                                <td>Ashton Cox</td>
                                <td>Junior Technical Author</td>
                                <td>San Francisco</td>
                                <td>66</td>
                                <td>2009/01/12</td>
                                <td>$86,000</td>
                            </tr>
                            <tr>
                                <td>Cedric Kelly</td>
                                <td>Senior Javascript Developer</td>
                                <td>Edinburgh</td>
                                <td>22</td>
                                <td>2012/03/29</td>
                                <td>$433,060</td>
                            </tr>
                            <tr>
                                <td>Airi Satou</td>
                                <td>Accountant</td>
                                <td>Tokyo</td>
                                <td>33</td>
                                <td>2008/11/28</td>
                                <td>$162,700</td>
                            </tr>
                            <tr>
                                <td>Brielle Williamson</td>
                                <td>Integration Specialist</td>
                                <td>New York</td>
                                <td>61</td>
                                <td>2012/12/02</td>
                                <td>$372,000</td>
                            </tr>
                            <tr>
                                <td>Herrod Chandler</td>
                                <td>Sales Assistant</td>
                                <td>San Francisco</td>
                                <td>59</td>
                                <td>2012/08/06</td>
                                <td>$137,500</td>
                            </tr>
                            <tr>
                                <td>Rhona Davidson</td>
                                <td>Integration Specialist</td>
                                <td>Tokyo</td>
                                <td>55</td>
                                <td>2010/10/14</td>
                                <td>$327,900</td>
                            </tr>
                            <tr>
                                <td>Michael Bruce</td>
                                <td>Javascript Developer</td>
                                <td>Singapore</td>
                                <td>29</td>
                                <td>2011/06/27</td>
                                <td>$183,000</td>
                            </tr>
                            <tr>
                                <td>Donna Snider</td>
                                <td>Customer Support</td>
                                <td>New York</td>
                                <td>27</td>
                                <td>2011/01/25</td>
                                <td>$112,000</td>
                            </tr>';

    $html_tabela .= $html_dados_table;

    $html_tabela .= '</tbody>
                        <tfoot>
                            <tr>
                                <th>Cód. Pessoa</th>
                                <th>Nome</th>
                                <th>Sexo</th>
                                <th>Tipo</th>
                                <th>Tipo Endereço</th>
                                <th>Logradouro</th>   
                            </tr>
                        </tfoot>
                    </table>';

    return $html_tabela;
}

function getConsulta($aDados){

    $html_tabela = montaTabelaConsulta($aDados);

    $html_consulta = '<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Consulta Pessoa</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" type="text/css" href="consulta/assets/vendor/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="consulta/assets/vendor/fonts/circular-std/style.css" >
    
    <link rel="stylesheet" type="text/css" href="consulta/assets/libs/css/style.css">
    <link rel="stylesheet" type="text/css" href="consulta/assets/vendor/fonts/fontawesome/css/fontawesome-all.css">
    <link rel="stylesheet" type="text/css" href="consulta/assets/vendor/datatables/css/dataTables.bootstrap4.css">
    <link rel="stylesheet" type="text/css" href="consulta/assets/vendor/datatables/css/buttons.bootstrap4.css">
    <link rel="stylesheet" type="text/css" href="consulta/assets/vendor/datatables/css/select.bootstrap4.css">
    <link rel="stylesheet" type="text/css" href="consulta/assets/vendor/datatables/css/fixedHeader.bootstrap4.css">
</head>

<body>
    <div class="dashboard-main-wrapper">
        <div class="dashboard-wrapper">
            <div class="container-fluid  dashboard-content">
                <!-- ============================================================== -->
                <!-- pageheader -->
                <!-- ============================================================== -->
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="page-header">
                            <h2 class="pageheader-title">Consulta Pessoa</h2>
                            <p class="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                            <div class="page-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="#" class="breadcrumb-link">Dashboard</a></li>
                                        <li class="breadcrumb-item"><a href="#" class="breadcrumb-link">Tables</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Data Tables</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ============================================================== -->
                <!-- end pageheader -->
                <!-- ============================================================== -->
                <div class="row">
                    <!-- ============================================================== -->
                    <!-- data table  -->
                    <!-- ============================================================== -->
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="mb-0">Data Tables - Print, Excel, CSV, PDF Buttons</h5>                                
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
									' . $html_tabela . '
								</div>
                            </div>
                        </div>
                    </div>
                    <!-- ============================================================== -->
                    <!-- end data table  -->
                    <!-- ============================================================== -->
                </div>
            </div>
        </div>
    </div>

    <script src="consulta/assets/vendor/jquery/jquery-3.3.1.min.js"></script>
    <script src="consulta/assets/vendor/bootstrap/js/bootstrap.bundle.js"></script>
    <script src="consulta/assets/vendor/slimscroll/jquery.slimscroll.js"></script>
    <script src="consulta/assets/vendor/multi-select/js/jquery.multi-select.js"></script>
    <script src="consulta/assets/libs/js/main-js.js"></script>
    <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
    <script src="consulta/assets/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.2/js/dataTables.buttons.min.js"></script>
    <script src="consulta/assets/vendor/datatables/js/buttons.bootstrap4.min.js"></script>
    <script src="consulta/assets/vendor/datatables/js/data-table.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.html5.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.print.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.colVis.min.js"></script>
    <script src="https://cdn.datatables.net/rowgroup/1.0.4/js/dataTables.rowGroup.min.js"></script>
    <script src="https://cdn.datatables.net/select/1.2.7/js/dataTables.select.min.js"></script>
    <script src="https://cdn.datatables.net/fixedheader/3.1.5/js/dataTables.fixedHeader.min.js"></script>
</body>';

    echo $html_consulta;
}

$aDados = getDadosConsulta();

getConsulta($aDados);




















