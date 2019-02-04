Montar MongoDB
		Creación bases de datos
		Colecciones
Documentos		
		Consulta de datos (indexación, agregación, limitar documentos)
# MongoDB 
MongoDB es probablemente la opción de base de datos NoSQL más frecuente para el backend de las aplicaciones web. Es una fuente abierta y relativamente fácil de usar. Funciona bien con las aplicaciones web modernas escritas en Node.js o Python. 

Trabajar con MongoDB es bastante diferente de las bases de datos relacionales, ya que su lenguaje de consulta es completamente diferente de SQL. Realiza la misma operación CURD, las funciones de carga de archivos planos, las consultas condicionales y las funciones de agregación que el mundo relacional. Con MongoDB, no existen los join (relaciones entre tablas).
Trabajar con MongoDB es bastante diferente de las bases de datos relacionales, ya que su lenguaje de consulta es completamente diferente de SQL. Realiza la misma operación CURD, las funciones de carga de archivos planos, las consultas condicionales y las funciones de agregación que el mundo relacional. Con MongoDB, no existen los join (relaciones entre tablas).

## Organizacion de la informacíón
* Servidor
  * Base de datos
    * Colección
      * Documentos
        * Campos

* Mongod: Servidor de bases de datos de MongoDB
* Mongo: Cliente para la interacción con la base de datos MongoDB
* Mongofiles: Herramienta para trabajar con ficheros directamente sobre la base de datos MongoDB


Alta escalabilidad

### Replicación 
* VOlatilidad
* Servidor Maestro - Servidor Esclavos

### Escalabilidad horizontal
Añadir nuevos servidores (nodos) que permitan el almacenamieto distribuido entre diversas máquinas.
1. Limites potenciales de la escalabilidad
2. Tolerancia a fallos
3. Facilidad de administración
4. Facilidad de implementación
5. Expectativa de escalabilidad de rendimiento

**Sharding**
Método para dividir los datos a lo largo de los múltiples servidores de la solución de manera automática

1. Un clúster transparente
2. Disponibilidad para lecturas y escrituras
3. Crecimiento ágil

**Balanceo**

**El cluster**
* Shards para el almacenamiento distribuido de datos
* Mongos para enrutar las peticiones hacia el dato correcto
* Configuracion servidor para hacer el seguimiento del estado del clúster

## Instrucciones
[Referencia](https://docs.mongodb.com/manual/reference)
Ejecutar cliente
```
> mongo
```
Lista de instrucciones
```
db.help()
```

db.nombrecoleccion.instruccion()
```
db.idiomas.insert({nombre:'Español',origen:'Reino de Castilla',ranking:'3'})

db.idiomas.find()
```

db.idiomas.find({nombre:'Español'})
Los datos deben tener un campo _id (generado por usuario) o un ObjectId (generado por el sistema)

### Find
```
db.collection.find(query, projection)
db.collection.find( { qty: { $gt: 4 } } )
```
### Update
```
db.collection.insert(
   <document or array of documents>,
   {
     writeConcern: <document>,
     ordered: <boolean>
   }
)
db.collection.update({nombre: ‘Español’}, {$set: {origen: ‘Castila y León}})
```
* $set: establece el valor de un campo
* $inc: incrementa o decrementa un campo en función del valor indicado
* $unset: elimina un campo añadido
* $push: añade un valor al campo, trabajando con arrays
* $addtoSet: añade valores a un array
* $pop: elimina el último elemento de un array
* $pull: elimina todas las concurrencias que coincidan con el valor  indicado para el campo requerido
* $rename: renombrado de un campo
* $bit: actualización bit a bit de un campo
```
db.people.update(
   { name: "Andy" },
   {
      name: "Andy",
      rating: 1,
      score: 1
   },
   { upsert: true }
)
```
### Remove
```
db.collection.remove(
   <query>,
   {
     justOne: <boolean>,
     writeConcern: <document>,
     collation: <document>
   }
)

db.bios.remove( { } )
db.products.remove( { qty: { $gt: 20 } } )

```
