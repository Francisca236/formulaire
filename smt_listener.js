const SMTPServer = require("fake-smtp-server");

// Créer et configurer le serveur SMTP
const server = new SMTPServer({ port: 2525 }); // Le serveur écoute sur le port 2525

server.on("start", () => {
  console.log("Le serveur SMTP est démarré et écoute sur le port 2525");
});

// Événement déclenché à chaque nouvel e-mail reçu
server.on("new", (email) => {
  console.log("Nouvel email reçu:");

  // Récupérer et afficher l'adresse de l'expéditeur
  const fromAddress = email.from.value[0].address;
  console.log("Expéditeur :", fromAddress);

  // Récupérer et afficher l'adresse du destinataire
  const toAddress = email.to.value.map(recipient => recipient.address).join(", ");
  console.log("Destinataires :", toAddress);

  // Afficher le sujet et le contenu de l'email
  console.log("Sujet :", email.subject);
  console.log("Contenu :", email.text);

  console.log("------");
});

// Gérer les erreurs du serveur SMTP
server.on("error", (err) => {
  console.error("Erreur du serveur SMTP :", err);
});

// Arrêter le serveur proprement quand le processus est interrompu
process.on("SIGINT", () => {
  server.close(() => {
    console.log("Le serveur SMTP a été arrêté.");
    process.exit(0);
  });
});

// Démarrer le serveur
server.start();
