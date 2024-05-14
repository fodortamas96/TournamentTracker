import express from "express";
import morgan from "morgan";
import { createTournamentsRouter } from "./tournaments/router.js";

export function createApp(dependencies) {
    const app = express();
    app.use(morgan('combined'));
    app.use(express.json());

    app.use("/tournaments", (req, res, next) => {
        next();
    }, createTournamentsRouter(dependencies));

    return app;
}