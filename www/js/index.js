async function getContacts() {
    let url = "http://localhost:8080/";
   try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

window.onload = async function() {
    let users = await getContacts();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<li>
                             <a href="#">
                                 <img src="img/${user.picture}" alt="Profile picture">
                                 <h4>${user.firstname} ${user.lastname}</h4>
                                 <p>${user.phone} </p>
                             </a>
                         </li>`;

        html += htmlSegment;
    });

    let container = document.querySelector('#list');
    container.innerHTML = html;
    $('#list').listview('refresh');
}
