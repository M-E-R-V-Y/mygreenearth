var time = 5;
var timerId;

function startTimer() {
  time = 5;
  timer.innerHTML = time;
  timerId = setInterval(() => {
    time--;
    if (time == 0) location.href = "./gameover.html?score=" + score;
    timer.innerHTML = time;
  }, 1000);
}

function resetTime(intervalId) {
  clearInterval(intervalId);
  startTimer();
}

startTimer();

var myImage = document.getElementById('mainImage');
var imageArray = ["pou_brown1.jpg", "pou_gray1.PNG", "pou_green1.jpg", "pou_yellow1.jpg", "pou_yellow2.jpg", "pou_brown2.jpg", "pou_gray2.jpg","pou_green2.jpg", "pou_yellow3.jpg", "pou_yellow4.jpg", "pou_gray3.jpg", "pou_brown3.jpg", "pou_yellow5.jpg", "pou_yellow6.jpg", "pou_gray4.jpg", "pou_yellow7.jpg", "pou_gray5.jpg", "pou_green3.jpg" ];
var imageIndex = 0;

var score=0;

const greentrash = document.getElementById("GREEN")
const yellowtrash =  document.getElementById("YELLOW")
const browntrash = document.getElementById("BROWN")
const graytrash = document.getElementById("GRAY")

  
    function Yellowtrash(){
        myImage.setAttribute("src", imageArray[imageIndex]);
          // if (imageIndex === 3 || 8 || 9 || 12 || 13 || 15 ){
            if (imageIndex === 3 || imageIndex===8 || imageIndex===9 || imageIndex===12 || imageIndex===13 || imageIndex===15) {
              score++;  
            }
         // else {location.href = "./gameover.html?score="; + score;
            else {
           //console.log("you failed");
           location.href = "./gameover.html";
          }
    resetTime(timerId);
    imageIndex++;
    }

    function Greentrash(){
      myImage.setAttribute("src", imageArray[imageIndex]);
      //  if (imageIndex === 2 || 7 || 17) {
        if (imageIndex === 2 || imageIndex === 7 || imageIndex ===17){
        score++;
      }
        else {
        //console.log("you failed");
        location.href = "./gameover.html";
    }
    resetTime(timerId);
    imageIndex++;
  }

    function Browntrash(){
      myImage.setAttribute("src", imageArray[imageIndex]);
     // if (imageIndex === 0 || 5 || 11) {
      if (imageIndex === 0 || imageIndex === 5 || imageIndex === 11)
      {
        score++;
         }
      else {
       // console.log("you failed");
       location.href = "./gameover.html";
      }
    resetTime(timerId)
    imageIndex++;
  }

    function Graytrash(){
      myImage.setAttribute("src", imageArray[imageIndex]);
      //if (imageIndex === 1 || 6 || 10 || 14) {
      if (imageIndex === 1 || imageIndex === 6 || imageIndex === 10 || imageIndex ===14) {
        score++;
    }      
      else {
        //console.log("you failed");
        location.href = "./gameover.html";
    }
    resetTime(timerId)
    imageIndex++;
  }