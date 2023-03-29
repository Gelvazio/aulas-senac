create database prova;

create table prova.divida(
id int,
descricao varchar(50), 
valor decimal(10,2),
dataVenc date,
constraint Pk_divida primary key (id)
);

create table prova.funcionario(
matricula int,
nome varchar(50), 
email varchar(50),
salario decimal(10,2),
valorBonus decimal(10,2),
constraint Pk_funcionario primary key (matricula)
);

create table prova.bonus(
id int,
descricao varchar(30), 
salarioIni decimal(10,2),
salarioFim decimal(10,2),
percentual decimal(10,2),
constraint Pk_bonus primary key (id)
);

insert into prova.bonus values (1, 'b�nus de 30%', 1, 1000, 30);
insert into prova.bonus values (2, 'b�nus de 25%', 1001, 2000, 25);
insert into prova.bonus values (3, 'b�nus de 20%', 2001, 3000, 20);
insert into prova.bonus values (4, 'b�nus de 15%', 3001, 4000, 15);
insert into prova.bonus values (5, 'b�nus de 10%', 4001, 10000, 10);
insert into prova.bonus values (6, 'b�nus de 5%', 10001, 1000000000, 5);
