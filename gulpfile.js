/*Hay un problema con materialize y pues ya bye todo el GULP*/
/*Declaro variables en donde voy a jalar los paquetes/dependencias que ya instale con npm*/
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var obfuscate = require('gulp-obfuscate');
var sass = require('gulp-sass');


/*Defino el objeto rutas que tendra como propiedades las rutas en las que estan mis archuvos privados/NOpublicos que quiero procesar con gulp y sus dependencias*/
var rutas = {
    rutaJS: 'src/assets/js/*.js',
    rutaCSS: 'src/assets/scss/*.scss',
    rutaHTML: 'src/*.html'
    /*El uso de * significa busca en todo el proyecto cualquier cosa que tenga.js*/

    //Recordatorio: tengo error? porque salen en blanco?
}

/*Defino las tareas que quiero que realice GULP*/
gulp.task('prepararJS', function(){
    gulp.src(rutas.rutaJS)//accede a la rutaJS y obtiene el archivo(s) que hay ahí
    .pipe(uglify())//inicializa uglify y hace que el el archivo que agarro en la linea anterior pase por el proceso de uglify
    .pipe(obfuscate())//inicializa obfuscate y hace que el el archivo que agarro en la linea anterior pase por el proceso de obfuscate
    .pipe(gulp.dest('public/minificadoJS'))//el archivo procesado es dirigido a una carpeta por crarse minificadoJS y se guarda ahi
});


gulp.task('prepararCSS', function(){
    gulp.src(rutas.rutaCSS)//accede a la rutaCSS y obtiene el archivo(s) que hay ahí
    .pipe(sass({//inicializa la dependecia sass que guardamos hasta arriba y hace que el el archivo que agarro en la linea anterior pase por el proceso de compresion
        outputStyle: 'compressed'
    })
    .on('error, sass.logError'))//Aún dentro de este pipe, le damos la instruccion de que cuando haya un error nos mande un mensaje de error
    .pipe(gulp.dest('public/css'))//el archivo procesado es dirigido a una carpeta por crarse CSS y se guarda ahi
});

gulp.task('prepararHTML', function () {
    gulp.src(rutas.rutaHTML)//accede a la rutaHTML y obtiene el archivo(s) que hay ahí
        .pipe(gulp.dest('public/'))
})












