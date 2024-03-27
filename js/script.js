const tableBody = document.getElementById("table-body");
let count = 0;

const getUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        
        console.log(data);

        //return data.data;
        /*data.forEach(user => {
            showResults(user.name, user.username, user.email, user.company.name, user.phone)
        });*/ 

    } catch (error) {
        console.log("Errore di caricamento dei dati");
    }
}

getUsers()


function showResults(name, username, email, company, phoneNumber) {

    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.scope = "row"
    th.textContent = count+=1
    const nameTd = document.createElement("td");
    nameTd.textContent = name;
    const usernameTd = document.createElement("td");
    usernameTd.textContent = username;
    const emailTd = document.createElement("td");
    emailTd.textContent = email;
    const companyTd = document.createElement("td");
    companyTd.textContent = company;
    const phoneTd = document.createElement("td");
    phoneTd.textContent = phoneNumber;

   tr.append(th, nameTd, usernameTd, emailTd, companyTd, phoneTd);
   tableBody.append(tr)
}

function searchUser(users) {

    const filterQuery = document.querySelector("#search-filter").value.toLowerCase();
    const inputValue = document.querySelector("#input-value").value.toLowerCase();;

    //se data.filterQuery includes (inputValue) => showResults(user.name, user.username, user.email, user.company.name, user.phone)
    console.log(filterQuery, inputValue);
};

searchUser()
    


