//bring in the Workout schema created in the models directory
const Workout = require("../models/workout.js");

//then set up the api routes for export
module.exports = function (app) {
    //set up the route for finding a workout
    app.get("/api/workouts", function (req, res) {
        Workout.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    });
    //set up route for creating a workout
    app.post("/api/workouts", function (req, res) {
        Workout.create({}).then(
            data => res.json(data)
            ).catch(err => {
                console.log("err", err)
                res.json(err)
            })
    });
    //and set up the route for finding and updating our workout
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        Workout.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            { new: true, runValidators: true }
        ).then(
            data => res.json(data)
            ).catch(err => {
                console.log("err", err)
                res.json(err)
            })
    });
};