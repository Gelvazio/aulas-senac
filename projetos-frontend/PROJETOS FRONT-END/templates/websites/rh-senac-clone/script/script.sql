CREATE TABLE public.tbfolha (
	focodigo serial4 NOT NULL,
	clicodigo int2 NOT NULL,
	tipo varchar(100) NOT NULL,
	competencia date NOT NULL,
	provento numeric(10, 2) NOT NULL,
	desconto numeric(10, 2) NOT NULL,
	liquido numeric(10, 2) NOT NULL,
	CONSTRAINT pk_tbfolha PRIMARY KEY (focodigo)
);

-- Descricao das verbas da folha
CREATE TABLE public.tbfolhaverba (
	id serial4 NOT NULL,
	descricao varchar(100) NOT NULL,
    valorunitario numeric(10, 2) NOT NULL,
    tipo varchar (10) default 'RECEBER', --A RECEBER OU A PAGAR(DESCONTOS)
	CONSTRAINT pk_tbfolhaverba PRIMARY KEY (id)
);

CREATE TABLE public.tbfolhadetalhe (
	id serial4 NOT NULL,
	focodigo int NOT NULL,
	codigoverba int2 NOT NULL,
	quantidade int2 NOT NULL,
	provento numeric(10, 2) NOT NULL, --SOMA OS VALOR A RECEBER
	desconto numeric(10, 2) NOT NULL, -- SOMA OS VALOR DESCONTO
	CONSTRAINT pk_tbfolhadetalhe PRIMARY KEY (id, focodigo)
);

-- VERBAS
INSERT INTO public.tbfolhaverba (ID, descricao, valorunitario, tipo)
VALUES(5001, 'H.A.N.FIC', 30, 'RECEBER');

INSERT INTO public.tbfolhaverba (ID, descricao, valorunitario, tipo)
VALUES(5076, 'H.REUNIAO N.FIC', 30, 'RECEBER');

INSERT INTO public.tbfolhaverba (ID, descricao, valorunitario, tipo)
VALUES(5163, 'REP. REMUNERADO N.FIC', 30, 'RECEBER');

INSERT INTO public.tbfolhaverba (ID, descricao, valorunitario, tipo)
VALUES(5238, 'PROD. EVENTO N.FIC', 30, 'RECEBER');

INSERT INTO public.tbfolhaverba (ID, descricao, valorunitario, tipo)
VALUES(5282, 'F. ATIVIDADE AULA FIC', 30, 'RECEBER');

INSERT INTO public.tbfolhaverba (ID, descricao, valorunitario, tipo)
VALUES(1500, 'INSS SALARIO', 14, 'PAGAR');

INSERT INTO public.tbfolhaverba (ID, descricao, valorunitario, tipo)
VALUES(1600, 'IRRF SALARIO', 7.5, 'PAGAR');



-- SALDOS FINAIS
-- TOTAL BRUTO
-- TOTAL DESCONTOS
-- TOTAL LIQUIDO