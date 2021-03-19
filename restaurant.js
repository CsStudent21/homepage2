/* The source of my API 
https://striveschool.herokuapp.com/api/reservation/" */


document.addEventListener("DOMContentLoaded", getReservations);
document.addEventListener("DOMContentLoaded", putReservation);
document.addEventListener("DOMContentLoaded", deleteReservation);

// GET Function
async function getReservations() {
    let reservations = await fetch("https://striveschool.herokuapp.com/api/reservation/")
    let resObj = await reservations.json()

    document.querySelector("#reservations").innerHTML += resObj.map(x =>
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
async function putReservation() {
    let myReservation = {
        name: document.querySelector("#name").value,
        phone: document.querySelector("#phone").value,
        numberOfPersons: document.querySelector("#people").value,
        smoking: document.querySelector("#smoker").checked,
        dateTime: document.querySelector("#date").value,
        specialRequests: document.querySelector("#extra").value,
    }
    
    let reservations = await fetch("https://striveschool.herokuapp.com/api/reservation/",{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(myReservation)
    });

  await getReservations()
};

//DELETE Function to DELETE a post
function deleteReservation(){
    document.querySelector("#cancelbook").addEventListener("click", async function() {
        const id = document.querySelector("#idbook").value;
        let reservations = await fetch(`https://striveschool.herokuapp.com/api/reservation/${id}`,{
            method: "DELETE",
        })
        document.querySelector(".greenText").style.backgroundColor = "green"
        document.querySelector("#success").innerHTML = "Reservation Cancelled!"
        await getReservations()
    });
};