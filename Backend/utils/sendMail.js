const nodemailer = require('nodemailer');

const sendMail = async (options)=>{

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'arvindnagaraj.n@gmail.com',
            pass:'xsvq wkst tsxy jehf'
        }
    })

    const mailOptions = {
        from:'arvindnagaraj.n@gmail.com',
        to:options.mail,
        subject:options.subject,
        text:options.text
    };

    await transporter.sendMail(mailOptions);

}

module.exports = sendMail;