/*
CREATE TABLE public.tbfatura (
	id serial4 NOT NULL,
	datavencimento date NOT NULL,
	datapagamento date NOT NULL,
	valorvencimento numeric(10, 2) NOT NULL,
	valorpagamento numeric(10, 2) NOT NULL,
	status smallint default 1 not null, -- 1 = aberto e 2 = pago
	CONSTRAINT pk_tbfatura PRIMARY KEY (id)
);
*/

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


insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(21,1, 'Unifique Play+', '2022-11-01', '2022-11-30', '010000048484878', 14.9);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(21,2, 'Fique Fibra 250MB', '2022-11-01', '2022-11-30', '010000048484878', 59.57);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(21,3, 'Porta IP', '2022-11-01', '2022-11-30', '010000048484878', 25.53);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(21,4, 'Aluguel Equipamento', '2022-11-01', '2022-11-30', '010000048484878', 19.9);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(21,4, 'Fique Bem 80 Minutos', '2022-11-01', '2022-11-30', '010000048484878', 9.9);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(21,4, 'Telefone Utilizado', '2022-11-01', '2022-11-30', '010000048484878', 0.79);

insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(22,1, 'Unifique Play+', '2022-11-01', '2022-11-30', '010000048484878', 14.9);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(22,2, 'Fique Fibra 250MB', '2022-11-01', '2022-11-30', '010000048484878', 59.57);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(22,3, 'Porta IP', '2022-11-01', '2022-11-30', '010000048484878', 25.53);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(22,4, 'Aluguel Equipamento', '2022-11-01', '2022-11-30', '010000048484878', 19.9);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(22,4, 'Fique Bem 80 Minutos', '2022-11-01', '2022-11-30', '010000048484878', 9.9);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(22,4, 'Telefone Utilizado', '2022-11-01', '2022-11-30', '010000048484878', 0.79);

insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(23,1, 'Unifique Play+', '2022-11-01', '2022-11-30', '010000048484878', 14.9);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(23,2, 'Fique Fibra 250MB', '2022-11-01', '2022-11-30', '010000048484878', 59.57);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(23,3, 'Porta IP', '2022-11-01', '2022-11-30', '010000048484878', 25.53);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(23,4, 'Aluguel Equipamento', '2022-11-01', '2022-11-30', '010000048484878', 19.9);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(23,4, 'Fique Bem 80 Minutos', '2022-11-01', '2022-11-30', '010000048484878', 9.9);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(23,4, 'Telefone Utilizado', '2022-11-01', '2022-11-30', '010000048484878', 0.79);

insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(24,1, 'Unifique Play+', '2022-11-01', '2022-11-30', '010000048484878', 14.9);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(24,2, 'Fique Fibra 250MB', '2022-11-01', '2022-11-30', '010000048484878', 59.57);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(24,3, 'Porta IP', '2022-11-01', '2022-11-30', '010000048484878', 25.53);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(24,4, 'Aluguel Equipamento', '2022-11-01', '2022-11-30', '010000048484878', 19.9);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(24,4, 'Fique Bem 80 Minutos', '2022-11-01', '2022-11-30', '010000048484878', 9.9);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(24,4, 'Telefone Utilizado', '2022-11-01', '2022-11-30', '010000048484878', 0.79);


insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(25,1, 'Unifique Play+', '2022-11-01', '2022-11-30', '010000048484878', 14.9);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(25,2, 'Fique Fibra 250MB', '2022-11-01', '2022-11-30', '010000048484878', 59.57);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(25,3, 'Porta IP', '2022-11-01', '2022-11-30', '010000048484878', 25.53);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(25,4, 'Aluguel Equipamento', '2022-11-01', '2022-11-30', '010000048484878', 19.9);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(25,4, 'Fique Bem 80 Minutos', '2022-11-01', '2022-11-30', '010000048484878', 9.9);
insert into tbfaturadetalhe(idfatura,codigoservico,descricaoservico,datainicioservico,datafimservico,circuito,valorservico)values(25,4, 'Telefone Utilizado', '2022-11-01', '2022-11-30', '010000048484878', 0.79);
