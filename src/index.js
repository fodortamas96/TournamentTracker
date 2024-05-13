import { createApp } from "./app.js";
import { connectToDb } from "./tournaments/sqlite-storage.js";

process.on('unhandledRejection', (reason, promise) => {
    console.log('🚨🚨🚨🚨 Graceful shutdown...', reason);
    process.exit(1);
})

const client = await connectToDb("tt.db");
const app = createApp(client);


app.listen(3000, () => {
    console.log("Service is listening on http://localhost:3000");
});

