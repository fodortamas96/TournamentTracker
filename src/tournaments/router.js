import express from "express";

export function createTournamentsRouter({ loadTournaments, saveTournament }) {
    const tournamentsRouter = express.Router();

    tournamentsRouter.get('', (req, res, next) => {
        try {
            res.json(loadTournaments());
        } catch (err) {
            next(err);
        }
    });

    tournamentsRouter.post('', (req, res, next) => {
        try {
            console.log(req.body)
            saveTournament(req.body);
            res.sendStatus(201);
        } catch (err) {
            next(err);
        }
    });

    return tournamentsRouter;
}