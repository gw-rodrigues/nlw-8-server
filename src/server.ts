import express from "express";
import cors from "cors";
import { routes } from "./routes";
import bodyParser from "body-parser";

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

const app = express();

//controle de segurança, nao permite endereço estranhos acessar nosso backend
//add ex: {origin: 'http://localhost:3000'}
app.use(cors());

//FIXING - Error 413 payload too large when upload image
app.use(bodyParser.json({ limit: "2mb" }));
app.use(bodyParser.urlencoded({ limit: "2mb", extended: true }));

//verifica antes pedidos existe objeto JSON e objeto tradicional JS
app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log("HTTP server running!");
});

//SQLite > em desenvolvimento
//prima > ORM (código JS em vez sql tradicional)
