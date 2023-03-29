<?php
require_once ("index.html");
return true;

require_once ("Characters.php");

$characters = new Characters();
$characters->getCharacters();

//echo '<pre>' . print_r($result, true). '</pre>';

