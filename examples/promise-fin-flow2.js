var Q = require("q");

var promise = Q.reject("FAIL");
promise.fin(function () {
    console.log("resolved");
}).then(function (value) {
    console.log("success " + value);
}, function (error) {
    console.log("failure " + error);
});

