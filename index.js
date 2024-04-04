const express = require("express");
const expressWs = require("express-ws");

const app = express();
const port = 4000;

expressWs(app);

// WebSocket route
app.ws("/ww-12-44", (ws, req) => {
  console.log("WebSocket connected");

  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);
    // Handle received messages here

    // Echo the message back
    setTimeout(() => {
      ws.send(message);
    }, 200);
  });

  ws.on("close", () => {
    console.log("WebSocket disconnected");
    // Perform cleanup tasks if needed
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
