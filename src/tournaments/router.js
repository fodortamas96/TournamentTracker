import express from "express";

export function createTournamentsRouter({ loadTournaments, saveTournament, deleteTournament }) {
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

    tournamentsRouter.delete('', (req, res, next) => {
        try {
            deleteTournament({
                event_type: req.query.event_type,
                category: req.query.category,
                city: req.query.city
            });
            res.sendStatus(204);
        } catch (err) {
            next(err);
        }
    });

    return tournamentsRouter;
}