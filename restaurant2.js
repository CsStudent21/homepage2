/* The source of my API 
https://striveschool.herokuapp.com/api/reservation/ */


// CALL the Functions
document.addEventListener("DOMContentLoaded", getReservations);
// document.addEventListener("DOMContentLoaded", postReservation);
// document.addEventListener("DOMContentLoaded", deleteReservation);


// GET Function to obtain the list of the reservations
async function getReservations(){
    let reservations = await fetch("https://striveschool.herokuapp.com/api/reservation/")
    let reservationsJson = await reservations.json()
    document.querySelector("#reservationsBook").innerHTML = reservationsJson.map(x => `<tr>
    <td>${x.name}</td>
    <td>${x.phone}</td>
    <td>${x.numberOfPersons}</td>
    <td>${x.smoking}</td>
    <td>${x.specialRequests}</td>
    <td>${x._id}</td>
  </tr>`).join("")
};

// Function Color

/* function Color(){
    let colorTextForm = document.querySelectorAll(".form-control");
    for(let i = 0; i < colorTextForm.length; i++){
        colorTextForm[i].style.backgroundColor = "limegreen";
    }
}; */

// POST Function to make a new reservation
async function postReservation(){
    // Define Variable of the New Reservation
    let myReservation = {
        name:document.querySelector("#name").value,
        phone:document.querySelector("#phone").value,
        numberOfPersons:document.querySelector("#numberOfPersons").value,
        smoking:document.querySelector("#smoking").checked,
        dateTime:document.querySelector("#dateTime").value,
        specialRequests:document.querySelector("#specialRequests").value,
    }

    // POST Method for the New Reservation
    await fetch("https://striveschool.herokuapp.com/api/reservation/", {
            method: "POST",
            body: JSON.stringify(myReservation),
            headers: {"Content-Type": "application/json",}
    })
    .then(response => response.json()) 
    .then(json => console.log(json));
//END of the main Function
/*
// data to be sent to the POST request
let _data = {
  title: "foo",
  body: "bar", 
  userId:1
}

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: "POST",
  body: JSON.stringify(_data),
  headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => console.log(json));
.catch(err => console.log(err));*/
};

/*
function postReservation(){
        let myReservation = {
            name:document.querySelector("#name").value,
            phone:document.querySelector("#phone").value,
            numberOfPersons:document.querySelector("#numberOfPersons").value,
            smoking:document.querySelector("#smoking").checked,
            dateTime:document.querySelector("#dateTime").value,
            specialRequests:document.querySelector("#specialRequests").value,
        };

        await fetch("https://striveschool.herokuapp.com/api/reservation/", {
            method: "POST",
            headers: new Headers ({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify(myReservation),
        });

        // Color();

        // document.querySelector("#postSuccess").innerHTML = "Table Reserved!";
    };

*/

//DELETE Function to DELETE a post
async function deleteReservation(){
    const _id = document.querySelector("#idbook").value;
    let reservations = await fetch(`https://striveschool.herokuapp.com/api/reservation/${_id}`,{
        method: "DELETE",
    })
    document.querySelector(".greenText").style.backgroundColor = "lightgreen"
    document.querySelector("#deleteSuccess").innerHTML = "Reservation Cancelled!"
};


// Test Function Pizza
function pizza(){
    document.querySelector("#postSuccess").innerHTML = "Pizza SUPER!";
};