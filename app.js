'use strict';


let all = [];

let leftImageIndex;
let centerImageIndex;
let rightImageIndex;

let leftImage = document.getElementById('left-image');
let rightImage = document.getElementById('rigth-image');
let centerImage = document.getElementById('center-image');
let divImage = document.getElementById('img-div');

let attempts = 25;
let userAttempts = 0;

let imageName= [];
let votes=[];
let shown=[];
let previmage= [];

let previousLeftIndex = -1;
let previousRightIndex = -1;
let previousCenterIndex = -1;


let btnSubmit= document.getElementById('submit-btn');
btnSubmit.addEventListener('click', submitForm);


let showResult= document.getElementById('show-btn');
showResult.addEventListener('click', showFinalResult);


function GoatImage(name, source) {
    this.name = name;
    this.source = source;
    this.imageShownNum = 0;
    this.productClicked = 0;
    this.userInput= 0;

   all.push(this);
    imageName.push(name);
}

new GoatImage('bag', 'images/bag.jpg');
new GoatImage('banana', 'images/banana.jpg');
new GoatImage('bathroom', 'images/bathroom.jpg');
new GoatImage('boots', 'images/boots.jpg');
new GoatImage('breakfast', 'images/breakfast.jpg');
new GoatImage('bubblegum', 'images/bubblegum.jpg');
new GoatImage('chair', 'images/chair.jpg');
new GoatImage('cthulhu', 'images/cthulhu.jpg');
new GoatImage('dog-duck', 'images/dog-duck.jpg');
new GoatImage('dragon', 'images/dragon.jpg');
new GoatImage('pen', 'images/pen.jpg');
new GoatImage('pet-sweep', 'images/pet-sweep.jpg');
new GoatImage('scissors', 'images/scissors.jpg');
new GoatImage('shark', 'images/shark.jpg');
new GoatImage('sweep', 'images/sweep.jpg');
new GoatImage('tauntaun', 'images/tauntaun.jpg');
new GoatImage('unicorn', 'images/unicorn.jpg');
new GoatImage('water-can', 'images/water-can.jpg');
new GoatImage('wine-glass', 'images/wine-glass.jpg');



renderImages();

divImage.addEventListener('click', imageListener);




function generateRandomIndex() {
   return  Math.floor(Math.random() * (all.length));
}

function renderImages() {
    previmage = [previousLeftIndex, previousRightIndex, previousCenterIndex];

    previous();

    console.log('Array: ',previmage);

    all[leftImageIndex].imageShownNum++;
  all[rightImageIndex].imageShownNum++;
    all[centerImageIndex].imageShownNum++;

    leftImage.src = all[leftImageIndex].source;
    centerImage.src =all[centerImageIndex].source;
    rightImage.src = all[rightImageIndex].source;

}

function previous(){
    do {
        leftImageIndex = generateRandomIndex();
    }while(previmage.includes(leftImageIndex));

    previousLeftIndex = leftImageIndex;
    previmage.push(leftImageIndex);

    do {
        rightImageIndex = generateRandomIndex();
    }while(previmage.includes(rightImageIndex));

    previousRightIndex = rightImageIndex;
    previmage.push(rightImageIndex);
    

    do {
        centerImageIndex = generateRandomIndex();
    }while(previmage.includes(centerImageIndex));

    previousCenterIndex = centerImageIndex;
}

function submitForm(){
    attempts= document.getElementById('userInput').value;
    console.log(attempts);
    getData();
    return attempts;
}

function saveData(){
    var insertedRounds = JSON.stringify(all);
    localStorage.setItem('rounds', insertedRounds);
}

function getData(){
    let  list = localStorage.getItem('rounds');
    let listJS = JSON.parse(list);
    if (listJS){
      all= listJS;
    }
    
    renderImages();
    console.log(listJS);

}

function imageListener(event) {
    console.log(userAttempts);

    if (userAttempts < attempts ) {
        if (event.target.id === 'left-image') {
           all[leftImageIndex].productClicked++;
            userAttempts++;
            renderImages();
        } else if (event.target.id === 'rigth-image') {
           all[rightImageIndex].productClicked++;
            userAttempts++;
            renderImages();
        } else if(event.target.id === 'center-image') {
           all[centerImageIndex].productClicked++;
            userAttempts++;
            renderImages();
        }else{
            console.log('after if is finished');
        }
            
        

     }
    
    saveData();
}

function showFinalResult(){

    let  resultsList = document.getElementById('result-list');
        let  finalResult;
        getData();
        for (let  i = 0; i < all.length; i++) {
            finalResult = document.createElement('hr');
            finalResult.textContent = all[i].name + ' has been shown ' +
            all[i].imageShownNum + ' times and has been clicked ' +
           all[i].productClicked + ' times.';
            resultsList.appendChild(finalResult);

        }
        divImage.removeEventListener('click', imageListener);
        
        showChart();
        
}

function showChart(){
    
    for (let  i=0; i< all.length; i++){
        votes.push(all[i].productClicked);
        shown.push(all[i].imageShownNum);
    }
    let  ctx = document.getElementById('myChart').getContext('2d');
    let chart = new Chart(ctx, {
   
    type: 'bar',


    data: {
        labels: imageName,
        datasets: [{
            label: 'Votes',
            backgroundColor: 'green',
            borderColor: 'yellow',
            data: votes
        },
        {
            label: 'Views',
            backgroundColor: 'black',
            borderColor: 'red',
            data: shown
        }
    ]
    },


    options: {
        legend: {
        fontColor: "red"},
        scales: {
            yAxes: [{
                fontColor: "orange",
                fontSize: 12,
                ticks: {
                    max: 10,
                    min: 0,
                    beginAtZero: 0,
                    stepSize: 2,
                }
        }],

    }}
});

    chart.config.data.datasets[0].data = votes;
    chart.canvas.parentNode.style.color = 'black';
}