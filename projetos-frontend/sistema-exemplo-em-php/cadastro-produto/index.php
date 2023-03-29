<?php
//
//require_once ("core/Query.php");
//
///* @var $oQuery Query */
//$oQuery = new Query();
//
//$aListaPessoa = $oQuery->selectAll("select * from tbpessoa order by pesnome");
//$aListaEndereco = $oQuery->selectAll("select * from tblogradouro order by logdescricao");


/*
 * script de criacao do produto
 *

CREATE TABLE public.tbproduto (
	codigo int4 NOT NULL,
	descricao varchar(100) NOT NULL,
	preco int2 NOT NULL,
	CONSTRAINT tbproduto_pkey PRIMARY KEY (codigo)
);

INSERT INTO public.tbproduto
(codigo, descricao, preco)
VALUES(1, 'Arroz', 15);

INSERT INTO public.tbproduto
(codigo, descricao, preco)
VALUES(2, 'Feijão', 10);

INSERT INTO public.tbproduto
(codigo, descricao, preco)
VALUES(3, 'Açucar', 15);

INSERT INTO public.tbproduto
(codigo, descricao, preco)
VALUES(4, 'Azeite', 15);

INSERT INTO public.tbproduto
(codigo, descricao, preco)
VALUES(5, 'Leite', 15);

INSERT INTO public.tbproduto
(codigo, descricao, preco)
VALUES(6, 'Carne', 15);

INSERT INTO public.tbproduto
(codigo, descricao, preco)
VALUES(7, 'Tomate', 15);

INSERT INTO public.tbproduto
(codigo, descricao, preco)
VALUES(8, 'Banana', 15);

INSERT INTO public.tbproduto
(codigo, descricao, preco)
VALUES(9, 'Pera', 15);

INSERT INTO public.tbproduto
(codigo, descricao, preco)
VALUES(10, 'Uva', 15);

*/

//$mensagem = '<pre>' . print_r($mensagem, true).'</pre>';

// Cadastro Produto

// 0 - ok - Criar pasta e arquivo index

// 1 - ok - Tabela banco de dados

// 2 - ok - Cadastro em html

// 3 - ok - Inclusao

// 4 - ok - Consulta

// 5 - ok - Alteracao

// 6 - ok - Exclusao

$html_cadastro = '
<div style="margin-left: 100px;">
        <br>
        <br>
        <br>
        <h1>Inclusao de Produto</h1>
        <form action="inserirproduto.php" method="post">
            <input id="acao" name="acao" type="hidden" value="EXECUTA_INCLUSAO">
        
            <label for="codigo">Código:</label>
            <input type="text" id="codigo" name="codigo" disabled size="5">
            
            <br><br>
            <label for="descricao">Descrição:</label>
            <br>
            <input type="text" id="descricao" name="descricao" size="75">
            
            <br><br>
            <label for="preco">Preço:</label>
            <br>
            <input type="text" id="preco" name="preco" size="75">
            
            <br><br>
            <input type="submit" value="Confirmar">
        </form>
    </div>';

echo $html_cadastro;





































