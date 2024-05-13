import { createApp } from "./app.js"

process.on('unhandledRejection', (reason, promise) => {
    console.log('🚨🚨🚨🚨 Graceful shutdown...', reason)
    process.exit(1)
})

const app = createApp();

app.listen(3000, () => {
    console.log("Service is listening on http://localhost:3000");
})