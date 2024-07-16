console.warn("Hello everyone welcome here !");
let Gender;
Gender = "female";
console.log(Gender);
const firstname = "Henry";
const lastname = "james";
const age = 30;
const isAdmin = false;
const x = null;
const y = undefined;

const firstname = "Henry";
const lastname = "james";
const age = 30;
const isAdmin = false;
const x = null;
const y = undefined;
console.log(
  "my name is " + firstname + lastname + "  i am" + age + " years old"
);
congatination PROCESS...
console.log(`my name is ${firstname} ${lastname} i am ${age} years old`);
console.log(firstname.toUpperCase());
console.log(typeof y);
length and split
const title = "welcome, ICT , laptop , router ";
console.log(title.length);
console.log(title.split(","));
learning of Array
const students = ["web", "home", "kitchen", 1, 2, 3, 4, 5, 6, true];
to add value to the arrays
students.push("table", "house", "Rice", "i need foods","now")
students[50]="gate"
to make the value the first
students.unshift("computer")
pop out the ,last item
students.pop();
console.log(students);
const person = {
  title: "MR",
  firstname: "herny",
  lastname: "peter",
  age: 40,
  score: 40.5,
  isAdmin: false,
  x: null,
  y: undefined,
  hobbies: ["cooking", "bet9ja", "boxing"],
  address: {
    city: "owerri",
    lga: "owerri-west",
    postalcode: 46013,
  },
};
console.log(person.hobbies[1]);
const { firstname, lastname } = person;
console.log(firstname);
for jason stringify
console.log(JSON.stringify(person));
ARRAYS

 for loops
for (let i = 0; i < 20; i++) {
  console.log(i);
}
whileloop
let i = 0;
while (i <= 25) {
  console.log(`this is the loop of ${i}`);
  i++;
}

const cartitem = [
  {
    id: 1,
    productname: "sugar",
    quantity: 5,
    ispaid: false,
    category: "beverages",
    Price: 1000,
  },
  {
    id: 2,
    productname: "fridge",
    quantity: 2,
    ispaid: false,
    category: "Electronics",
    Price: 1000,
  },
  {
    id: 3,
    productname: "milk",
    quantity: 5,
    ispaid: true,
    category: "beverages",
    Price: 1000,
  },
  {
    id: 4,
    productname: "milo",
    quantity: 5,
    ispaid: false,
    category: "beverages",
    Price: 2000,
  },
];
 FITER METHOD
const store = cartitem.filter(function (listitem) {
  return listitem.ispaid === false;
});
const store = cartitem
  .filter(function (listitem) {
    return listitem.price === 1000;
  })
  .map(function (listitem) {
    return listitem.productname;
  });
console.log(store);
 map loop
const store = cartitem.map(function (listitems) {
  return listitems.productname;
});
console.log(store);
FOR EACH
cartitem.forEach(function (items) {
  console.log(items);
});
 for for
for (items of cartitem) {
  console.log(items.productname);
}
 while while
let i = 0;
while (i <= cartitem.length;) {
  console.log(cartitem[i].category);
}
 console.log(cartitem);
for first
for (let i = 0; i <= cartitem.length; i++) {
  console.log(cartitem [i].productname);
}
console.log(cartitem);
