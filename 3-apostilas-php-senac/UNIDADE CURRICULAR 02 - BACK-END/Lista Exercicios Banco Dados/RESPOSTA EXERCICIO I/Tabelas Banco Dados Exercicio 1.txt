create table cadastro.tbpaciente(
	paccodigo integer not null,
	pacnome character varying(200),
	CONSTRAINT pk_pacodigo PRIMARY KEY (paccodigo)
);

CREATE TABLE cadastro.tbagenda(
  medcodigo integer NOT NULL,
  paccodigo integer NOT NULL,
  agdata date NOT NULL,
  aghora time without time zone NOT NULL,
  CONSTRAINT pk_tbagenda_hora PRIMARY KEY (aghora),
  
  CONSTRAINT fk_tbagenda_tbmedico FOREIGN KEY (medcodigo)
      REFERENCES cadastro.tbmedico (medcodigo),
	  
  CONSTRAINT fk_tbagenda_tbpaciente FOREIGN KEY (paccodigo)
      REFERENCES cadastro.tbpaciente (paccodigo)
  
);

create table cadastro.tbmedico(
	medcodigo integer not null,
	mednome character varying(200),
	medespecialidade character varying(200),
	CONSTRAINT pk_medcodigo PRIMARY KEY (medcodigo)
);