import Database from "better-sqlite3";

export function connectToDb(filepath) {
    const db = new Database(filepath);
    //db.pragma('journal_mode = WAL');

    return {
        loadTournaments() {
            const statement = db.prepare("SELECT * FROM tournaments")
            return statement.all();
        },
        saveTournament(tournament) {
            const statement = db.prepare("INSERT INTO tournaments (event_type, category, city, country, surface) VALUES (?, ?, ?, ?, ?)");
            statement.run(tournament.event_type, tournament.category, tournament.city, tournament.country, tournament.surface);
        },
        deleteTournament(name) {
            const statement = db.prepare("DELETE FROM tournaments WHERE name = ?");
            statement.run(name);
        },
        updateTournament(tournament, name) {
            let setParams = "";
            let updateValues = [];
            for (const [key, value] of Object.entries(tournament)) {
                if (value) {
                    setParams += `${key} = ?, `
                    updateValues.push(value);
                }   
            }
            const subSetParams = setParams.substring(0, setParams.length - 2);

            const statement = db.prepare("UPDATE tournaments " +
                "SET  " + subSetParams + " WHERE name = ?");
            statement.run(...updateValues, name);
        }
    }
}