$list = document.getElementById("list");
$firstname = document.getElementById("firstname");
$lastname = document.getElementById("lastname");
$phoneNumber = document.getElementById("phoneNumber");
$add = document.getElementById("add");
$searchBar = document.getElementById("searchBar");
$search = document.getElementById("search");
$searchResult = document.getElementById("searchResult");

var contacts = [{
    firstname: "Julien",
    lastname: "Grillot",
    phoneNumber: "0123456789"
}, {
    firstname: "John",
    lastname: "Smith",
    phoneNumber: "0123456789"
}, {
    firstname: "John",
    lastname: "Doe",
    phoneNumber: "0196874523"
}];

function textContact(contact) {
    return contact.firstname + " " + contact.lastname + " (" + contact.phoneNumber + ")";
}

function displayList() {
    elements = "";
    for (i = 0, c = contacts.length; i < c; i++) {
        elements += "<li>" + textContact(contacts[i]) + "</li>";
    }
    $list.innerHTML = elements;
}

function add() {
    contacts.push({
        firstname: $firstname.value,
        lastname: $lastname.value,
        phoneNumber: $phoneNumber.value
    });
    displayList();
}

function search() {
    search = $searchBar.value;
    elements = "";
    for (i = 0, c = contacts.length; i < c; i++) {
        if (search === contacts[i].firstname || search === contacts[i].lastname || search === contacts[i].phoneNumber) {
            elements += "<li>" + textContact(contacts[i]) + "</li>";
        }
    }
    $searchResult.innerHTML = elements;
}


$add.onclick = add;
$search.onclick = search;
displayList();
