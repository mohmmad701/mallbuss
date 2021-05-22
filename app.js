'use strict'; 

//                        
let allproduct = [];
//using in function showsimages
let leftImageIndex;
let centerImageIndex;
let rightImageIndex;
//using to show the image in function shows iamge
let leftImage = document.getElementById('left-image');
let rightImage = document.getElementById('rigth-image');
let centerImage = document.getElementById('center-image');
let divImage = document.getElementById('img-div');

let maxattempts = 25;
// using in function image licenr عشان اكبس
let userAttempts = 0;
//three array for chart
let imageName= [];
let votes=[];
let shown=[];
//to compare the first three amage 
let previmage= [];
 let userenter=prompt("you can put the number ");
 //عشان يشيك الماكس مع القيمة المدخلة واذا كانت فراغ و null
 if(maxattempts !==userenter  && userenter !==null && userenter !=='')
 {
maxattempts=userenter;
 }




function ProductImage(name, source) {
    this.name = name;
    this.source = source;
    this.Shown= 0;
    //using in function leisineer
    this.Clicked = 0;
  

   allproduct.push(this);
   //using  in chart
    imageName.push(name);
}


new ProductImage('bag', 'images/bag.jpg');
new ProductImage('banana', 'images/banana.jpg');
new ProductImage('bathroom', 'images/bathroom.jpg');
new ProductImage('boots', 'images/boots.jpg');
new ProductImage('breakfast', 'images/breakfast.jpg');
new ProductImage('bubblegum', 'images/bubblegum.jpg');
new ProductImage('chair', 'images/chair.jpg');
new ProductImage('cthulhu', 'images/cthulhu.jpg');
new ProductImage('dog-duck', 'images/dog-duck.jpg');
new ProductImage('dragon', 'images/dragon.jpg');
new ProductImage('pen', 'images/pen.jpg');
new ProductImage('pet-sweep', 'images/pet-sweep.jpg');
new ProductImage('scissors', 'images/scissors.jpg');
new ProductImage('shark', 'images/shark.jpg');
new ProductImage('sweep', 'images/sweep.jpg');
new ProductImage('tauntaun', 'images/tauntaun.jpg');
new ProductImage('unicorn', 'images/unicorn.jpg');
new ProductImage('water-can', 'images/water-can.jpg');
new ProductImage('wine-glass', 'images/wine-glass.jpg');



//renderImages();






function generateRandomIndex() {
   return  Math.floor(Math.random() * (allproduct.length));
}
console.log(allproduct);
//sow the three iamge
function showsImages() {
  //  previmage = [previousLeftIndex, previousRightIndex, previousCenterIndex];

   // previous();

   // console.log('Array: ',previmage);

//     all[leftImageIndex].imageShownNum++;
//   all[rightImageIndex].imageShownNum++;
//     all[centerImageIndex].imageShownNum++;

//     leftImage.src = all[leftImageIndex].source;
//     centerImage.src =all[centerImageIndex].source;
//     rightImage.src = all[rightImageIndex].source;
// to get the index of the images in abjects
//console.log(leftImageIndex); to see the index num randomliy
leftImageIndex=generateRandomIndex();
rightImageIndex=generateRandomIndex();
centerImageIndex=generateRandomIndex();
//لاختيار 3 صور عشوائبات من خلال index
while(leftImageIndex===rightImageIndex||leftImageIndex===centerImageIndex||rightImageIndex===centerImageIndex||previmage.includes(leftImageIndex)||previmage.includes(rightImageIndex)||previmage.includes(centerImageIndex))
{// هاي عشان بختار صورتين مختلفات لو في تشابة بجملو الوايل
    leftImageIndex=generateRandomIndex();
rightImageIndex=generateRandomIndex();
centerImageIndex=generateRandomIndex();
}
//اري حفظت اول 3 صور
previmage[leftImageIndex,rightImageIndex,centerImageIndex];
leftImage.src=allproduct[leftImageIndex].source;

allproduct[leftImageIndex].shown++;
rightImage.src=allproduct[rightImageIndex].source;
allproduct[rightImageIndex].shown++;
centerImage.src=allproduct[centerImageIndex].source;
allproduct[centerImageIndex].shown++;





}

showsImages();

// function previous(){
//     do {
//         leftImageIndex = generateRandomIndex();
//     }while(previmage.includes(leftImageIndex));

//     previousLeftIndex = leftImageIndex;
//     previmage.push(leftImageIndex);

//     do {
//         rightImageIndex = generateRandomIndex();
//     }while(previmage.includes(rightImageIndex));

//     previousRightIndex = rightImageIndex;
//     previmage.push(rightImageIndex);
    

//     do {
//         centerImageIndex = generateRandomIndex();
//     }while(previmage.includes(centerImageIndex));

//     previousCenterIndex = centerImageIndex;
// }



// function saveData(){
//     let  data = JSON.stringify(allproduct);
//     localStorage.setItem('rounds', data);
// }

// function getData(){
//     let  list = localStorage.getItem('rounds');
//     let listJS = JSON.parse(list);
//     if (listJS!==null){
//       allproduct= listJS;
//     }
    
//     showsImages();
   

// }
// getData();
divImage.addEventListener('click', imageListener);
//عشان اكبس على الصوره
 function imageListener(event) {
//     console.log(userAttempts);

//     if (userAttempts < attempts ) {
//         if (event.target.id === 'left-image') {
//            all[leftImageIndex].productClicked++;
//             userAttempts++;
//             renderImages();
//         } else if (event.target.id === 'rigth-image') {
//            all[rightImageIndex].productClicked++;
//             userAttempts++;
//             renderImages();
//         } else if(event.target.id === 'center-image') {
//            all[centerImageIndex].productClicked++;
//             userAttempts++;
//             renderImages();
//         }else{
//             console.log('after if is finished');
//         }
            
        

//      }
    
//     saveData();
userAttempts++;
if(userAttempts<=maxattempts)
{
    if(event.target.id==='left-image')
    {
allproduct[leftImageIndex].Clicked++;
    }
    else if (event.target.id==='center-image')
    {
allproduct[centerImageIndex].Clicked++;
    }
    else
    {
        allproduct[rightImageIndex].Clicked++;
    }
    showsImages();

     
    
}
else
{

    divImage.removeEventListener('click', imageListener);
    for (let  i=0; i< allproduct.length; i++){
        votes.push(allproduct[i].Clicked);
        shown.push(allproduct[i].Shown);
    }
    let showResult= document.getElementById('show-Result');
 showResult.addEventListener('click', showFinalResult);

 function showFinalResult(){

    let  resultsList = document.getElementById('result-list');
       let  finalResult;
       // getData();
        for (let  i = 0; i < allproduct.length; i++) {
            finalResult = document.createElement('li');
           // finalResult.textContent = allproduct[i].name + ' has been shown ' +
            //allproductl[i].shown + ' times and has been clicked ' +
           //allproduct[i].votes + ' times.';
            resultsList.appendChild(finalResult);
            finalResult.textContent=`${allproduct[i].name} has been shown ${allproduct[i].Shown} times and has been shown ${allproduct[i].Clicked } times`;
            

        }
       
        
      //  saveData();
        chirtShown();
        
}

 
    

}


 }



//  function showChart(){
    
   
//     let  ctx = document.getElementById('myChart').getContext('2d');
//     let chart = new Chart(ctx, {
   
//     type: 'bar',


//     data: {
//         labels: imageName,
//         datasets: [{
//             label: 'Votes',
//             backgroundColor: 'green',
//             borderColor: 'yellow',
//             data: votes
//         },
//         {
//             label: 'Views',
//             backgroundColor: 'black',
//             borderColor: 'red',
//             data: shown
//         }
//     ]
//     },


//     options: {
//         legend: {
//         fontColor: "red"},
//         scales: {
//             yAxes: [{
//                 fontColor: "orange",
//                 fontSize: 12,
//                 ticks: {
//                     max: 10,
//                     min: 0,
//                     beginAtZero: 0,
//                     stepSize: 2,
//                 }
//         }],

//     }}
// });

 
// }
function chirtShown() {
    let ctx = document.getElementById("myChart").getContext("2d");
    let myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels:imageName ,
        datasets: [
          {
            label: "# of product  Votes",
            data: votes,
            backgroundColor: "red",
            borderColor: "red",
            borderWidth: 1,
          },
          {
            label: "# of product  shown",
            data:shown,
            backgroundColor: "green",
            borderColor: "green",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  