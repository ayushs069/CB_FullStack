// STRATEGIES will be created here for-
// 1. Local Strategy
// 2. Google Strategy
// 3. Facebook Strategy

const passport = require('passport');
// passport is a middleware required to create strategies
const LocalStrategy = require('passport-local');


const User = require('../model/user'); // Importing the User model
// 1. Local Strategy
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy(
    async (username, password, done)=>{
      try{
        let user = await User.findOne({username: username});
        if(!user) return done(null, false);
        
        // Check if password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return done(null, false);
        
        return done(null, user);
      }
      catch(err){
        return done(err);
      }
    }
));

//2. Facebook Strategy
const FacebookStrategy = require('passport-facebook');

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: `http://localhost:${process.env.PORT}/login/auth/facebook/callback`
},
    async (accessToken, refreshToken, profile, cb)=>{
      
      try{
        let user = await User.findOne({
          fbID: profile.id
        });

        if(user) return cb(null, user);

        user = await User.create({
          username: profile.displayName,  
          fbID: profile.id,
          fbAccesToken: accessToken
        });

        cb(null, user);
      }
      catch(err){
        cb(err, false);
      }
    }
));


//3. Google Strategy
const GoogleStrategy = require('passport-google-oauth20');
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_APP_ID,
  clientSecret: process.env.GOOGLE_APP_SECRET,
  callbackURL: `http://localhost:${process.env.PORT}/login/auth/google/callback`
},
    async (accessToken, refreshToken, profile, cb)=>{
      
      try{
        let user = await User.findOne({
          googleID: profile.id
        });

        if(user) return cb(null, user);

        user = await User.create({
          username: profile.displayName,
          googleID: profile.id,
          googleAccessToken: accessToken
        });

        cb(null, user);
      }
      catch(err){
        cb(err, false);
      }
    }
));



// Used to serializethe user information into the session. Meaning, when a user logs in, their information is stored in the session.
// stores an identifier (user.id) to user
passport.serializeUser((user, done)=>{
  done(null, user.id);
});


// Used to deserialize the user information from the session.
// coverts id back to user object
passport.deserializeUser(async (id, done)=>{
  try{
    let user = await User.findById(id);
     done(null, user);
  }
  catch(err){
    done(err, false);
  }
});

module.exports = passport;