// Embedded documents – These are nested objects inside a document to show related data in a structured way.

db.teachers.deleteMany({});

// Insert new documents along with embedded (company) object in the collection
db.teachers.insertMany([
    {
        name: 'Kartik', subject: 'Web Development',
        company: {
            name: 'Coding Blocks',
            country: 'India',
            state: 'Delhi',
            address: '47 Nishnat Kunj, Pitampura, Delhi-110034'
        }
    },
    {
        name: 'Monu', subject: 'Java',
        company: {
            name: 'Codeskiller',
            country: 'US',
            address: '47 Us Kunj, Pitampura, US-110034'
        }
    },
    {
        name: 'Mosina', subject: 'C++',
        company: {
            name: 'Hacker Blocks',
            country: 'UAE',
            address: '47 Dubai Kunj, Pitampura, UAE-110034'
        }
    },
    {
        name: 'Varun', subject: 'Data Science',
        company: {
            name: 'Online Coding Blocks',
            country: 'Canada',
            address: '47 Canada Kunj, Pitampura, Canada-110034'
        }
    },
]);

// Search for Monu's document
db.teachers.find({name:'Monu'}); // Displays matching document(s) in the shell

// Convert the result to an array
db.teachers.find({name:'Monu'}).toArray(); 

// Get the first element from the result - 0th indexed  element has the object we need
db.teachers.find({name:'Monu'}).toArray()[0]; 

// Access the embedded company object
db.teachers.find({name:'Monu'}).toArray()[0].company;

// Retrieve the name field from the company object
db.teachers.find({name:'Monu'}).toArray()[0].company.name;
db.teachers.find({name:'Monu'}).toArray()[0].company.address;


// Or directly access the embedded company object using findOne()
db.teachers.findOne({name:'Monu'}).company.name;