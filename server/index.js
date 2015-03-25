

module.exports = Promise.all([
    require('./app'),
    // database here
]);

module.exports.then(
    function() {
        Log.info("App ready!");
    },
    function(err) {
        Log.error("Could not start app.");
        Log.error(err);
    }
)
