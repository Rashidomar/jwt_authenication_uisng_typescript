"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("./middleware/auth");
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const authRoute_1 = __importDefault(require("./routes/authRoute"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json({ limit: '10kb' }));
exports.app.use((0, cookie_parser_1.default)());
exports.app.use((0, cors_1.default)({ credentials: true, }));
exports.app.get('/welcome', auth_1.verifyToken, (req, res) => {
    res.send("This is a typescript test");
});
exports.app.use(userRoute_1.default);
exports.app.use(authRoute_1.default);
