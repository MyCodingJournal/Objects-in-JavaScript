//Objects in JavaScript

//An Object is a collection data type that holds multiple pieces of data under a collected name whose members can be read and updated by using a key instead of an index. In daily conversation we use keys to retrieve values all the time: 

//You provide a name (englishBandsByCity), an assignment operator (=)and then a list of pairs, separated by commas, that should go in the Object, wrapped in {}. 

//Each pair should have a name (typically a Symbol), a "rocket" symbol (=>), and a value. 

//A value is often a scalar value, but it could be another collection, more on that later.
//a really complex example of Arrays and Objects working together.
//Nesting of Collection Data Structures

const englishMusicByCity = {
  "manchester": [
    {
      "bandName": "The Smiths",
      "memberNames": ["Morrissey", "Johnny", "Andy", "Mike"]
    },
    {
      "bandName": "Joy Division",
      "memberNames": ["Peter", "Stephen", "Bernard", "Ian"]
    }
  ]
}

////we can use the lookup operator ([]) to "dig into" this nested collection and get interesting information out:
englishMusicByCity["manchester"][0]["bandName"] //=> "The Smiths"
englishMusicByCity["manchester"][0]["memberNames"] 
//=> ["Morrissey", "Johnny", "Andy", "Mike"]

console.log(`There were ${englishMusicByCity["manchester"][0]["memberNames"].length} members in ${englishMusicByCity["manchester"][0]["bandName"]}`)
//=> "There were 4 members in The Smiths"

//-----------------------------------------------------------------

const englishMusicByCity = {
  "manchester": [
    {
      "bandName": "The Smiths",
      "memberNames": ["Morrissey", "Johnny", "Andy", "Mike"]
    },
    {
      "bandName": "Joy Division",
      "memberNames": ["Peter", "Stephen", "Bernard", "Ian"]
    },
    {
      "bandName": "ABCs",
      "memberNames": ["Morrissey", "Johnny", "Andy", "Mike"]
    },
    {
      "bandName": "PQRs",
      "memberNames": ["Peter", "Stephen", "Bernard", "Ian"]
    },
    {
      "bandName": "XYZs",
      "memberNames": ["Morrissey", "Johnny", "Andy", "Mike"]
    },
    {
      "bandName": "Last",
      "memberNames": ["Peter", "Stephen", "Bernard", "Ian"]
    }
  ]
}

//-----------------------------------------------------------------
//accessing value stored in objects
//Dot Notation
//With dot notation, we use the member access operator (a single period) to access values in an Object.

const meals = {
  breakfast: 'Avocado toast',
  lunch: 'Avocado toast',
  dinner: 'Avocado toast'
};

meals.breakfast;
// => "Avocado toast"

meals.dinner;
// => "Avocado toast"

//---------------------------------------------------------------------

const address = {
  street: {
    line1: '11 Broadway',
    line2: '2nd Floor'
  },
  city: 'New York',
  state: 'NY',
  zipCode: '10004'
};

address.street;
//=> { line1: "11 Broadway", line2: "2nd Floor" }

address.city;
//=> "New York"

address.state;
//=> "NY"

address.zipCode;
//=> "10004"

// to access a value inside address.street, we simply append the inner key, again using dot notation:

address.street.line1;
//=> "11 Broadway"

address.street.line2;
//=> "2nd Floor"

//Accessing Nonexistent Properties
//It returns undefined because there is no matching key on the Object.
address.country;
//=> undefined

//Bracket Notation
//With bracket notation, we use the computed member access operator, which, recall from the lesson on Arrays, is a pair of square brackets ([]).

address['street'];
//=> { line1: "11 Broadway", line2: "2nd Floor" }

address['street']['line1'];
//=> "11 Broadway"

address['street']['line2'];
//=> "2nd Floor"

address['city'];
//=> "New York"

address['state'];
//=> "NY"

address['zipCode'];
//=> "10004"

//-----------------------------------------------------------------
//Nonstandard Keys

const wildKeys = {
  'Cash rules everything around me.': 'Wu',
  'C.R.E.A.M.': 'Tang',
  'Get the money.': 'For',
  "$ $ bill, y'all!": 'Ever'
};

//dot notation don't work well with Nonstandard Keys
wildKeys.'Cash rules everything around me.';
// ERROR: Uncaught SyntaxError: Unexpected string

//use bracket notation instead
wildKeys["$ $ bill, y'all!"];
//=> "Ever"

//note:In order to access a property via dot notation, the key must follow the same naming rules applied to variables and functions. It's also important to note that under the hood all keys are strings. Don't waste too much time worrying whether a key is accessible via dot notation. If you follow these rules when naming your keys, everything will work out:

//camelCaseEverything
//Start the key with a lowercase letter
//No spaces or punctuation
//If you follow those three rules, you'll be able to access all of an Object's properties via bracket notation or dot notation.

//Top Tip: Always name your Object's keys according to the above three rules. Keeping everything standardized is good, and being able to access properties via dot notation makes the code much more readable.

//-----------------------------------------------------------------
//Accessing Properties Dynamically

const meals = {
  breakfast: 'Oatmeal',
  lunch: 'Caesar salad',
  dinner: 'Chimichangas'
};

let mealName = 'lunch';

meals[mealName];//bracket notation computes/interpret the value inside it []
//=> "Caesar salad"

mealName = 'dinner';
//=> "dinner"

meals.mealName;//dot notation seeks out the key 'mealName' therefore undefined.
//=> undefined

//-----------------------------------------------------------------------------

const morningMeal = 'breakfast';
const middayMeal = 'lunch';
const eveningMeal = 'dinner';

const meals = {
  [morningMeal]: 'French toast',
  [middayMeal]: 'Personal pizza',
  [eveningMeal]: 'Fish and chips'
};

meals;
//=> { breakfast: "French toast", lunch: "Personal pizza", dinner: "Fish and chips" }

//[] treats the value as variable and tells JavaScript it needs to interpret it

const morningMeal = 'breakfast';
const middayMeal = 'lunch';
const eveningMeal = 'dinner';

const meals = {
  morningMeal: 'French toast',
  middayMeal: 'Personal pizza',
  eveningMeal: 'Fish and chips'
};

meals;
//=> { morningMeal: "French toast", middayMeal: "Personal pizza", eveningMeal: "Fish and chips" }

//Without the square brackets, JavaScript treated each key as a literal identifier instead of a variable. Bracket notation — the computed member access operator — once again shows its powers of computation!

//Bracket notation will really come in handy when we start iterating over Objects and programmatically accessing and assigning properties.

//-----------------------------------------------------------------

//Essentially, dot notation is for when you know the exact name of the property in advance, and bracket notation is for when you need to compute it when the program runs.

//------------------------------------------------------------------
//JavaScript's Object Methods

//Object.keys()

//We can get a list of the top-level keys in an Object by using the Object.keys() static method. We do that by calling Object.keys() and passing the Object instance as an argument. The return value is an Array containing all of the keys at the top level of the Object instance.

const wednesdayMenu = {
  cheesePlate: {
    soft: 'Brie',
    semiSoft: 'Fontina',
    hard: 'Provolone'
  },
  fries: 'Sweet potato',
  salad: 'Southwestern'
};

Object.keys(wednesdayMenu);//passing the Object instance as an argument
//=> ["cheesePlate", "fries", "salad"]
Object.keys(wednesdayMenu.cheesePlate);
//=> [ 'soft', 'semiSoft', 'hard' ]
Object.keys(wednesdayMenu['cheesePlate'])
//=> [ 'soft', 'semiSoft', 'hard' ]

//Object.values() static method, behaves similar as objects.kets() returns an array containing values rather than keys.

//-----------------------------------------------------------------
//Practice

const key1 = '1 star';
const key2 = '2 star';
const key3 = '3 star';

const personel = {
  name: 'Duckie',
  country: 'Duckland',
  maritalStatus: 'defacto',
  child: '3',
  religion:'non',
  bloodType: 'O',
  enlistment: {
    army: 'infantry',
    battalion: '123 Duckie regiment',
    company: 'Duckie company',
    platton: '9',
    section: '1',
    rank: '1st class Private',
    vocation: '2nd M20 gunner rifleman'
  },other: {
    [key1]: 'value1',
    [key2]: 'value2',
    [key3]: 'value3'
  },
};

personel.name;
personel.bloodType;
personel.enlistment.army;
personel['name'];
personel['enlistment']['rank'];
personel['enlistment']['vocation'];
personel.enlistment;
personel['enlistment'];

//Object methods
console.log(personel);//shows key/value pair of the object
console.log(Object.keys(personel));//shows keys of object
console.log(Object.values(personel));//shows values of object

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Modifying Objects
//Objects-JavaScript
//Add an Object Property Using Dot or Bracket Notation

const circle = {};

circle.radius = 5;

circle['diameter'] = 10;

circle.circumference = circle.diameter * Math.PI;
//=> 31.41592653589793

circle['area'] = Math.PI * circle.radius ** 2;
//=> 78.53981633974483

circle;
//=> { radius: 5, diameter: 10, circumference: 31.41592653589793, area: 78.53981633974483 }

//-----------------------------------------------------------------
//modifying Obj with dot and bracket notation

//Destructive method

const mondayMenu = {
  cheesePlate: {
    soft: 'Chèvre',
    semiSoft: 'Gruyère',
    hard: 'Manchego'
  },
  fries: 'Curly',
  salad: 'Cobb'
};

mondayMenu.fries = 'Sweet potato';

mondayMenu.salad = 'Caesar';

mondayMenu;
//=> { cheesePlate: { soft: "Chèvre", semiSoft: "Gruyère", hard: "Manchego" }, fries: "Sweet potato", salad: "Cobb" }

//function to encapsulate the above
//destructively modifying a property
//function takes three arguments: the original menu 'Object', the 'key' identifying the property we want to update, and the value we want to change its 'value' to.(obj, key, value)

function destructivelyUpdateObject (obj, key, value) {
  obj[key] = value; //obj=Object- bracket notation to add key/value

  return obj;//return the Object
}

const mondayMenu = {
  cheesePlate: {
    soft: 'Chèvre',
    semiSoft: 'Gruyère',
    hard: 'Manchego'
  },
  fries: 'Sweet potato',
  salad: 'Cobb'
};

const tuesdayMenu = destructivelyUpdateObject(mondayMenu, 'salad', 'Caesar');
//=> { cheesePlate: { soft: "Chèvre", semiSoft: "Gruyère", hard: "Manchego" }, fries: "Sweet potato", salad: "Caesar" }

tuesdayMenu.salad;
//=> "Caesar"
mondayMenu.salad;
//=> "Caesar"
//destructively because now mondayMenu has been changed and we don't want that, we want to be able to update without changing the original.

//-----------------------------------------------------------------
//Update an Object Nondestructively

//function nondestructivelyUpdateObject(obj, key, value) {
// Code to return new, updated menu object
//}

function nondestructivelyUpdateObject(obj, key, value) {
  const newObj = { ...obj }; //we can use the spread operator to copy all the elements of an existing array into a new array. We can do the same thing with Objects
  newObj[key] = value;

  return newObj;
}

const sundayMenu = nondestructivelyUpdateObject(tuesdayMenu, 'fries', 'Shoestring');// call function 'nondestructivelyUpdateObject' expression as value with desired change (obj,key,value) as arguments

tuesdayMenu.fries;
//=> "Sweet potato"

sundayMenu.fries;
//=> "Shoestring"

//To review, we are calling our nondestructivelyUpdateObject() function, passing as our arguments the original menu (tuesdayMenu) and the key and value representing the desired change. The function first makes a copy of tuesdayMenu, then changes the value associated with the fries key to "Shoestring". Finally, it returns the updated menu, which is stored into the variable sundayMenu.

//While this works, it's quite a bit to write, and it's not very extensible. If we want to modify more than a single property, we'll have to completely rewrite our function! Luckily, JavaScript has a much better solution for us.

//-----------------------------------------------------------------
//Use Object.assign()

//will allow us to combine properties from multiple Objects into a single Object. The method takes two or more Objects as its arguments. The first argument passed to Object.assign() is the Object into which all of the properties will be merged. Every additional argument is an Object whose properties we want to merge into the first Object:

//syntax: 
//Object.assign(initialObject, additionalObject, additionalObject, ...);

//The return value of Object.assign() is the initial Object after all of the additional Objects' properties have been merged in:

Object.assign({ eggs: 3 }, { flour: '1 cup' });
//=> { eggs: 3, flour: "1 cup" }

Object.assign({ eggs: 3 }, { chocolateChips: '1 cup', flour: '2 cups' }, { flour: '1/2 cup' });
// { eggs: 3, chocolateChips: "1 cup", flour: "1/2 cup" }

Object.assign({ eggs: 3}, { chocolateChips: '1 cup', flour: '2 cups' }, { flour: '1/2 cup' }, { vanilla: '1 drop', masala: '2 tsp'}, { flour: '3 cups'});
// {eggs: 3,chocolateChips: '1 cup',flour: '2 cups',vanilla: '1 drop',masala: '2 tsp'}

//NOTE:If multiple Objects have a property with the same key, the last key to be defined wins out. Essentially, the last call to Object.assign() in the above snippet is wrapping all of the following assignments into a single line of code:

const recipe = { eggs: 3 };

recipe.chocolateChips = '1 cup';

recipe.flour = '2 cups';

recipe.flour = '1/2 cup';

recipe.vanilla = '1 drop';

recipe.masala = '2 tsp';

recipe.flour = '3 cups';

recipe;
//{eggs: 3,chocolateChips: '1 cup',flour: '3 cups',vanilla: '1 drop',masala: '2 tsp'}

//simply using Object.assign() does not make our function nondestructive. 

//A common pattern for Object.assign() is to provide an empty Object as the first argument. That way we're composing an entirely new Object instead of modifying or overwriting the properties of an existing Object. 

//This pattern allows us to rewrite the above destructivelyUpdateObject() function in a nondestructive way:

//function nondestructivelyUpdateObject(obj, key, value) {
//  return Object.assign({}, obj, { [key]: value });
//}

//The code above takes the first argument (an empty Object), adds all the properties in obj to it, then adds one final property consisting of the key and value that represent the change we want to make. If that key doesn't already exist in obj, it is added and its value is set to value. If it does already exist, its old value is replaced by value. 

//Note that all the arguments to Object.assign() need to be objects, so we're representing the key-value pair as an Object using literal syntax here. Finally, the resulting new Object is returned.

//using Recipe example above:

function nondestructivelyUpdateObject(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

const recipe = { eggs: 3 };

const newRecipe = nondestructivelyUpdateObject(recipe, 'chocolate', '1 cup');
//=> { eggs: 3, chocolate: "1 cup" }

newRecipe;
//=> { eggs: 3, chocolate: "1 cup" }

recipe;
//=> { eggs: 3 }

const anotherRecipe = nondestructivelyUpdateObject(recipe, 'chocolate', '3 cup');

anotherRecipe;

recipe;
//=> { eggs: 3 }

//It's important that we merge everything into a new, empty Object. Otherwise, we would be modifying the original Object.


