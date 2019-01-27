Montar base de datos Mysql (experiencia controlada)
sudo apt-get update
sudo apt-get install mysql-server

sudo ufw allow mysql
systemctl start mysql
systemctl enable mysql

sudo dpkg-reconfigure mysql-server-5.7


mysql_secure_installation


$ sudo mysql -u root # I had to use "sudo" since is new installation
update user set authentication_string=PASSWORD("hackabos") where User='root';

mysql> USE mysql;
mysql> CREATE USER 'hackabos'@'localhost' IDENTIFIED BY 'hackABOS.2019';
mysql> GRANT ALL PRIVILEGES ON *.* TO 'maglor_elf'@'localhost';
mysql> UPDATE user SET plugin='auth_socket' WHERE User='maglor_elf';
mysql> FLUSH PRIVILEGES;
mysql> exit;

$ service mysql restart
mysql -u hackabos


 CREATE DATABASE demodb;
SHOW DATABASES;
INSERT INTO mysql.user (User,Host,authentication_string,ssl_cipher,x509_issuer,x509_subject)
VALUES('demouser','localhost',PASSWORD('demopassword.A0'),'','','');
FLUSH PRIVILEGES;
SELECT User, Host, authentication_string FROM mysql.user;
GRANT ALL PRIVILEGES ON demodb.* to demouser@localhost;
FLUSH PRIVILEGES;
SHOW GRANTS FOR 'demouser'@'localhost';


apt-get install mysql-workbench

Tablas
Vistas 
Procedimientos
Campos
Tipos de dato
Primary & Foreing keys
Relaciones 1-1, 1-N, N-M
Consultas basicas CRUD
Consultas complejas (JOIN)
Optimización de consultas
Triggers
Seguridad (permisos)
Conectividad (cadenas de conexión)

Creación de una base de datos de ejemplo para el siguiente módulo
Import/Export
Relaciones reflexivas (relaciones con sigo mismo)
Clases
Diseño de una base de datos normalizada
