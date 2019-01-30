# Mysql
## Montar base de datos Mysql (experiencia controlada)
```
$ sudo apt-get update

$ sudo apt-get install mysql-server

$ sudo mysql -u root 
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

mysql> USE mysql;
mysql> CREATE USER 'hackabos'@'localhost' IDENTIFIED BY 'hackabos';
mysql> GRANT ALL PRIVILEGES ON *.* TO 'hackabos'@'localhost';
mysql> UPDATE user SET plugin='auth_socket' WHERE User='hackabos';
mysql> FLUSH PRIVILEGES;
mysql> exit;

$ service mysql restart
$ mysql -u hackabos

$ apt-get install mysql-workbench
```
## Tablas
Almacemiento de la informacion
Los datos normalmente se organizan **Tablas** en **Campos** contenidos en **Filas**
Los campos son fijos dentro de una tabla 
### Tipos de tablas (ENGINE)
* **MyISAM** Gran almacenamiento de datos, sin transaccion
* **InnoDB** Versatilidad, transaciones, relaciones entre tablas
* **MERGE** Multiples tablas virtuales tipo MyISAM
* **MEMORY (HEAP)** Tablas temporales 
* **ARCHIVE** Almacenamiento en archivos
* **CSV** Almacenamient en archivos CSV (Comma separatted values). No admite nulos
* **FEDERATED** Almacenamiento remoto

## Vistas 
Consultas predefinidas que se visualizan como tablas

## Procedimientos
Pequeñas rutinas que permiten operar con los datos y realizar operaciones.

## Primary & Foreing keys

## Relaciones entre tablas
### 1-1
Solo existe un hijo
### 1-N
Los hijos solo tienen un padre, pero un padre solo puede tener un hijo
### N-M
Los hijos pueden tneer varios padres y los padres varios hijos

## Tipos de dato
### Tipos numéricos
* **TINYINT**	A very small integer
* **SMALLINT**	A small integer
* **MEDIUMINT**	A medium-sized integer
* **INT**	A standard integer
* **BIGINT**	A large integer
* **DECIMAL**	A fixed-point number
* **FLOAT**	A single-precision floating point number
* **DOUBLE**	A double-precision floating point number
* **BIT**	A bit field

### Tipo boolean
* **BOOLEAN** <==> TINYINT(1)

### Datos cadena / imagenes o ficheros
* **CHAR**	A fixed-length nonbinary (character) string
* **VARCHAR**	A variable-length non-binary string
* **BINARY**	A fixed-length binary string
* **VARBINARY**	A variable-length binary string
* **TINYBLOB**	A very small BLOB (binary large object)
* **BLOB**	A small BLOB
* **MEDIUMBLOB**	A medium-sized BLOB
* **LONGBLOB**	A large BLOB
* **TINYTEXT**	A very small non-binary string
* **TEXT**	A small non-binary string
* **MEDIUMTEXT**	A medium-sized non-binary string
* **LONGTEXT**	A large non-binary string
* **ENUM**	An enumeration; each column value may be assigned one enumeration member
* **SET**	A set; each column value may be assigned zero or more SET members

### Datos de fecha y hora
* **DATE**	A date value in CCYY-MM-DD format
* **TIME**	A time value in hh:mm:ss format
* **DATETIME**	A date and time value inCCYY-MM-DD hh:mm:ssformat
* **TIMESTAMP**	A timestamp value in CCYY-MM-DD hh:mm:ss format
* **YEAR**	A year value in CCYY or YY format

### Datos geográficos
* **GEOMETRY**	A spatial value of any type
* **POINT**	A point (a pair of X-Y coordinates)
* **LINESTRING**	A curve (one or more POINT values)
* **POLYGON**	A polygon
* **GEOMETRYCOLLECTION**	A collection of GEOMETRYvalues
* **MULTILINESTRING**	A collection of LINESTRINGvalues
* **MULTIPOINT**	A collection of POINTvalues
* **MULTIPOLYGON**	A collection of POLYGONvalues
### Documentos
* **JSON** Optimización de almacenamieto y consulta

Instruccuines de mantenimiento y definición
 Select Database
 CREATE DATABASE
 DROP DATABASE
Manage Databases
 Table Types
  Data Types
 CREATE TABLE
 Primary Key
 Foreign Key
 UNIQUE Constraint
 CHECK Constraint
 NOT NULL Constraint
 Sequence
 ALTER TABLE
 ADD COLUMN
 DROP COLUMN
 RENAME TABLE
 DROP TABLE
 Temporary Table
 TRUNCATE TABLE
Consultas basicas CRUD
Select
Insert
Update 
Delete
Consultas complejas (JOIN)

Optimización de consultas
Triggers
Seguridad (permisos)
Conectividad (cadenas de conexión)

Creación de una base de datos de ejemplo para el siguiente módulo
Import/Export
http://downloads.mysql.com/docs/sakila-db.tar.gz
https://dev.mysql.com/doc/employee/en/employees-installation.html
http://www.ntu.edu.sg/home/ehchua/programming/sql/sampledatabases.html
http://www.mysqltutorial.org/mysql-self-join/
https://repository.genmymodel.com/diagrams/database
Relaciones reflexivas (relaciones con sigo mismo)
Clases
Diseño de una base de datos normalizada


