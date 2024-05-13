import Database from "better-sqlite3";

export function connectToDb(filepath) {
    const db = new Database(filepath);

    return {
        loadTournaments() {
            const statement = db.prepare("SELECT * FROM tournaments")
            return statement.all();
        } 
    }
}