from flask import Flask, request, render_template

app = Flask(__name__)

# Route pour afficher le formulaire
@app.route('/')
def index():
    return render_template('index.html')

# Route pour traiter le formulaire
@app.route('/submit', methods=['POST'])
def submit():
    # Récupérer les données du formulaire
    nom = request.form['nom']
    email = request.form['email']
    
    # Afficher les données dans le terminal (ou les utiliser autrement)
    return f"Nom : {nom}, Email : {email}"

if __name__ == '__main__':
    app.run(debug=True)
