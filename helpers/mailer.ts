import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

interface EmailParams {
    to: string;
    subject: string;
    html: string;
}

const sendEmail = async ({ to, subject, html }: EmailParams) => {
    try {
        const result = await transporter.sendMail({
            from: 'Compañia Natalia Gonzalez',
            to,
            subject,
            html
        });

        console.log({ result })
        return { ok: true, message: "Excelente mail enviado con éxito"}
    } catch (error) {
        console.log({ error });
        
        return {
            ok: false,
            message: 'Hubo un problema al enviar el mail',
            err: error
        }
        
    }

}

export default sendEmail