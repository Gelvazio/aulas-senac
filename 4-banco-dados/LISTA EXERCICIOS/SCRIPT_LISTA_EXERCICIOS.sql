create table ramo(
cd_ramo int,
ds_ramo varchar(50),
constraint PK_ramo primary key (cd_ramo));


create table tipo(
cd_tipo int,
ds_tipo varchar(50),
constraint PK_tipo primary key (cd_tipo));

create table municipio(
cd_municipio int,
ds_municipio varchar(50),
constraint PK_municipio primary key (cd_municipio));

create table assinante(
cd_assinante int,
nome varchar(50),
cd_ramo int,
cd_tipo int,
constraint PK_assinante primary key (cd_assinante),
constraint FK_assinante1 foreign key (cd_ramo) references ramo (cd_ramo),
constraint FK_assinante2 foreign key (cd_tipo) references tipo (cd_tipo));


create table endereco(
cd_endereco int,
ds_endereco varchar(50),
complemento varchar(50),
bairro varchar(50),
CEP varchar(50),
cd_assinante int,
cd_municipio int,
constraint PK_endereco primary key (cd_endereco),
constraint FK_end foreign key (cd_assinante) references assinante (cd_assinante),
constraint FK_end2 foreign key (cd_municipio) references municipio (cd_municipio));


create table telefone(
cd_fone int,
ddd varchar(3),
n_fone varchar(10),
cd_endereco int,
constraint PK_telefone primary key (cd_fone),
constraint FK_fone foreign key (cd_endereco) references endereco (cd_endereco));



insert into tipo values (1, 'PREMIUM');
insert into tipo values (2, 'BÁSICO');
insert into tipo values (3, 'GRÁTIS');
insert into tipo values (4, 'RESIDENCIAL');

insert into RAMO values (1, 'INFORMÁTICA');
insert into RAMO values (2, 'MEDICINA');
insert into RAMO values (3, 'COMÉRCIO');

insert into MUNICIPIO values (1, 'JOÃO CÂMARA');
insert into MUNICIPIO values (2, 'CEARA MIRIM');
insert into MUNICIPIO values (3, 'TOUROS');
insert into MUNICIPIO values (4, 'SÃO MIGUEL');
insert into MUNICIPIO values (5, 'PELOTAS');


INSERT INTO ASSINANTE VALUES (1, 'JOÃO', 1, 2);	
INSERT INTO ASSINANTE VALUES (2, 'JOSÉ', 2, 1);	
INSERT INTO ASSINANTE VALUES (3, 'MARIA', 2, 1);	
INSERT INTO ASSINANTE VALUES (4, 'MARIA BETÂNIA', 3, 3);	
INSERT INTO ASSINANTE VALUES (5, 'JOANA', 1, 1);	


INSERT INTO ENDERECO VALUES (1, 'RUA ABC', 'APTO 201', 'TESTE', '999999-00', 1, 1);
INSERT INTO ENDERECO VALUES (2, 'RUA TESTES ABC', '', 'TESTE', '999999-00', 1, 1);
INSERT INTO ENDERECO VALUES (3, 'RUA bbbbVVVVV', 'APTO 1201', 'CENTRO', '999999-00', 2, 4);
INSERT INTO ENDERECO VALUES (4, 'RUA VV', 'APTO 1201', 'CENTRO', '999999-00', 3, 5);
INSERT INTO ENDERECO VALUES (5, 'RUA testeVVVVV', 'APTO 1201', 'CENTRO', '999999-00', 4, 2);
INSERT INTO ENDERECO VALUES (6, 'RUA AtesteVVVVVVV', 'APTO 1201', 'CENTRO', '999999-00', 5, 3);

INSERT INTO TELEFONE VALUES (1, '84', '9999999999', 1);
INSERT INTO TELEFONE VALUES (2, '84', '9999999999', 5);
INSERT INTO TELEFONE VALUES (3, '84', '9999999999', 6);
INSERT INTO TELEFONE VALUES (4, '84', '9999999999', 2);





