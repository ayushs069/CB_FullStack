// One-to-One Mapping – Connects a single document in one collection to exactly one related document in another collection.

// TWO ways -
// 1. Embedded documents

// Using id as a reference to add laptop details in each teacher's collection
db.teachers.updateOne(
    {
        _id: ObjectId('6862fce83bd44e5083748a80')
    },
    {
        $set:{
            laptop:{name: 'Macbook', features:['Touchpad','i-6'], price:100}
        }
    }
)

db.teachers.updateOne(
    {
        _id: ObjectId('6862fce83bd44e5083748a81')
    },
    {
        $set:{
            laptop:{name: 'HP', features:['4K Screen','i-5'], price:30}        }
    }
)

db.teachers.updateOne(
    {
        _id: ObjectId('6862fce83bd44e5083748a82')
    },
    {
        $set:{
            laptop:{name: 'Dell', features:['SSD','i-9'], price:50}        }
    }
)

db.teachers.updateOne(
    {
        _id: ObjectId('6862fce83bd44e5083748a83')
    },
    {
        $set:{
            laptop:{name: 'Lenovo', features:['Antiglare','i-7'], price:10}        }
    }
)

db.teachers1.find({name:'Monu'}).toArray();
db.teachers1.find({name:'Monu'}).toArray()[0].laptop.name;


// 2. Using Two Collections . store info and link the two collections

// insert detaiils 1st

//********************************************************************
db.teachers.insertMany([
    {name: 'Kartik', subject: 'Web development'},
    {name: 'Monu', subject: 'Java'},
    {name: 'Mosina', subject: 'C++'},
    {name: 'Varun', subject: 'Data Science'}
]);


db.products.insertMany([
    {name: 'Macbook', features:['Touchpad','i-6'], price:20},
    {name: 'HP', features:['4K Screen','i-5'], price:30},
    {name: 'Dell', features:['SSD','i-9'], price:100},
    {name: 'Lenovo', features:['Antiglare','i-7'], price:50}
]);
//**********************************************************************

db.teachers.updateOne(
    {
        _id: ObjectId('6863ac1d3aa3494254748a5f')
    },
    {
        $set:{
            productID: ObjectId('6863ac923aa3494254748a63')
        }
    }
)

db.teachers.updateOne(
    {
        _id: ObjectId('6863ac1d3aa3494254748a60')
    },
    {
        $set:{
            productID: ObjectId('6863ac923aa3494254748a64')
        }
    }
)

db.teachers.updateOne(
    {
        _id: ObjectId('6863ac1d3aa3494254748a61')
    },
    {
        $set:{
            productID: ObjectId('6863ac923aa3494254748a65')
        }
    }
)

db.teachers.updateOne(
    {
        _id: ObjectId('6863ac1d3aa3494254748a62')
    },
    {
        $set:{
            productID: ObjectId('6863ac923aa3494254748a66')
        }
    }
)

// _id of teahers collection is the foreign key while productID is the primary key of the products collection

//  $lookup function to join the two collections and get data
db.teachers.aggregate({
    $lookup: {
        from: 'products',         // Collection to join (products)
        localField: 'productID',  // Field from teachers collection
        foreignField: '_id',      // Field from products collection to match with
        as: 'ProductDetails'      // Output array field to store matched documents
    }
})
 

