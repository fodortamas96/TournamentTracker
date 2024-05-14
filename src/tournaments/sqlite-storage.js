import Database from "better-sqlite3";

export function connectToDb(filepath) {
    const db = new Database(filepath);

    return {
        loadTournaments() {
            const statement = db.prepare("SELECT * FROM tournaments")
            return statement.all();
        },
        saveTournament(tournament) {
            const statement = db.prepare("INSERT INTO tournaments (event_type, category, city, country, surface) VALUES (?, ?, ?, ?, ?)");
            statement.run(tournament.event_type, tournament.category, tournament.city, tournament.country, tournament.surface);
        },
        deleteTournament(tournament) {
            const statement = db.prepare("DELETE FROM tournaments WHERE event_type = ? AND category = ? AND city = ?");
            statement.run(tournament.event_type, tournament.category, tournament.city);
        }
    }
}