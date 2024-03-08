const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", " Tomate", " y Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", " Tomate", " y Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", " Tomate", " Aceitunas", " y Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      " Tomate",
      " Queso Azul",
      " Parmesano",
      " y Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", " Tomate", " Aceitunas", " Anchoas", " y Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: [" Muzzarella", " Tomate", " y Anana"],
  },
];

// a)  Imprimir en consola las pizzas que tengan un id impar.

//primero hago un filter para crear un nuevo array con todas las pizzas con ID impar. Para eso tomo el array original, le aplico el método filter() y uso como callback un parámetro nuevo llamado pizza para recorrer los objetos uno por uno. Luego, utilizo el método forEach(), para realizar un for y recorrer todas las pizzas del nuevo array y, así, imprimir en consola la ID de cada pizza. Sé que van a ser todas IDs impares porque ya las filtré usando filter() previamente.

const pizzasImpares = pizzas.filter(pizza => pizza.id % 2 !== 0);
pizzasImpares.forEach(pizza=>{
  console.log("La pizza con ID "+pizza.id+" es impar, y su nombre es: "+pizza.nombre+".");
});
console.log("------------------------------------------------------------");

// b) Responder: ¿Hay alguna pizza que valga menos de $600?

const pizzasBaratas = pizzas.filter(pizza=>pizza.precio<=600);
pizzasBaratas.filter(pizza=>{
  console.log("La "+pizza.nombre+" cuesta $"+pizza.precio+" pesos.");
});
console.log("------------------------------------------------------------");

// c) Mostrar el nombre de cada pizza con su respectivo precio

pizzas.forEach(pizza=>{
  console.log("La "+pizza.nombre+" cuesta $"+pizza.precio+" pesos.");
});
console.log("------------------------------------------------------------");

// d) Mostrar todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo).

pizzas.forEach(pizza=>{
  console.log("Los ingredientes de la "+pizza.nombre+" son "+pizza.ingredientes+".");
});
console.log("------------------------------------------------------------");