document.addEventListener('deviceready', getContacts);


function getContacts() {

    let options = new ContactFindOptions();
    options.filter = '';
    options.multiple = true; 
    options.hasPhoneNumber = true;

    let fields = ['name'];

    navigator.contacts.find(fields, listerContact, handleError, options);

}

function listerContact(contacts) {

    let code = '';

    for (let i = 0; i < contacts.length; i++) {
        code += `<li>
                    <a href="#">
                        <img src="img/avatar.jpg" alt="Profile picture">
                        <h4>${ contacts[i].name.formatted}</h4>
                        <p>${ contacts[i].phoneNumber[0].value } </p>
                    </a>
                </li>`;
    }4
$(contactlist).listview('refresh');
}

function handleError(error)
{
    alert("Une erreur inattendue s'est produite");
    console.log(error);
}