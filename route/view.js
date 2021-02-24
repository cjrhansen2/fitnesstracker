//set up the route for the view to serve the html
const path = require("path");
module.exports = function(app) {
    //set up route for the main page
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    //then set up route for the exercise page
    app.get("/exercise", function (req,res){
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    //finally set up route for stats page
    app.get("/stats", function(req, res){
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};
