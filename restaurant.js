/* The source of my API 
https://striveschool.herokuapp.com/api/reservation/" */


// Allow DOM to be fully charged 
/* window.onload = async () => {
    await loadReservations()
}*/

document.addEventListener("DOMContentLoaded", loadReservations);

//GET Function to obtain the list of the reservations
// Old Functions
/*async function loadReservations() {
    let reservations = await fetch("https://striveschool.herokuapp.com/api/reservation/")
    let resObj = await reservations.json()

    let list = document.querySelector("#reservations")
    list.innerHTML += resObj.map(x => `<li>${x.name} -> ${x.numberOfPersons} </li>`).join("")
} */

// New Function
async function loadReservations() {
    let reservations = await fetch("https://striveschool.herokuapp.com/api/reservation/")
    let resObj = await reservations.json()

    let list = document.querySelector("#reservations")
    list.innerHTML += resObj.map(x =>
          `<tr>
             <td>${x.name}</td>
             <td>${x.phone}</td>
             <td>${x.numberOfPersons}</td>
             <td>${x.smoking}</td>
             <td>${x.specialRequests}</td>
             <td>${x._id}</td>
           </tr>`).join("")
    }

// POST Function to obtain the list of the reservations
async function sendReservation() {
    let myReservation = {
        name: document.querySelector("#name").value,
        phone: document.querySelector("#phone").value,
        numberOfPersons: document.querySelector("#people").value,
        smoking: document.querySelector("#smoker").checked,
        dateTime: document.querySelector("#date").value,
        specialRequests: document.querySelector("#extra").value,
    }

    let reservations = await fetch("https://striveschool.herokuapp.com/api/reservation/", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(myReservation)
    })

    await loadReservations()
}