const servidor = require("./config/servidor")

let run_express = servidor.run_express

let porta = servidor.porta

run_express.listen(porta,function () {
    console.log(`servidor rodando em http://localhost:${porta}/`)
})