
/*                  ___           ___                                ___           ___          _____          ___                   
        ___        /__/\         /  /\          ___                 /__/\         /  /\        /  /::\        /  /\                  
       /  /\       \  \:\       /  /::\        /  /\               |  |::\       /  /::\      /  /:/\:\      /  /:/_                 
      /  /:/        \__\:\     /  /:/\:\      /  /:/               |  |:|:\     /  /:/\:\    /  /:/  \:\    /  /:/ /\    ___     ___ 
     /  /:/     ___ /  /::\   /  /:/  \:\    /  /:/              __|__|:|\:\   /  /:/  \:\  /__/:/ \__\:|  /  /:/ /:/_  /__/\   /  /\
    /  /::\    /__/\  /:/\:\ /__/:/ \__\:\  /  /::\             /__/::::| \:\ /__/:/ \__\:\ \  \:\ /  /:/ /__/:/ /:/ /\ \  \:\ /  /:/
   /__/:/\:\   \  \:\/:/__\/ \  \:\ /  /:/ /__/:/\:\            \  \:\~~\__\/ \  \:\ /  /:/  \  \:\  /:/  \  \:\/:/ /:/  \  \:\  /:/ 
   \__\/  \:\   \  \::/       \  \:\  /:/  \__\/  \:\            \  \:\        \  \:\  /:/    \  \:\/:/    \  \::/ /:/    \  \:\/:/  
        \  \:\   \  \:\        \  \:\/:/        \  \:\            \  \:\        \  \:\/:/      \  \::/      \  \:\/:/      \  \::/   
         \__\/    \  \:\        \  \::/          \__\/             \  \:\        \  \::/        \__\/        \  \::/        \__\/    
                   \__\/         \__\/                              \__\/         \__\/                       \__\/       

*/

//-----------------------------------------------------------------------------------------------------------------------------------------

const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
const date = require('date-and-time');

//-----------------------------------------------------------------------------------------------------------------------------------------

// See User model for Schema params

// Mongoose getters and setters allow you to execute custom logic when getting or setting a property on a Mongoose document. 
// Getters let you transform data in MongoDB into a more user friendly form.

// date.format(now, 'ddd, MMM DD YYYY') => 'Fri, Jan 02 2015'

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (now) => date.format(now, 'ddd, MMM DD YYYY')
    },

    // User that created this thought
    username: {
      type: String,
      required: true,
    },

    // Passing in reactionSchema as a nested document array
    reactions: [reactionSchema],
  },

  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// A virtual that retrieves the length of the thought's reactions array field

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thoughts = model('thoughts', thoughtSchema);

module.exports = Thoughts;
