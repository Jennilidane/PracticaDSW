//FOR IN-----------------------------------
// const object = { a: "Enero", b: "Febrero", c: "Marzo",d:"Abril",e:"Mayo",f:"Junio",g:"Julio",h:"Agosto",i:"Septiembre",j:"Octubre",k:"Noviembre" };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

//FOREACH----------------------------------
// const array1 = ['Enero', 'Febrero', 'Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre'];

// array1.forEach((element) => console.log(element));

//FOR OF-----------------------------------
let iterable = ['Enero', 'Febrero', 'Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre'];

for (let value of iterable) {
  console.log(value);
}