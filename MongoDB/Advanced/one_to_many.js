// one to many - One document is linked to multiple related documents

// removing previously made one to one mapping
db.teachers.updateMany({},{$unset:{productID:1}}); // removes productID from teachers

// TWO ways -
// 1. embedded - Use embedded documents for personal or time-sensitive data.
// 2. referenced - Use references for frequently updated data like products or locations.

db.teachers.updateOne(
    { _id: ObjectId('6863ac1d3aa3494254748a5f') },
    {
      $set: {
        productIDs: [
          ObjectId('6863ac923aa3494254748a63'),
          ObjectId('6863ac923aa3494254748a64')
        ]
      }
    }
  )
  
  db.teachers.updateOne(
    { _id: ObjectId('6863ac1d3aa3494254748a60') },
    {
      $set: {
        productIDs: [
          ObjectId('6863ac923aa3494254748a65'),
          ObjectId('6863ac923aa3494254748a66')
        ]
      }
    }
  )

// fetch data 
db.teachers.aggregate({
    $lookup:{
        from: 'products',
        localField: 'productIDs',
        foreignField: '_id',
        as: 'ProductDetails'
    }
})
