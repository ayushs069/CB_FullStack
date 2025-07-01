// Many-to-Many mapping: One document in Collection A can be related to multiple documents in Collection B & vice-versa

db.createCollection('actors');

db.actors.insertMany([
    {name: 'Sheldon Cooper'},
    {name: 'Penny'},
]);

db.createCollection('movies');

db.movies.insertMany([
    {name: 'The Big Bang Theory'},
    {name: 'Young Sheldon'},
]);

//actorIDs:
ObjectId('6863b7ff3aa3494254748a67')
ObjectId('6863b7ff3aa3494254748a68')

//movieIDs:
ObjectId('6863b8083aa3494254748a69')
ObjectId('6863b8083aa3494254748a6a')

// Another collecetion to hold many-to-many rel.
db.createCollection('actors_moviesss');



db.actors_moviesss.insertMany([
{
    actorId: ObjectId('6863b7ff3aa3494254748a67'),
    movieId: ObjectId('6863b8083aa3494254748a69')
},
{
    actorId: ObjectId('6863b7ff3aa3494254748a67'),
    movieId: ObjectId('6863b8083aa3494254748a6a')
},
{
    actorId: ObjectId('6863b7ff3aa3494254748a68'),
    movieId: ObjectId('6863b8083aa3494254748a69')
}
]);

// fetch data
 db.actors_moviesss.aggregate({
        $lookup:{
            from: 'actors',
            localField: 'actorId',
            foreignField: '_id',
            as: 'ActorsInfo'
        }
    },{
        $lookup:{
            from: 'movies',
            localField: 'movieId',
            foreignField: '_id',
            as: 'MoviesInfo'
        }
    })