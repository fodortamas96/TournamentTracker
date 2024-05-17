import express from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import { createTournamentsRouter, createUsersRouter } from "./tournaments/router.js";
import swaggerDocument from "../docs/swagger.json" assert { type: "json" };

export function createApp(dependencies) {
    const app = express();
    app.use(morgan('combined'));
    app.use(express.json());
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
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