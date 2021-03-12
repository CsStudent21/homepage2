// Business Analytics Books
function loadBAbooks(){
    let shelf = document.querySelector("#businessAnalyticsList");
    for(let i = 0; i < BAbooks.length; i++) {
        shelf.innerHTML += `<div class="card" style="width: 18rem;">
                                <img src="${BAbooks[i].img}" class="card-img-top" alt="${BAbooks[i].title}">
                                <div class="card-body">
                                    <h5 class="card-title">${BAbooks[i].title}</h5>
                                    <p class="card-text">${BAbooks[i].text}</p>
                                    <a href="${BAbooks[i].link}" class="btn btn-primary">Buy it</a>
                                    <span class="${BAbooks[i].status}"></span>
                                </div>
                            </div>`
    }
};



let BAbooks = [
    {
        "img" : "core/BA1core.jpg",
        "title" : "The Analytics Edge",
        "text" : "Dimitris Bertsimas, Allison O'Hair, William Pulleyblank, 2016",
        "link" : "https://www.amazon.com/Analytics-Edge-Dimitris-Bertsimas/dp/098991089X/",
        "status" : "toRead"
    },
]

// Strategy Books function
function loadSbooks (){
    let shelf = document.querySelector("#strategyList");
    for(let i = 0; i < Sbooks.length; i++) {
        shelf.innerHTML += `<div class="card" style="width: 18rem;">
                                <img src="${Sbooks[i].img}" class="card-img-top" alt="${Sbooks[i].title}">
                                <div class="card-body">
                                    <h5 class="card-title">${Sbooks[i].title}</h5>
                                    <p class="card-text">${Sbooks[i].text}</p>
                                    <a href="${Sbooks[i].link}" class="btn btn-primary">Buy it</a>
                                    <span class="${Sbooks[i].status}"></span>
                                </div>
                            </div>`
    }
};

let Sbooks = [
    {
        "img" : "core/S1core.jpg",
        "title" : "The Content Trap",
        "text" : "Bharat Anand, 2016",
        "link" : "https://www.amazon.com/Content-Trap-Strategists-Digital-Change/dp/0812995384/",
        "status" : "read"
    },

    {
        "img" : "core/S2core.jpg",
        "title" : "Trust",
        "text" : "Tarun Khanna, 2018",
        "link" : "https://www.amazon.com/Trust-Tarun-Khanna-audiobook/dp/B07DP4M5FC/",
        "status" : "read"
    },

    {
        "img" : "core/S3core.jpg",
        "title" : "Reimagining Capitalism in a World on Fire",
        "text" : "Rebecca Henderson, 2020",
        "link" : "https://www.amazon.com/Reimagining-Capitalism-World-Rebecca-Henderson/dp/1541730151/",
        "status" : "toRead"
    },
]

// Finance Books function
function loadFbooks (){
    let shelf = document.querySelector("#financeList");
    for(let i = 0; i < Fbooks.length; i++) {
        shelf.innerHTML += `<div class="card" style="width: 18rem;">
                                <img src="${Fbooks[i].img}" class="card-img-top" alt="${Fbooks[i].title}">
                                <div class="card-body">
                                    <h5 class="card-title">${Fbooks[i].title}</h5>
                                    <p class="card-text">${Fbooks[i].text}</p>
                                    <a href="${Fbooks[i].link}" class="btn btn-primary">Buy it</a>
                                    <span class="${Fbooks[i].status}"></span>
                                </div>
                            </div>`
    }
};

let Fbooks = [
    {
        "img" : "core/F1core.jpg",
        "title" : "An Easy Introduction to Financial Accounting",
        "text" : "V.G. Narayanan, 2019",
        "link" : "https://www.amazon.com/Easy-Introduction-Financial-Accounting-Self-Study-dp-0997893621/dp/0997893621/",
        "status" : "toRead"
    },

    {
        "img" : "core/F2core.jpg",
        "title" : "The Wisdom of Finance",
        "text" : "Mihir A. Desai, 2017",
        "link" : "https://www.amazon.com/Wisdom-Finance-Discovering-Humanity-Return/dp/054491113X/",
        "status" : "toRead"
    },

    {
        "img" : "core/F3core.jpg",
        "title" : "How Finance Works",
        "text" : "Mihir A. Desai, 2019",
        "link" : "https://www.amazon.com/How-Finance-Works-Thinking-Numbers/dp/1633696707/",
        "status" : "toRead"
    },
]



// Calling the functions
document.addEventListener("DOMContentLoaded",loadBAbooks);

document.addEventListener("DOMContentLoaded",loadSbooks);

document.addEventListener("DOMContentLoaded",loadFbooks);

document.addEventListener("DOMContentLoaded", function(){
    let x = document.querySelectorAll(".read")
    for(let i = 0; i < x.length; i++ ){
      x[i].innerHTML = `<button type="button" class="btn btn-success">Read</button>`
    }
  });