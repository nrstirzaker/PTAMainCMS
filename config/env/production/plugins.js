module.exports = ({env}) => ({
    // ...
    upload: {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
        },
    },
    email: {
        provider: 'sendmail',
        settings: {
            defaultFrom: 'friendsatchristscollege@gmail.com',
            defaultReplyTo: 'friendsatchristscollege@gmail.com',
        },
    }
    // ...
});