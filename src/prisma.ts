import { PrismaClient } from "@prisma/client";

//mostrar cade operação realizada no log do terminal
export const prisma = new PrismaClient({
    log:['query'],
})