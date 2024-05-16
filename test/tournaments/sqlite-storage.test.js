import { test } from "node:test";
import { strictEqual } from "node:assert";
import { connectToDb } from "../../src/tournaments/sqlite-storage.js";

test('The getUser function returns with the proper user email', () => {
    const client = connectToDb("tt.db");
    const username = "anna"

    const result = client.getUser(username);

    strictEqual(result.email, `${username}@gmail.com`);
});