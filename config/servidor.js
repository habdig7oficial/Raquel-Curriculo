const express = require("express")

const run_express = express()

const porta = process.env.PORT || 7777

const consign = require("consign")

run_express.use(express.static("./assets"))

consign().include("rotas").into(run_express)

module.exports = {run_express,porta}