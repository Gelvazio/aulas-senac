drop table piloto;
create  table piloto (
    codigo_piloto int not null,
    nome_piloto varchar(100),
    salario numeric (9,2),
    gratificacao numeric (9,2),
    companhia varchar(30),
    pais varchar(15),
    data_cadastro date,
    constraint pk_piloto primary key (codigo_piloto)  
);

comment on table piloto is 'tabela que armazena os dados do piloto';
comment on column piloto.codigo_piloto is 'campo chave de piloto';
comment on column piloto.nome_piloto is 'nome do piloto';
comment on column piloto.salario is 'salario do piloto';
comment on column piloto.gratificacao is 'Gratificacao do piloto';
comment on column piloto.companhia is 'Campanhia doPiloto';
comment on column piloto.pais is 'Pais do Piloto';
comment on column piloto.data_cadastro is 'Data do Cadastro do Piloto';

drop table aeroporto;
create table aeroporto(
    codigo_aeroporto varchar(3) not null,
    nome_aeroporto varchar(100),
    cidade varchar(50),
    pais varchar(15),
    constraint pk_aeroporto primary key (codigo_aeroporto)
);

comment on table aeroporto is 'Tabela que armazena os dados do Aeroporto';
comment on column aeroporto.codigo_aeroporto is 'Campo chave do Aeroporto';
comment on column aeroporto.nome_aeroporto is 'nome do aeroporto';
comment on column aeroporto.cidade is 'cidade do aeroporto';
comment on column aeroporto.pais is 'pais do aeroporto';

drop table voo;
create table voo(
  codigo_voo varchar(6) not null,
    aeroporto_origem varchar(3),
    aeroporto_destino varchar(3),
    hora int,
    constraint pk_voo primary key (codigo_voo),
    constraint fk_aeroporto_origem foreign key (aeroporto_origem) references aeroporto (codigo_aeroporto),
    constraint fk_aeropoto_destino foreign key (aeroporto_destino) references aeroporto (codigo_aeroporto)
);

comment on table voo is 'tabela que Armazena os dados do voo';
comment on column voo.codigo_voo is 'Campo chave do voo';
comment on column voo.aeroporto_origem is 'Codigo do Aeroporto origem';
comment on column voo.aeroporto_destino is 'codigo do aeroporto destino';
comment on column voo.hora is 'Hora do Voo';

drop table escala;
create table escala (
    codigo_voo varchar(6) not null,
    data_voo date not null, 
    codigo_piloto int,
    aviao varchar(30),
    constraint pk_escala primary key (codigo_voo,data_voo),
    constraint fk_codigo_voo foreign key (codigo_voo) references voo (codigo_voo),
    constraint fk_codigo_piloto foreign key (codigo_piloto) references piloto (codigo_piloto)
);

comment on table escala is 'Tabela que armazena os dados da escala';
comment on column escala.codigo_voo is 'Codigo do voo da Escala (integra campo chave)';
comment on column escala.data_voo is 'Data do Voo da Escala (integra campo chave)';
comment on column escala.codigo_piloto is 'Codigo do piloto';
comment on column escala.aviao is 'descricao do Aviao da escala';
