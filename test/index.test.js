import { test, mock } from "node:test";
import { strictEqual } from "node:assert";
import request from "supertest";
import { createApp } from "../src/app.js";

test("GET on /tournaments returns with 200", async () => {
    const app = createApp({
        loadTournaments: mock.fn()
    });

    const response = await request(app).get("/tournaments");
    console.log(response);
    strictEqual(response.statusCode, 200);
});

test("POST on /tournaments returns with 201", async () => {
    const app = createApp({
        saveTournament: mock.fn()
    });

    const response = await request(app).post("/tournaments");
    strictEqual(response.statusCode, 201);
});

test("DELETE on /tournaments returns with 204", async () => {
    const app = createApp({
        deleteTournament: mock.fn()
    });

    const response = await request(app).delete("/tournaments/name");
    strictEqual(response.statusCode, 204);
});

test("PUT on /tournaments returns with 204", async () => {
    const app = createApp({
        updateTournament: mock.fn()
    });

    const response = await request(app).put("/tournaments/name");
    strictEqual(response.statusCode, 204);
});