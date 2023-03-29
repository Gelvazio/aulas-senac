drop TABLE clinica.tbmedico;
drop TABLE clinica.tbpaciente;
drop TABLE clinica.tbconsulta;

CREATE TABLE clinica.tbmedico (
	medcodigo int4 NOT NULL,
	mednome varchar(200) NOT NULL,
	medespecialidade varchar(100) NOT NULL,
	CONSTRAINT pk_tbmedico PRIMARY KEY (medcodigo)
);

CREATE TABLE clinica.tbpaciente (
	paccodigo int4 NOT NULL,
	pacnome varchar(200) NOT NULL,
	CONSTRAINT pk_tbpaciente PRIMARY KEY (paccodigo)
);

CREATE TABLE clinica.tbconsulta (
	medcodigo int4 NOT NULL,
	paccodigo int4 NOT NULL,
	dataconsulta date NOT NULL,
	horaconsulta time NOT NULL,
	CONSTRAINT pk_tbconsulta PRIMARY KEY (medcodigo, paccodigo),
	CONSTRAINT "FK_TBCONSULTA=>TBMEDICO" FOREIGN KEY (medcodigo) REFERENCES clinica.tbmedico(medcodigo),
	CONSTRAINT "FK_TBCONSULTA=>TBPACIENTE" FOREIGN KEY (paccodigo) REFERENCES clinica.tbpaciente(paccodigo)
);


--MEDICOS 
INSERT INTO clinica.tbmedico
(medcodigo, mednome, medespecialidade)
VALUES(1, 'mauricio de nassau', 'Cardiologia');
INSERT INTO clinica.tbmedico
(medcodigo, mednome, medespecialidade)
VALUES(2, 'jorge amado', 'Dermatologista');
INSERT INTO clinica.tbmedico
(medcodigo, mednome, medespecialidade)
VALUES(3, 'paulo coelho', 'Cardiologia');
INSERT INTO clinica.tbmedico
(medcodigo, mednome, medespecialidade)
VALUES(4, 'William Bonner', 'Neurologista');

--PACIENTES 
INSERT INTO clinica.tbpaciente
(paccodigo, pacnome)
VALUES(1, 'Jabes Ribeiro');
INSERT INTO clinica.tbpaciente
(paccodigo, pacnome)
VALUES(2, 'Vane do Renascer');
INSERT INTO clinica.tbpaciente
(paccodigo, pacnome)
VALUES(3, 'Geraldo Simoes');
INSERT INTO clinica.tbpaciente
(paccodigo, pacnome)
VALUES(4, 'Capitao Azevedo');

