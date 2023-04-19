// Object Handling:

// 1. Write a JavaScript program to list the properties of a JavaScript object
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  
  for(var prop in student) {
    console.log(prop);
  }
  


// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  
  console.log("Object before deletion: ", student);
  
  delete student.rollno;
  
  console.log("Object after deletion: ", student);
  


// 3. Write a JavaScript program to get the length of a JavaScript object.

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  
  var length = Object.keys(student).length;
  
  console.log("Length of object: ", length);
  


// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.


var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
 ];
 
 for(var i=0; i<library.length; i++) {
   var book = library[i];
   var bookInfo = book.title + " by " + book.author;
   if(book.readingStatus) {
     console.log(bookInfo + " is already read.");
   } else {
     console.log(bookInfo + " is still not read.");
   }
 }
 


// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.

// Volume of a cylinder : V = πr2h

// where r is the radius and h is the height of the cylinder.
class Cylinder {
    constructor(height, radius) {
      this.height = height;
      this.radius = radius;
    }
  
    get volume() {
      return (Math.PI * this.radius * this.radius * this.height).toFixed(4);
    }
  }
  
  var cylinder = new Cylinder(5, 3);
  console.log("Volume of cylinder: ", cylinder.volume);
  


// 6. Write a Bubble Sort algorithm in JavaScript.

function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  var arr = [6, 4, 0, 3, -2, 1];
  console.log("Bubble sorted array: ", bubbleSort(arr));


// 7. Write a JavaScript program which returns a subset of a string.

function getSubsets(str) {
    let subsets = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        subsets.push(str.slice(i, j));
      }
    }
    return subsets;
  }
  
  console.log(getSubsets("dog"));
  


// 8. Write a JavaScript program to create a Clock.
function showTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    console.log(`${hours}:${minutes}:${seconds}`);
  }
  
  setInterval(showTime, 1000);
  




// 9. Write a JavaScript program to calculate the area and perimeter of a circle.

// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.
function calculateCircle(radius) {
    const area = Math.PI * radius ** 2;
    const perimeter = 2 * Math.PI * radius;
    return { area, perimeter };
  }
  
  const radius = prompt("Enter the radius of the circle:");
  const result = calculateCircle(radius);
  console.log(`Area: ${result.area.toFixed(2)}, Perimeter: ${result.perimeter.toFixed(2)}`);
  


// 10. Write a JavaScript program to sort an array of JavaScript objects.
var library = [
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
 ];
 
 library.sort(function(a, b) {
   return a.title.localeCompare(b.title);
 });
 
 console.log(library);
 
//  11. Write a JavaScript function to print all the methods in an JavaScript object.
function all_properties(obj) {
    var props = [];
  
    while(obj !== null) {
      props = props.concat(Object.getOwnPropertyNames(obj));
      obj = Object.getPrototypeOf(obj);
    }
  
    return props.filter(function(prop) {
      return typeof obj[prop] === 'function';
    });
  }
  
  console.log(all_properties(Array));
  



// 12. Write a JavaScript function to parse an URL.
var url = new URL('https://www.example.com/path?query=value#hash');

console.log(url.protocol); // "https:"
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/path"
console.log(url.search);   // "?query=value"
console.log(url.hash);     // "#hash"

//  13. Write a JavaScript function to retrieve all the names of object's own and inherited properties.
function all_properties(obj) {
    var props = [];
  
    while(obj !== null) {
      props = props.concat(Object.getOwnPropertyNames(obj));
      obj = Object.getPrototypeOf(obj);
    }
  
    return props;
  }
  
  var obj = {
    a: 1,
    b: 2
  };
  
  console.log(all_properties(obj));
  
