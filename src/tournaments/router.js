import express from "express";

export function createTournamentsRouter({ loadTournaments, saveTournament, deleteTournament, updateTournament }) {
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
            saveTournament(req.body);
            res.sendStatus(201);
        } catch (err) {
            next(err);
        }
    });

    tournamentsRouter.delete('/:name', (req, res, next) => {
        try {
            deleteTournament(req.params.name);
            res.sendStatus(204);
        } catch (err) {
            next(err);
        }
    });

    tournamentsRouter.put('/:name', (req, res, next) => {
        try {
            updateTournament( req.body, req.params.name);
            res.sendStatus(204);
        } catch (err) {
            next(err);
        }
    })

    return tournamentsRouter;
}