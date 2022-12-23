"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var user_1 = __importDefault(require("./C_handlers/user"));
var app = express_1.default();
var address = '0.0.0.0:3001';
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
user_1.default(app);
app.listen(3001, function () {
    console.log("starting app on: " + address);
});
exports.default = app;
