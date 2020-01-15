function_a = (y, z) => {
  function_b = (c) => {
    return c * c;
  }
  return function_b(y) + function_b(z);
}

let val = function_a(3, 3);
console.log('valor :', val); //18


// Los closures: son funciones que no poseen variables propias sino que heredan
// variables o argumentos de la funcion padre que la contiene.


/* function padre(y) {
  function closure(h) {
    return h;
  }
  closure(y);
}
 */


triangulo = (a, b) => {
  creaTriangulo = (c, d) => {
    return (c * d) / 2;
  }
  return creaTriangulo(a, b);
}

let val = triangulo(2, 2);
console.log(val);