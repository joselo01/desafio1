//variables globales
arreglo=[6,5,3,1,8,7,2,4];
var i=0,j=0;
var iteracion; //sirve para guardar el evento de tiempo y poder pararlo
 
$(document).ready(function(){
 
    imprimirArreglo(arreglo)
	
	// efecto sortable que permite ordenar los numeros en cualquier posición 
    $( "#contenido" ).sortable();
    $( "#contenido" ).disableSelection();
 
});
 
function comenzar(){
 
    //comienza la iteracion con velocidad de 3 decimas de segundo cada iteración
    iteracion=setInterval(burbuja,300);
 
    //desabilitamos boton
    $("#botonsito").prop("disabled",true)
 
}
 
//funcion que plasma el arreglo para poder ser visualizado
function imprimirArreglo(){
 
    //borramos el contenido del div del contenido
    $("#contenido").html("");
 
    //imprimimos los elementos en forma de div
    for(i_=0;i_<arreglo.length;i_++){
 
        //anexamos un div con clase bloque
        $("#contenido").append("<div class='bloque'>"+arreglo[i_]+"</div>"); 
    }
 
}
 
function burbuja(){
    //recorreremos todos los elementos hasta n-1
    if(i<arreglo.length){
 
        //recorreremos todos los elementos hasta n-i, tomar en cuenta los ultimos no tiene caso ya que ya estan acomodados.
        if(j<(arreglo.length-i)){
 
            //comparamos
            if(arreglo[j]>arreglo[j+1]){
                 //guardamos el numero mayor en el auxiliar
                 aux=arreglo[j];
                 //guardamos el numero menor en el lugar correspondiente
                 arreglo[j]=arreglo[j+1];
                 //asignamos el auxiliar en el lugar correspondiente
                 arreglo[j+1]=aux;
 
            }
 
            j++;
        }else{
            j=0;
            i++;
        }
 
    }else{
        //aqui se termina el algoritmo por lo cual paramos el setInterval
        clearInterval(iteracion);
 
    }
 
    //imprimimos el arreglo en cada iteración
    imprimirArreglo()
 
}