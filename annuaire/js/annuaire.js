var contacts = [{
  prenom: "Julien",
  nom: "Grillot",
  numero: "0123456789"
}, {
  prenom: "John",
  nom: "Smith",
  numero: "0123456789"
}, {
    prenom: "John",
    nom: "Doe",
    numero: "0196874523"
}];

function texteContact(contact) {
    for (var i = 0, c = contacts.length; i < c ; i++) {
        if (contact === contacts[i]) {
            return contacts[i].prenom + " " + contacts[i].nom + " (" + contacts[i].numero + ")";
        }
        else {
            return "Désolé, ce contact n'existe pas.";
        }
    }
}

//texteContact(); 
alert(texteContact(contacts[0])); // affiche « Julien Grillot (0123456789) »