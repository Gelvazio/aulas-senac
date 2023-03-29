 CREATE TABLE public.tbusuariounifique (
    usucodigo serial4 NOT NULL,
	usunome varchar(50) NOT NULL,
	usuemail varchar(60) NOT NULL,
	usucpf varchar(60) NOT NULL,
	ususenha varchar(200) NOT NULL,
	CONSTRAINT tbusuariounifique_pkey PRIMARY KEY (usucodigo)
);

drop table public.tbfatura;

CREATE TABLE public.tbfatura (
	id serial4 NOT NULL,
	datavencimento date NOT NULL,
	datapagamento date NOT NULL,
	valorvencimento numeric(10, 2) NOT NULL,
	valorpagamento numeric(10, 2) NOT NULL,
	status int2 NOT NULL DEFAULT 1,
	usucodigo int4 NOT NULL DEFAULT 1,
	CONSTRAINT pk_tbfatura PRIMARY KEY (id)
);

-- servicos

CREATE TABLE public.tbservico (
	codigoservico serial4 NOT NULL,
	descricaoservico varchar(200) NOT NULL,
	circuito varchar(100) null,
	valorservico numeric(10,2) not null,
	CONSTRAINT pk_tbservico PRIMARY KEY (codigoservico)
);

// lista os servicos por usuario [usucodigo]
CREATE TABLE public.tbservicousuario (
	codigoservico int NOT NULL,
	usucodigo int4 NOT NULL DEFAULT 1,
	CONSTRAINT pk_tbservicousuario PRIMARY KEY (codigoservico, usucodigo)
);


insert into tbfatura(datavencimento,datapagamento,valorvencimento,valorpagamento,status) values ('2022-10-08','2022-10-08',150.0,150.0,1);

insert into tbfatura(datavencimento,datapagamento,valorvencimento,valorpagamento,status) values ('2022-11-08','2022-12-08',150.0,150.0,1);

insert into tbfatura(datavencimento,datapagamento,valorvencimento,valorpagamento,status) values ('2022-12-08','2022-12-08',150.0,150.0,1);

insert into tbfatura(datavencimento,datapagamento,valorvencimento,valorpagamento,status) values ('2022-09-08','2022-09-08',150.0,150.0,1);

insert into tbfatura(datavencimento,datapagamento,valorvencimento,valorpagamento,status) values ('2022-08-08','2022-08-08',150.0,150.0,1);

insert into tbfatura(datavencimento,datapagamento,valorvencimento,valorpagamento,status) values ('2022-10-08','2022-10-08',150.0,150.0,2);

insert into tbfatura(datavencimento,datapagamento,valorvencimento,valorpagamento,status) values ('2022-11-08','2022-12-08',150.0,150.0,2);

insert into tbfatura(datavencimento,datapagamento,valorvencimento,valorpagamento,status) values ('2022-12-08','2022-12-08',150.0,150.0,2);

insert into tbfatura(datavencimento,datapagamento,valorvencimento,valorpagamento,status) values ('2022-09-08','2022-09-08',150.0,150.0,2);

insert into tbfatura(datavencimento,datapagamento,valorvencimento,valorpagamento,status) values ('2022-08-08','2022-08-08',150.0,150.0,2);

-- detalhes da fatura - criar tabela com detalhes da fatura
CREATE TABLE public.tbfaturadetalhe (
	id serial4 NOT NULL,
	idfatura integer NOT NULL,
	codigoservico integer NOT NULL,
	descricaoservico varchar(200) NOT NULL,
	datainicioservico date NOT NULL,
	datafimservico date NOT NULL,
	circuito varchar(100) null,
	valorservico numeric(10,2) not null,
	CONSTRAINT pk_tbfaturadetalhe PRIMARY KEY (id)
);

-- inserts de detalhes
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(7, 21, 1, 'Unifique Play+', '2022-11-01', '2022-11-30', '010000048484878', 14.90);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(8, 21, 2, 'Fique Fibra 250MB', '2022-11-01', '2022-11-30', '010000048484878', 59.57);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(9, 21, 3, 'Porta IP', '2022-11-01', '2022-11-30', '010000048484878', 25.53);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(10, 21, 4, 'Aluguel Equipamento', '2022-11-01', '2022-11-30', '010000048484878', 19.90);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(11, 21, 4, 'Fique Bem 80 Minutos', '2022-11-01', '2022-11-30', '010000048484878', 9.90);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(12, 21, 4, 'Telefone Utilizado', '2022-11-01', '2022-11-30', '010000048484878', 0.79);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(13, 22, 1, 'Unifique Play+', '2022-11-01', '2022-11-30', '010000048484878', 14.90);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(14, 22, 2, 'Fique Fibra 250MB', '2022-11-01', '2022-11-30', '010000048484878', 59.57);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(15, 22, 3, 'Porta IP', '2022-11-01', '2022-11-30', '010000048484878', 25.53);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(16, 22, 4, 'Aluguel Equipamento', '2022-11-01', '2022-11-30', '010000048484878', 19.90);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(17, 22, 4, 'Fique Bem 80 Minutos', '2022-11-01', '2022-11-30', '010000048484878', 9.90);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(18, 22, 4, 'Telefone Utilizado', '2022-11-01', '2022-11-30', '010000048484878', 0.79);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(19, 23, 1, 'Unifique Play+', '2022-11-01', '2022-11-30', '010000048484878', 14.90);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(20, 23, 2, 'Fique Fibra 250MB', '2022-11-01', '2022-11-30', '010000048484878', 59.57);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(21, 23, 3, 'Porta IP', '2022-11-01', '2022-11-30', '010000048484878', 25.53);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(22, 23, 4, 'Aluguel Equipamento', '2022-11-01', '2022-11-30', '010000048484878', 19.90);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(23, 23, 4, 'Fique Bem 80 Minutos', '2022-11-01', '2022-11-30', '010000048484878', 9.90);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(24, 23, 4, 'Telefone Utilizado', '2022-11-01', '2022-11-30', '010000048484878', 0.79);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(25, 24, 1, 'Unifique Play+', '2022-11-01', '2022-11-30', '010000048484878', 14.90);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(26, 24, 2, 'Fique Fibra 250MB', '2022-11-01', '2022-11-30', '010000048484878', 59.57);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(27, 24, 3, 'Porta IP', '2022-11-01', '2022-11-30', '010000048484878', 25.53);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(28, 24, 4, 'Aluguel Equipamento', '2022-11-01', '2022-11-30', '010000048484878', 19.90);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(29, 24, 4, 'Fique Bem 80 Minutos', '2022-11-01', '2022-11-30', '010000048484878', 9.90);
INSERT INTO public.tbfaturadetalhe
(id, idfatura, codigoservico, descricaoservico, datainicioservico, datafimservico, circuito, valorservico)
VALUES(30, 24, 4, 'Telefone Utilizado', '2022-11-01', '2022-11-30', '010000048484878', 0.79);


--servicos
INSERT INTO public.tbservico (descricaoservico, circuito, valorservico) VALUES('Unifique Play+', '010000048484878', 14.90);
INSERT INTO public.tbservico (descricaoservico, circuito, valorservico) VALUES('Fique Fibra 250MB', '010000048484878', 119.90);
INSERT INTO public.tbservico (descricaoservico, circuito, valorservico) VALUES('Porta IP+', '010000048484878', 50.0);
INSERT INTO public.tbservico (descricaoservico, circuito, valorservico) VALUES('Aluguel Equipamento', '010000048484878', 14.90);
INSERT INTO public.tbservico (descricaoservico, circuito, valorservico) VALUES('Fique Bem 80 Minutos', '010000048484878', 9.90);
INSERT INTO public.tbservico (descricaoservico, circuito, valorservico) VALUES('Telefone Utilizado', '010000048484878', 27.90);
--servicos por usuario - codigo usuario 1

insert into tbservicousuario(codigoservico,usucodigo) values(1,1);
insert into tbservicousuario(codigoservico,usucodigo) values(2,1);
insert into tbservicousuario(codigoservico,usucodigo) values(3,1);
insert into tbservicousuario(codigoservico,usucodigo) values(4,1);
insert into tbservicousuario(codigoservico,usucodigo) values(5,1);
insert into tbservicousuario(codigoservico,usucodigo) values(6,1);



