CREATE DATABASE pruebaceiba;
CREATE TABLE pagos(
    documentoIdentificacionArrendatario INT(10) NOT NULL, 
    codigoInmueble VARCHAR(19) NOT NULL,
    fechaPago VARCHAR(10) NOT NULL,
    valorPagado INT(6)  NOT NULL,
    PRIMARY KEY (documentoIdentificacionArrendatario, codigoInmueble)  

);

