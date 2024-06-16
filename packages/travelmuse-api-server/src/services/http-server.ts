import http from "http";
import express from "express";

const app = express();
const httpServer = http.createServer(app);

export default httpServer;
