import express from "express";

export function createTournamentsRouter({ loadTournaments }) {
    const tournamentsRouter = express.Router();

    tournamentsRouter.get('', (req, res, next) => {
        try {
            res.json(loadTournaments());
        } catch (err) {
            next(err);
        }
    });

    return tournamentsRouter;
}