'use strict'
function sendEmail(userData) {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: userData.email,
        from: 'inhabit@inhabit.eco',
        template_id: 'd-0baa6cf060314b1d99a44c008ca52f21',
        dynamic_template_data: {
            "name": userData.name,
        },
    };
    sgMail.send(msg)
    .then(m => {
        console.log('Mail sent');
    })
    .catch(error => {
        //Log friendly error
        console.error(error.toString());
    });
}
module.exports = {
    sendEmail: sendEmail
}
