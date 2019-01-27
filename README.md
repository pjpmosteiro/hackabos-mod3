# Módulo 3 Javascript avanzado y bases de datos

## Objetivos

Establecer conceptos avanzados de programación y practicar con diferentes algoritmos y patrones de trabajo. Aprenderemos a manejar las bases de datos donde se guardará la información

## Contenido

### Programación orientada a Objetos
Los objetos son entidades que tienen un determinado estado, comportamiento e identidad.
Reflejan objetos 'reales' que contienen datos y funciones

##### Objeto
* Métodos: Acciones/Comportamiento
* Atributos: Características,Estado e Identidad
Una aplicación es un conjunto de objetos que interactuan entre si.

##### Técnicas
* Herencia: Nuevas clases partiendo de otras existentes compartiendo métodos y atributos
* Abstracción:Aislar de contexto. Clase base que no tiene identidad real
* Polimorfismo: El mismo método puede hacer cosas diferentes según sea el objeto	
* Encapsulamiento: Algunas propiedades sólo pueden ser editadas internamente por el objeto
Nota: Esto puede aplicarse a casi cualquier lenguaje: C#, C++, Java

[Ejemplo 1](OOJavascript/ejemplo1.md)

[Ejemplo 2](OOJavascript/ejemplo2.md)

[Ejemplo 2](OOJavascript/ejemplo3.md)

[Ejemplo 4](OOJavascript/ejemplo4.js)

### Programacion OO en Javascript
 
 * Basada en Prototype 
	* Original
	* No encapsulamiento
 * Basada en Orientada a Objetos


Beneficios 

* Los objetos modelados en 'cosas' reales es el elemento pricipal de cualquier aplicacion orientada a objetos
* Encapsulacion protege a la información de ediciones no controladas.
* Los objetos tienen funciones que trabajan sobre los propios datos que estos contienen.
* LAs clases so como plantillas para instanciar objetos.
* La herencia es una herramienta para evitar la redundancia.
* La programación OO es facil de 'leer'.

### Bases de datos
#### Mysql
#### MongoDB
	
	Cuando utilizar:https://aukera.es/blog/bases-de-datos-relacionales-vs-no-relacionales/

### Algoritmos básicos

Expresiones regulares 
[Lesson Regular Expressions](Algorithms\regularExpresion.md)
Arrays: pop, push Iteraciones
[Array1](Algorithms\array.example.js)
[Array2](Algorithms\array.exercises.js)

Arrays multidimensionales
[Array1](Algorithms\arraymulti.exercise1.js)

Listas Enlazadas (Linked list)
[Linked](Algorithms\linked.exercise1.js)
Arboles de datos
[Tree Exercice](Algorithms\tree.exercise1.js)


Ordenacion 
[Theory](https://en.wikipedia.org/wiki/Sorting_algorithm)
[Basic Sort](Algorithms\sorting.basic.js)
[Bubble Sort](Algorithms\sorting.bubble.js)
[Merge Sort](Algorithms\sorting.merge.js)

### Patrones de diseño
#### Factory Design Pattern
DEfine una interfaz para crear un objeto, pero posibilita la elección de la clase que se quiere instanciar.

La 'factoría' crea nuevos objetos segun las especificaciones del cliente. 

Los objetos que participan son : El creador, el objeto abstracto y el objecto concreto.

#### Prototype Design Pattern
El patrón Prototipo crea nuevos objecto inicializados con valores copiados de un 'prototipo'.

Un ejemplo del patrón es la inicializacon de objetos con valores por defecto en base de datos. El objeto prototipo contiene los valores por defecto que se copiarań a los nuevos objetos.

Los objetos que participan son : El cliente, el prototipo y los clones.

#### Singleton
Asegura que una clase solo tiene una única instancia y provee un punto de acceso global al objeto.

El patrón limita el numero de instancias de un objeto particular a uno solo. Se clase se denomina Singleton.

Los objetos que participan son : Singleton 
#### Observer Design Pattern
Define una dependencia uno-a-muchos entre objetos que cuando un objeto cambia de estado, todos los objetos dependientes son notificados y actualizados automáticamente.

El Observador ofrece un modelo de subscripción en el cual los objetos se susvriben aun evento y son notificados cuando el evento ocurre.

Los objetos que participan son : Sujeto y los Observadores

Otros
https://www.dofactory.com/javascript/design-patterns

### Testing TDD

