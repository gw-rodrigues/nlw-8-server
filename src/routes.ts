import express from 'express'
//enviar email através serviços externos (em dev: mailtrap)
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedbacks-use-case';

export const routes = express.Router()

routes.post("/feedbacks", async (req, res) => {
    //função em async, await porque leva tempo para realizar a ação na database
    const { type, comment, screenshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerMailAdapter
    ) 
  
    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })

    //STATUS 201 e de criação
    return res.status(201).send()
  });