
//insert da tabela tbmedico
INSERT INTO cadastro.tbmedico(mednome,medespecialidade)VALUES('Maria','Pediatra');
INSERT INTO cadastro.tbmedico(mednome,medespecialidade)VALUES('Glauco','Pediatra');
INSERT INTO cadastro.tbmedico(mednome,medespecialidade)VALUES('Aldo','Pediatra');

//insert da tabela tbpaciente
INSERT INTO cadastro.tbpaciente(paccodigo,pacnome)VALUES(1,'João');
INSERT INTO cadastro.tbpaciente(paccodigo,pacnome)VALUES(2,'Pedro');
INSERT INTO cadastro.tbpaciente(paccodigo,pacnome)VALUES(3,'Paulo');

//insert da tabela tbagenda
INSERT INTO cadastro.tbagenda(medcodigo,paccodigo,agedata,agehora)VALUES(1,1,'01.05.2016','17:00');
INSERT INTO cadastro.tbagenda(medcodigo,paccodigo,agedata,agehora)VALUES(2,2,'01.05.2016','17:00');
INSERT INTO cadastro.tbagenda(medcodigo,paccodigo,agedata,agehora)VALUES(3,2,'01.08.2016','17:00');

