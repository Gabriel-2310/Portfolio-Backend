"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorControl = (err, _req, res, _next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send({ message });
};
exports.default = ErrorControl;
