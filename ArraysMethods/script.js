const posts = [
  {
    id: 1,
    title: "Amor",
    image: "url",
    tags: ["javascript", "webdeveloper"],
  },
  {
    id: 2,
    title: "Fé",
    image: "url",
    tags: ["javascript", "webdeveloper", "react"],
  },
  {
    id: 3,
    title: "Esperanza",
    image: "url",
    tags: ["javascript", "webdeveloper", "angular"],
  },
];

//Metodos de Arrys
//Find buscar un elemento que contienen lo que buscamos
const res1=posts.find((post) => post.title == "Amor");
console.log(res1);

//Retorna true o false si alguno cumple
const res2=posts.some((post) => post.id == 2);
console.log(res2);

//mirar si existe dentro de un array cierta palabra retirna true o false
const res3=posts.find((post) => post.tags.includes('react'));
console.log(res2);

//lo contrario a some es every comprueba si esta en todos los post ciertas palabras
const res4=posts.every((post) => post.tags.includes('javascript'));
console.log(res4);

//Map muy habitual es un bucle es declarativo, formar un array con los titulos
const res5=posts.map((post) => post.title );
console.log(res5);

//filtrar retorna segun los filtro sque le pongamos
const res6=posts.filter((post) => post.tags.includes('react'));
console.log(res6);

