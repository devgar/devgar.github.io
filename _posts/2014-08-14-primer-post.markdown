---
layout: post
title: "Primer Post"
date: 2014-08-14 10:21:29
categories: saludo
---

Hola!

Este es mi primer post. Estoy iniciandome en github, y hay algunas cosas que tengo que rematar, pero la cosa marcha.

Hoy me tocaba iniciarme con github pages. Aunque tarde o pronto seguramente mataré esta versión, tenía que entenderme con _jekyll_ si en algún futuro estamos interesados en ofrecer una página de alguno de los proyectos en los que estamos trabajando.

Como los distintos post que aparecen en la página son archivos markdown se me ha ocurrido hacer un script bash muy simple para iniciarlos y facilitar la escritura de la cabecera.

{% highlight bash %}

#!/bin/bash
#newpost.sh @by devgar

DATE=`date +%Y-%m-%d`
TIME=`date +%H:%M:%S`
TITLE_ARG="$1"
CATS=${@:2}

RESULT=$(echo $TITLE_ARG | sed 's/ /-/g')
RESULT=$(echo $RESULT | tr '[:upper:]' '[:lower:]' )
FILE="$DATE-$RESULT.markdown"
echo "---" > $FILE
echo "layout: post" >> $FILE
RESULT=$(echo $TITLE_ARG | sed 's/-/ /g')
echo "title: \"$RESULT\"" >> $FILE
echo "date: $DATE $TIME" >> $FILE
echo "categories: $CATS" >> $FILE
echo "---" >> $FILE

{% endhighlight %}

La idea es simple, se llama a `newPost.sh` seguido del primer argumento que será el título, se aceptan dos construcciones: `newPost.sh "Primer Post"` o `newPost.sh Primer-Post` el script convertirá en minuscula para el nombre del fichero y remplazará guiones y espacios para el título automaticamente. Los argumentos adicionales son añadidos a las categorias.
