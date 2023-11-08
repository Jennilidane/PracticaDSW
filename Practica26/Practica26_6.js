//FOREACH----------------------------------
 const array1 = ['Enero', 'Febrero', 'Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre'];
 array1.push('Diciembre');
 array1.forEach(function(element){
        if(element != 'Julio'){
                 console.log(element);
             }
    });
