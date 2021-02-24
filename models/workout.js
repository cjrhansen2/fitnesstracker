//bring in mongoose and make the schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//then create the actual workout schema for the db, get idea of this structure from seeds
const schemaWorkout = new Schema({
    day: {
        type: Date,
        //make the default date the current day
        default: Date.now
    },
    //should be an array of exercises
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: true
        },
        name: {
            type: String,
            trim: true,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }

    }]
});

//turn into a mongoose model and export as "Workout"
const Workout = mongoose.model("workout", schemaWorkout);
module.exports = Workout