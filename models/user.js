/*
        ___           ___           ___           ___                    ___           ___          _____          ___                   
       /__/\         /  /\         /  /\         /  /\                  /__/\         /  /\        /  /::\        /  /\                  
       \  \:\       /  /:/_       /  /:/_       /  /::\                |  |::\       /  /::\      /  /:/\:\      /  /:/_                 
        \  \:\     /  /:/ /\     /  /:/ /\     /  /:/\:\               |  |:|:\     /  /:/\:\    /  /:/  \:\    /  /:/ /\    ___     ___ 
    ___  \  \:\   /  /:/ /::\   /  /:/ /:/_   /  /:/~/:/             __|__|:|\:\   /  /:/  \:\  /__/:/ \__\:|  /  /:/ /:/_  /__/\   /  /\
   /__/\  \__\:\ /__/:/ /:/\:\ /__/:/ /:/ /\ /__/:/ /:/___          /__/::::| \:\ /__/:/ \__\:\ \  \:\ /  /:/ /__/:/ /:/ /\ \  \:\ /  /:/
   \  \:\ /  /:/ \  \:\/:/~/:/ \  \:\/:/ /:/ \  \:\/:::::/          \  \:\~~\__\/ \  \:\ /  /:/  \  \:\  /:/  \  \:\/:/ /:/  \  \:\  /:/ 
    \  \:\  /:/   \  \::/ /:/   \  \::/ /:/   \  \::/~~~~            \  \:\        \  \:\  /:/    \  \:\/:/    \  \::/ /:/    \  \:\/:/  
     \  \:\/:/     \__\/ /:/     \  \:\/:/     \  \:\                 \  \:\        \  \:\/:/      \  \::/      \  \:\/:/      \  \::/   
      \  \::/        /__/:/       \  \::/       \  \:\                 \  \:\        \  \::/        \__\/        \  \::/        \__\/    
       \__\/         \__\/         \__\/         \__\/                  \__\/         \__\/                       \__\/                  

*/

//-----------------------------------------------------------------------------------------------------------------------------------------

const { Schema, model } = require('mongoose');

//-----------------------------------------------------------------------------------------------------------------------------------------


/* 

Create User Schema -> define the shape of the documents within that collection.



 In this case, userSchema is a new instance of Schema being passed objects with params that define the data.

 type: [String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array, Decimal128, Map]

 unique: Tells Mongoose that each document must have a unique value for a given path

 required: Sets field as requirement for data

 trim: Removes the white space from the strings

 match: A validation technique using Regex format for email

thoughts/friends: Array of _id values referencing the Thought and User models 

*/

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address"
      ]
    },

    thoughts: [{ type: Schema.Types.ObjectId, ref: "Thought" }],

    friends: [{ type: Schema.Types.ObjectId, ref: "User" }]

  },
  {
    toJSON: {
      getters: true,
    },
  }
);


// A virtual that retrieves the length of the user's 'friends' array field on query. 
// A virtual is a property that is not stored in MongoDB. Virtuals are typically used for computed properties on documents.

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// To use our schema definition, we need to convert our userSchema into a Model we can work with. 
// To do so, we pass it into mongoose.model(modelName, schema):

const User = model('User', userSchema);

module.exports = User;
