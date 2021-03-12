// Design Thinking Books
function loadDTbooks(){
    let shelf1 = document.querySelector("#designThinkingList");
    for(let i = 0; i < DTbooks.length; i++) {
        shelf1.innerHTML += `<div class="card" style="width: 18rem;">
                                <img src="${DTbooks[i].img}" class="card-img-top" alt="${DTbooks[i].title}">
                                <div class="card-body">
                                    <h5 class="card-title">${DTbooks[i].title}</h5>
                                    <p class="card-text">${DTbooks[i].text}</p>
                                    <a href="${DTbooks[i].link}" class="btn btn-primary">Buy it</a>
                                    <span class="${DTbooks[i].status}"></span>
                                </div>
                            </div>`
    }
};



let DTbooks = [
    {
        "img" : "dyl/DT1.jpg",
        "title" : "Design Thinking",
        "text" : "Thomas Lockwood, 2009",
        "link" : "https://www.amazon.com/dp/1581156685/",
        "status" : "toRead"
    },

    {
        "img" : "dyl/DT2.jpg",
        "title" : "The Art of Innovation",
        "text" : "Tom Kelley, 2001",
        "link" : "https://www.amazon.com/Art-Innovation-Lessons-Creativity-Americas-dp-1781256144/dp/1781256144/",
        "status" : "toRead"
    },

    {
        "img" : "dyl/DT3.jpg",
        "title" : "Creative Confidence",
        "text" : "Tom Kelley & David Kelley, 2015",
        "link" : "https://www.amazon.com/dp/0008139385//",
        "status" : "toRead"
    },

    {
        "img" : "dyl/DT4.jpg",
        "title" : "The Field Guide to Human-Centered Design",
        "text" : "IDEO.org, 2015",
        "link" : "https://www.amazon.com/dp/0991406311/",
        "status" : "toRead"
    },

    {
        "img" : "dyl/DT5.jpg",
        "title" : "Designing Your Life",
        "text" : "Bill Burnett 2016",
        "link" : "https://www.amazon.com/Designing-Your-Life-Well-Lived-Joyful/dp/1101875321/",
        "status" : "toRead"
    },

    {
        "img" : "dyl/DT6.jpg",
        "title" : "HBR's 10 Must Reads on Design Thinking",
        "text" : "Harvard Business Review, 2020",
        "link" : "https://www.amazon.com/Reads-Design-Thinking-featured-Brown/dp/1633698807/",
        "status" : "toRead"
    },
]

// Personal Leadership function
function loadPLbooks (){
    let shelf2 = document.querySelector("#personalLeadershipList");
    for(let i = 0; i < PLbooks.length; i++) {
        shelf2.innerHTML += `<div class="card" style="width: 18rem;">
                                <img src="${PLbooks[i].img}" class="card-img-top" alt="${PLbooks[i].title}">
                                <div class="card-body">
                                    <h5 class="card-title">${PLbooks[i].title}</h5>
                                    <p class="card-text">${PLbooks[i].text}</p>
                                    <a href="${PLbooks[i].link}" class="btn btn-primary">Buy it</a>
                                    <span class="${PLbooks[i].status}"></span>
                                </div>
                            </div>`
    }
};

let PLbooks = [
    {
        "img" : "dyl/PL1.jpg",
        "title" : "Radical Candor",
        "text" : "Kim Scott, 2019",
        "link" : "https://www.amazon.com/Radical-Candor-Revised-Kick-Ass-Humanity/dp/1250235375/",
        "status" : "toRead"
    },

]

// Negotiation Books function
function loadNbooks (){
    let shelf3 = document.querySelector("#negotiationList");
    for(let i = 0; i < Nbooks.length; i++) {
        shelf3.innerHTML += `<div class="card" style="width: 18rem;">
                                <img src="${Nbooks[i].img}" class="card-img-top" alt="${Nbooks[i].title}">
                                <div class="card-body">
                                    <h5 class="card-title">${Nbooks[i].title}</h5>
                                    <p class="card-text">${Nbooks[i].text}</p>
                                    <a href="${Nbooks[i].link}" class="btn btn-primary">Buy it</a>
                                    <span class="${Nbooks[i].status}"></span>
                                </div>
                            </div>`
    }
};

let Nbooks = [
    {
        "img" : "dyl/N1.jpg",
        "title" : "Rebel Talent",
        "text" : "Francesca Gino, 2019",
        "link" : "https://www.amazon.com/gp/product/1509860630/",
        "status" : "toRead"
    },   
]

// JTBD Books function
function loadJTBDbooks (){
    let shelf4 = document.querySelector("#JTBDList");
    for(let i = 0; i < JTBDbooks.length; i++) {
        shelf4.innerHTML += `<div class="card" style="width: 18rem;">
                                <img src="${JTBDbooks[i].img}" class="card-img-top" alt="${JTBDbooks[i].title}">
                                <div class="card-body">
                                    <h5 class="card-title">${JTBDbooks[i].title}</h5>
                                    <p class="card-text">${JTBDbooks[i].text}</p>
                                    <a href="${JTBDbooks[i].link}" class="btn btn-primary">Buy it</a>
                                    <span class="${JTBDbooks[i].status}"></span>
                                </div>
                            </div>`
    }
};

let JTBDbooks = [
    {
        "img" : "jtbd/Jtbd1.jpg",
        "title" : "The Jobs-to-be-Done Handbook",
        "text" : "Bob Moesta & Chris Spiek, 2014",
        "link" : "https://www.amazon.com/Jobs-be-Done-Handbook-techniques-application/dp/1499339232/",
        "status" : "toRead"
    },    

    {
        "img" : "jtbd/Jtbd2.jpg",
        "title" : "Choosing College",
        "text" : "Bob Moesta & Michael B. Horn, 2019",
        "link" : "https://www.amazon.com/gp/product/B07WS8F696/",
        "status" : "toRead"
    },    

    {
        "img" : "jtbd/Jtbd3.jpg",
        "title" : "Demand-Side Sales 101",
        "text" : "Bob Moesta, 2020",
        "link" : "https://www.amazon.com/gp/product/B08FRRF68Q/",
        "status" : "toRead"
    },    
]

// Calling the functions
document.addEventListener("DOMContentLoaded",loadDTbooks);

document.addEventListener("DOMContentLoaded",loadPLbooks);

document.addEventListener("DOMContentLoaded",loadNbooks);

document.addEventListener("DOMContentLoaded",loadJTBDbooks);

document.addEventListener("DOMContentLoaded", function(){
    let x = document.querySelectorAll(".read")
    for(let i = 0; i < x.length; i++ ){
      x[i].innerHTML = `<button type="button" class="btn btn-success">Read</button>`
    }
  });