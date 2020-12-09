const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = ( email, name) => {
    sgMail.send({
        to : email,
        from : 'findever123@gmail.com',
        subject: 'This is welcome Email',
        text : `Welcom to the app, ${name}`,
    });
}

const sendCancelationEmail = ( email, name) => {
    sgMail.send({
        to : email,
        from : 'findever123@gmail.com',
        subject: 'This is Account Cancelation Email',
        text : `Goodbye, ${name}`,
    });
}

module.exports = {
    sendWelcomeEmail, 
    sendCancelationEmail
}


