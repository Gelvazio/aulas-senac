<?php
require_once ("Requests.php");
class Characters extends Requests {

    public function callAllApi(){
        $aListPorts = array("characters","comics", "creators","events","series","stories");

        foreach ($aListPorts as $port){
            $result = $this->callApi($port);
            echo '<h1>DATA OF PORT </h1><hr/>' . strtoupper($port);
            echo '<pre>' . print_r($result, true). '</pre>';
        }
    }

    public function getCharacters(){

        return $this->callAllApi();


        $characters = $this->callApi();
        $result = $characters;


        if(count($result)){
            //var_export($result);
            $html = ' 
                <!DOCTYPE html>
                <html lang="en">
                
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <meta http-equiv="X-UA-Compatible" content="ie=edge">
                  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                  <title>Marvel API Example</title>
                </head>
                <body>
                  <div class="container">
                    <div class="row">';

                        if(count($result)){
                            foreach ($result['data']['results'] as $key1 => $aDados){
                                $heroName = "";
                                $imagem = '';
                                foreach ($aDados as $key => $value){
                                    if ($key == 'name') {
                                        $heroName = $value;
                                    }
                                    if ($key == 'thumbnail'){
                                        $imagem = $value['path'] . "." . $value['extension'];
                                    }
                                }

                                $html .='<div class="card" style="margin-top:10px ; margin-left:10px;">
                                    <img src="' . $imagem . '" style="width:200px; height: 200px; " class="card-img-top rounded">
                                    <div class="card-body">
                                        <p class="card-text"> ' . $heroName .'</p>
                                    </div>
                                </div>';
                            }
                        }

                        $html .= '
                    </div>
                  </div>
                </body>
                </html>';

            echo $html;
        }
    }

}