/**
 * IMPORTANT:
 * ---------
 * Do not manually edit this file if you'd like to host your server on Colyseus Cloud
 *
 * If you're self-hosting (without Colyseus Cloud), you can manually
 * instantiate a Colyseus Server as documented here:
 *
 * See: https://docs.colyseus.io/server/api/#constructor-options
 */
// const { listen } = require("@colyseus/tools");
//
// // Import arena config
// const app = require("./app.config");
//
// // Create and listen on 2567 (or PORT environment variable.)
// listen(app);

    // Self Host
// Colyseus + Express
const colyseus = require("colyseus");
const http = require("http");
const express = require("express");
const cors = require('cors');
const port = process.env.port || 8000;

const {MyRoom} = require("./rooms/MyRoom");

const app = express();
app.use(cors());
app.use(express.json());

const gameServer = new colyseus.Server({
    server: http.createServer(app)
});

// Register MyRoom as "my_room"
gameServer.define('my_room', MyRoom);

gameServer.listen(port,{hostname:'localhost'});


console.log(`Listening on http://localhost:${port}`);