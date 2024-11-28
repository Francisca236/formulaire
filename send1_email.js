// Importer la bibliothèque SendGrid
const sgMail = require('@sendgrid/mail');

// Configurer SendGrid avec votre clé API
sgMail.setApiKey('YOUR_SENDGRID_API_KEY'); // Remplacez YOUR_SENDGRID_API_KEY par votre clé API SendGrid

// Configurer le contenu de l'email
const msg = {
  to: 'destinataire@example.com', // Adresse email du destinataire
  from: 'expediteur@example.com', // Adresse email de l'expéditeur (doit être vérifiée sur SendGrid)
  subject: 'Test d\'envoi d\'email avec SendGrid',
  text: 'Ceci est un test d\'envoi d\'email en utilisant SendGrid et Node.js.',
  html: '<strong>Ceci est un test d\'envoi d\'email en utilisant SendGrid et Node.js.</strong>', // Contenu HTML de l'email
};

// Envoyer l'email
sgMail
  .send(msg)
  .then(() => {
    console.log('Email envoyé avec succès');
  })
  .catch((error) => {
    console.error('Erreur lors de l\'envoi de l\'email :', error);
  });
