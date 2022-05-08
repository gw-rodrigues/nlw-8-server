import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "638ba7bc6a8f96",
      pass: "2a3bb8eb149c19",
    },
});

export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
        from: "Equipe Feedget <oi@feedget.com>",
        to: "Gleydson Rodrigues <rodrigues.gw@gmail.com>",
        subject,
        html: body
    });
   }
}