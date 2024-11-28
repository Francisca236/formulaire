const nodemailer = require("nodemailer");

// Configuration du transport SMTP
const transporter = nodemailer.createTransport({
  host: "localhost",    // Adresse du serveur SMTP (localhost pour fake-smtp-server)
  port: 2525,           // Port utilisé par le serveur SMTP
  secure: false,        // Utiliser TLS (false pour le SMTP sans SSL/TLS)
  auth: {
    user: "",           // Nom d'utilisateur (si nécessaire)
    pass: "",           // Mot de passe (si nécessaire)
  },
  tls: {
    rejectUnauthorized: false // Ignorer les erreurs de certificat pour un serveur local
  }
});

// Configuration de l'email
const mailOptions = {
  from: "expediteur@example.com",    // Adresse de l'expéditeur
  to: "destinataire@example.com",    // Adresse du destinataire
  subject: "Test d'envoi d'email",   // Sujet de l'email
  text: "Ceci est un email de test envoyé depuis Node.js", // Contenu texte de l'email
};

// Envoi de l'email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Erreur lors de l'envoi de l'email :", error);
  }
  console.log("Email envoyé avec succès :", info.response);
});
