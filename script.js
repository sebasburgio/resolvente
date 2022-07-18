let a = parseInt(prompt("Ingresa la incógnita \"a\""));
let b = parseInt(prompt("Ingresa la incógnita \"b\""));
let c = parseInt(prompt("Ingresa la incógnita \"c\""));

let adentroRaiz = ((b)**2-4*a*c);

let x1Numerador = -b + Math.sqrt(adentroRaiz);
let x1Final = x1Numerador / (2*a);
x1Final = parseFloat(x1Final).toFixed(2);

let x2Numerador = -b - Math.sqrt(adentroRaiz);
let x2Final = x2Numerador / (2*a);
x2Final = parseFloat(x2Final).toFixed(2);

alert("x1= " + x1Final);
alert("x2= " + x2Final);