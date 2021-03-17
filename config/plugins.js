module.exports = ({env}) => ({
    // ...

    email: {
        provider: 'sendmail',
        url: 'https://fcc-strapi.herokuapp.com/auth/reset-password',
        settings: {
            defaultFrom: 'friendsatchristscollege@gmail.com',
            defaultReplyTo: 'friendsatchristscollege@gmail.com',
        },
    }
    // ...
});