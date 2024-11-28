# app.py
from flask import Flask, render_template, request

app = Flask(__name__)

# Route pour afficher le formulaire
@app.route('/')
def form():
    return render_template('form.html')

# Route pour traiter les données du formulaire
@app.route('/submit', methods=['POST'])
def submit():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    # Affiche les données dans la console (ou effectuez toute autre action)
    print(f"Nom: {name}")
    print(f"Email: {email}")
    print(f"Message: {message}")

    # Réponse au client
    return f"Merci {name}, votre message a été reçu !"

if __name__ == '__main__':
    app.run(debug=True)
