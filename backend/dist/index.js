"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectTodb_1 = require("./db/connectTodb");
const app_1 = __importDefault(require("./utils/app"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
(0, connectTodb_1.connectToDatabase)().then(() => {
    app_1.default.listen(3000, () => console.log("server open"));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map