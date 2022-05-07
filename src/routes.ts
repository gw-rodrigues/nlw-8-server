import express from 'express'
//enviar email através serviços externos (em dev: mailtrap)
import nodemailer from "nodemailer"
import { prisma } from './prisma'

export const routes = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "638ba7bc6a8f96",
      pass: "2a3bb8eb149c19",
    },
  });

routes.post("/feedbacks", async (req, res) => {
    //função em async, await porque leva tempo para realizar a ação na database
    const { type, comment, screenshot } = req.body;
    const feedback = 
  
    await transport.sendMail({
        from: "Equipe Feedget <oi@feedget.com>",
        to: "Gleydson Rodrigues <rodrigues.gw@gmail.com>",
        subject: "Novo feedback",
        html:[
            `<div style="font-family:sans-serif; font-size:16px; color:#111;">`,
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Cometário: ${comment}</p>`,
            `</div>`
        ].join("\n")
    })
  
    //STATUS 201 e de criação
    return res.status(201).json(feedback);
  });