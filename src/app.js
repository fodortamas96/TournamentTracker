import express from "express";
import { createTournamentsRouter } from "./tournaments/router.js";

export function createApp(dependencies) {
    const app = express();
    app.use(express.json());

    app.use("/tournaments", (req, res, next) => {
        next();
    }, createTournamentsRouter(dependencies));

    return app;
}