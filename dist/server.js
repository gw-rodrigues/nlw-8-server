"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const body_parser_1 = __importDefault(require("body-parser"));
//SOLID
/*
    1. Single Responsibility Principles
    2. Open/Close Principle
    3. Liskov Substitution Principle
    4. Interface Segregation Principle
    5. Dependency Inversion Principle

    1. Cada classe tem uma responsabilidade única.
    2. As classes da aplicação devem ser abertas para extensão mas fechas para modificação.
    3. Nós devemos poder substituir uma classe pai por herança dela e tudo continuar funcionando.
    4. Separar em classes em varias, nao receber de apenas 1 mega-classe.ex: impressora extends imprimir, digitalizar, copiar (dividir varias classe quanto possível)
    5. Em vez da classes/função falar qual dependência ela precisa, contexto * externo diz qual ela vai usar. Ajuda deixar app mais testável. Ela so recebe as acoes e executa.
*/
//GET, POST, PUT, PATCH, DELETE
//GET = buscar
//POST = enviar, cadastrar
//PUT = atualizar informações 1 entidade
//PATCH = atualizar 1 campo informação 1 entidade
//DELETE = delete 1 informação
const app = (0, express_1.default)();
//controle de segurança, nao permite endereço estranhos acessar nosso backend
//add ex: {origin: 'http://localhost:3000'}
app.use((0, cors_1.default)());
//FIXING - Error 413 payload too large when upload image
app.use(body_parser_1.default.json({ limit: "2mb" }));
app.use(body_parser_1.default.urlencoded({ limit: "2mb", extended: true }));
//verifica antes pedidos existe objeto JSON e objeto tradicional JS
app.use(express_1.default.json());
app.use(routes_1.routes);
app.listen(3333, () => {
    console.log("HTTP server running!");
});
//SQLite > em desenvolvimento
//prima > ORM (código JS em vez sql tradicional)
