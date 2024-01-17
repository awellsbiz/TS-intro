"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
// to get a notification when the promise is complete we chain on .then(with a callbback function)
axios_1.default.get(url).then(function (response) {
    console.log(response.data);
});
