# Tarjeta de crédito válida

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)

***

## 1. Preámbulo

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)



## Nombre del proyecto: Radio Habitar

Radio habitar es un proyecto autogestionado por diversas personas que tienen el interés de aportar con su granito de arena a les distintes ciudadanos que les convoca la misma necesidad de aprender, enseñar, compartir y hacer trabajo vecinal. Este producto cumple con la función de ayudar a que la radio siga siendo independiente y no tenga que tener una línea editorial adecuada a les que le financian.

#### Definición del producto:
Los usuarios son personas que quieren aportar con dinero a la radio habitar. Para eso deben validar su tarjeta de crédito primero.

El objetivo es validar su tarjeta en la página web de manera segura.

El producto soluciona la validación de la tarjeta, de forma cifrada y por lo tanto con la seguridad que necesitan para sentir confianza a la hora de entrar al sitio.

Para visualizar el proyecto pincha [aquí](https://scl-019-card-validation-bio8u8z8k-pazvarela.vercel.app/)

#### Prototipos: 

![alt text](https://github.com/[pazvarela]/[SCL019-card-validation]/blob/[main]/prototipo-papel?raw=true)
