// Servidor
const express = require("express")
const server = express()

const{
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require("./pages")


// Cconfigurar nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true, 
})

// Inicio e configuração do servidor
server
//receber os dados do req.body
.use(express.urlencoded({extended: true}))
// Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/",pageLanding) 
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// Start servidor
.listen(5500)

//2:18:00 mostrou server para ver o codigo certo

