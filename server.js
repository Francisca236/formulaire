// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// Middleware pour analyser les données du formulaire
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir des fichiers statiques (ex. : fichiers HTML)
app.use(express.static('public'));

// Configuration de Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // Utilisez le service email de votre choix
    auth: {
        user: 'votre_email@gmail.com',
        pass: 'votre_mot_de_passe'
    }
});

// Route POST pour le formulaire de contact
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'votre_email@gmail.com', // Adresse qui recevra le message
        subject: `Nouveau message de ${name}`,
        text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Erreur lors de l\'envoi du message.');
        } else {
            console.log('Email envoyé : ' + info.response);
            res.status(200).send('Message envoyé avec succès !');
        }
    });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
