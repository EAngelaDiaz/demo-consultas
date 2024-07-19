import express, { Router } from "express";
import router from "./routes/indexRouter"

const server = express();

server.use(express.json())
server.use(router)

export default server;

//const express = require("express");

//const server = express();

//module.exports = server;