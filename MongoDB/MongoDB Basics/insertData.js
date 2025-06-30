// MongoDb is a NoSQL database that stores data in JSON-like documents.

// Database → Works like a folder that stores related collections.
// Collection → Comparable to a table in relational databases, but used in NoSQL.
// Document → A single record/row in a collection, stored in JSON-like format.
// Field → A key-value pair inside a document, similar to a column in SQL.

// Basic MongoDB Commands:

// 1. List all databases => show dbs

// 2. Switch to or create a new database => use databaseName
// use mentors

// 3. Create a new collection => db.createCollection("collectionName")
// db.createCollection("teachers")

// 4. List all collections in the current database => show collections
// show collections 

// 5. Ways to insert data into a DB 
// insertOne() - Inserts a single document into a collection.
// db.teachers.insertOne({name: 'Kartik"', subject: 'Web Development'})   

// insertMany() - Inserts multiple documents into a collection.
// db.teachers.insertMany([{name: 'Mosina', subject: 'C++'},
//                              {name: 'Varun', subject: 'Data Science'}])

let users = [
    {name: 'Kartik', subject: 'Web Development'},
    {name: 'Monu', subject: 'Java'},
    {name: 'Mosina', subject: 'C++'},
    {name: 'Varun', subject: 'Data Science'}

];

// made array for insertMany
[{name: 'Mosina', subject: 'C++'},
    {name: 'Varun', subject: 'Data Science'}]


// 6. Showing data inside a collection => db.collectionName.find()
// db.teachers.find()
// mentors> db.teachers.find()
// [
//   {
//     _id: ObjectId('6862daf2fc78720ef9748a5f'),
//     name: 'Kartik"',
//     subject: 'Web Development'
//   },
//   {
//     _id: ObjectId('6862dba9fc78720ef9748a60'),
//     name: 'Monu',
//     subject: 'Java'
//   }
// ]

// mongoDb uses BSON format to store data, which is a binary representation of JSON.
// bson is efficient for storage and retrieval, allowing for complex data types and structures.




let products = [
    {name:'Laptop', features:['Touchpad','i-6'], company:'Dell', price:20},
    {name:'Laptop', features:['4K Screen','i-7'], company:'HP', price:30},
    {name:'Laptop', features:['SSD','i-9'], company:'Apple', price:100},
    {name:'Mobile', features:['Touchscreen','256GB'], company:'Samsung'},
    {name:'Keyboard', features:['RGB Lighting','Mechanical'], company:'Logitech'},
]


// mentors> db.products.find();

// finding data using key 1st
// mentors> db.products.find({name: 'Laptop'})
// mentors> db.products.find({features: "4K Screen"})



// Added 1 more row
// mentors> db.products.insertOne({name:'Laptop', features:['Antiglare','i-7'], company:'Lenovo', price:50})

// Laptops with price 20 or 50
// mentors> db.products.find({price:{$in:[20,50]}})

// Using and in finding laptops (BY ,)
// db.products.find({name:'Laptop',features:'Antiglare'});

// Laptops with price greater than 25
// db.products.find({name:'Laptop', price:{ $gt:25 } }); 


// *****IMPORTANT NOTE*****
// The find() method doesn't return all documents at once.
// But, it returns a cursor (iterator) that initially contains up to 20 documents.
// We dont get data , but the cursor or iterator that points to the documents.


// New collection
//db.createCollection('characters');

// Inserting data in it
// db.characters.insertMany([
//     {name: 'Monkey D. Luffy'},
//     {name: 'Roronoa Zoro'},
//     {name: 'Nami'},
//     {name: 'Usopp'},
//     {name: 'Sanji'},
//     {name: 'Tony Tony Chopper'},
//     {name: 'Nico Robin'},
//     {name: 'Franky'},
//     {name: 'Brook'},
//     {name: 'Jinbe'},
//     {name: 'Portgas D. Ace'},
//     {name: 'Shanks'},
//     {name: 'Trafalgar D. Water Law'},
//     {name: 'Boa Hancock'},
//     {name: 'Sabo'},
//     {name: 'Gol D. Roger'},
//     {name: 'Kaido'},
//     {name: 'Big Mom'},
//     {name: 'Donquixote Doflamingo'},
//     {name: 'Blackbeard'},
//     {name: 'Buggy the Clown'}
// ])


// mentors> db.characters.find()
// It will return all the characters in the collection till the limit of 20 only and not the 21st entry
// type it again to see the next 20 entries


// to get full list of characters,use toArray() method
// db.characters.find().toArray(); 


// This command returns all elements in the array along with their _id fields.
// db.characters.find().forEach((character)=>{printjson(character)});



// ******************************************************************************


// Update operation

// TWO ways to update data -
// 1. updateOne() - Updates a single document in a collection.

// Update price of laptop to 120 with feature as touchpad.

// db.products.updateOne({
//                     features: 'Touchpad'
//                 },{
//                     $set:{price: 120}    
//                 });



// 2. updateMany() - Updates multiple documents in a collection.

// Adding price to gadgets other than laptops

// db.products.updateMany(
//                      {name: {
//                       $ne: 'Laptop'
//                      }
//                   },
//                      {
//                          $set:{
//                              price: 99
//                          }
//                      }
//                  )


// Operators used in update operations:
// $ne is not equals to operator
// $gt is greater than operator
// $lt is less than operator
// $gte is greater than or equal to operator
// $lte is less than or equal to operator
// $in is used to check if a value is in an array
// $nin is used to check if a value is not in an array
// $set is used to set a value to a field
// $unset is used to remove a field from a document


// ******************************************************************************


// PAGINATION
// Pagination is used to limit the number of documents returned in a query.

db.characters.find().limit(8); // prints first 8 elements
db.characters.find().skip(8).limit(9); // skips the first 6 elements and then print the next 9 elements

// This is useful when you have a large number of documents and you want to display them in chunks.


// ******************************************************************************

// Delete Operation

// TWO ways to delete -

// 1. deleteOne: only the selected element will be deleted 
db.characters.deleteOne(
    {name:'Nami'}
);

// 2. deleteMany: this will delete all items inside collection but not the collection
db.characters.deleteMany({});

// deletes whole collection with the items.
db.characters.drop(); 