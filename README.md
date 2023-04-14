# DEVSafio

# Antes de empezar

Primero agradecer la oportunidad que me han brindado en este DEVsafio para postular a la vacante de Desarrollador front end. 

## Sobre el código

Es una página web desarrollada en su totalidad con Angular (versión 15.0.4.), su funcionamiento depende únicamente de una api: https://pokeapi.co/:

Para su mejor comprensión está dividido en variados componentes, que de forma lógica y entendible se entienden así:

1. MainPage
2. TablaListado (muestra el resultado de la consulta a la API, tiene la función de filtro y autocompletar. La tabla esta paginada)
  * carta-pokemon (muestra la información detallada de un pokemon en especifico)
  * pokemon-favorito (en la sección del header deja fijado un pokemon favorito, al hacer click en el nombre, en un dialog, muestra su información detallada)
3. tabla-abecedario (tablar resumen que indica la cantidad de pokemons que empiezan con cada letra del abecedario).

## Antes de iniciar

Para clonar este repositorio se pueden utilizar los siguientes código: 

1. `git clone https://github.com/fabignacio/DEVSafio.git` 
2. `git clone https://github.com/fabignacio/DEVSafio.git`

Al clonar este repositorio, la carpeta node_modules no se encuentra, ya que el proyecto cuenta con un archivo .gitignore. Para hacer las instalaciones necesarias de esta carpeta debera de ejecutar el siguiente comando en la terminal `npm install`. Una vez instalada la carpeta node_modules, para poder levantar de manera local la página deberá de ejecutar este comando en la terminal `ng serve -o`.

## Sobre el diseño.

Para tener una mejor estetica, se utilizó el template de PrimeNG, para mayor información al respecto, visitar el siguiente enlace: [PrimeNG](https://primeng.org/). Si por alguna razón, al ejecutar el comando de `npm install` no se logra instalar PrimeNG, deberá de ejecutar el siguiente comando: `npm i primeng primeicons`.

## Para finalizar.

Solo repetir las gracias por la oportunidad. Fue un gran esfuerzo el poder hacer este DEVsafio, me ayudó bastante para ir potenciando algunas falencias que tenía respecto a Angular, pero sobre todo, fue divertido el tener que hacer esta página. Muchas gracias a la estimada Isabel de la Cuadra, por brindarme la chance y confiar en mi. 
 
