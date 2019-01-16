# Expresiones regulares

Las expresiones regulares son patrones utilizados para encontrar una determinada combinación de caracteres dentro de una cadena de texto. En JavaScript, las expresiones regulares también son objetos. Estos patrones se utilizan en los métodos exec y test de RegExp, así como los métodos match, replace, search y split de String. En este capítulo se describe el uso y funcionamiento de las expresiones regulares en JavaScript.

var re = /ab+c/;

var re = new RegExp('ab+c');

## Patrones
/abc/    abc    

/ab*c/  abbc  ac

## Caracteres especiales
[CaracteresEspeciales](caracteresespeciales.html)

## Usando paréntesis
Los paréntesis alrededor de alguna parte del patrón de la expresión regular hacen que parte de la subcadena que coincida sea recordada. Una vez recordada, puede ser rellamada en otro uso, como se describe en Using Parenthesized Substring Matches.

Por ejemplo, el patrón /Chapter (\d+)\.\d*/ ilustra caracteres de escape y especiales adicionales e indica que parte del patrón debe recordarse. Coincide con los caracteres 'Chapter ' seguidos por uno o más números, luego un punto decimal, seguido por cualquier número 0 o más veces (para más detalles vea la tabla 4.1). Además, se utilizaron paréntesis para recordar el primer grupo de números.

Este patrón se encuentra dentro de la cadena "Open Chapter 4.3, paragraph 6" y se memoriza el '4'. El patrón no se encuentra en "Chapter 3 and 4", porque no tiene el punto despues del '3'.

Si no quiere memorizar la subcadena, utilice ?: al inicio de los paréntesis. Por ejemplo, (?:\d+) coincide con uno o más números pero no memoriza la coincidencia

## Métodos
|Método|	Descripción
|------|------------
|exec|	Un método RegExp que ejecuta una búsqueda por una coincidencia en una cadena. Devuelve un array de información.
|test|	Un método RegExp que verifica una coincidencia en una cadena. Devuelve true o false.
|match|	Un método String que ejecuta una búsqueda por una coincidencia en una cadena. Devuelve un array de información o null si no existe coincidencia alguna.
|search|	Un método String que verifica una coincidencia en una cadena. Devuelve el índice de la coincidencia, o -1 si la búsqueda falla.
|replace|	Un método String que ejecuta una búsqueda por una coincidencia en una cadena, y reemplaza la subcadena encontrada con una subcadena de reemplazo.
|split|	Un método String que utiliza una expresión regular o una cadena fija para cortar una cadena y colocarlo en un array de subcadenas.


Incluir paréntesis, en un patrón de expresión regular hace que el subcoincidencia correspondiente para ser recordado

|Bandera	|Descripción
|-------|--------
|g	|Búsqueda global.
|i	|Búsqueda 'case-insensitive' (no sensible a mayúsculas).
|m	|Búsqueda en multi-línea.
|u	|unicode; se trata el patrón como una secuencia de caracteres unicode.
|y	|Realizar una búsqueda "pegajosa" que se ajuste a partir de la posición actual en la cadena de destino. Vea sticky

var re = /patrón/flags;

var re = new RegExp('patrón', 'banderas');