import express from "express";
import morgan from "morgan";
import { createTournamentsRouter, createUsersRouter } from "./tournaments/router.js";

export function createApp(dependencies) {
    const app = express();
    app.use(morgan('combined'));
    app.use(express.json());

    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
        res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        next();
      })

    app.use("/tournaments", (req, res, next) => {
        next();
    }, createTournamentsRouter(dependencies));

    app.use("/users", (req, res, next) => {
        next();
    }, createUsersRouter(dependencies));

    return app;
}