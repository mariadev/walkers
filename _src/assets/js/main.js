'use strict';

const element = document.querySelector('.anime-right');
const sky = document.querySelector('.sky');
const landscape = document.querySelector('.landscape');
let movingAmount = 0;
let myReq;
// const body = document.querySelector('body');
const imagePath = './assets/images/girl';
const totalFrames = 12;
const animationDuration = 1300;
const timePerFrame = animationDuration / totalFrames;
let timeWhenLastUpdate;
let timeFromLastUpdate;
let frameNumber = 2;
var timeLandscape;
let elmStatic = document.querySelector('.static-right');

function step(startTime) {
  if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;
  timeFromLastUpdate = startTime - timeWhenLastUpdate;

  if (timeFromLastUpdate > timePerFrame) {
    element.src = imagePath + `/girl${frameNumber}.png`;
    timeWhenLastUpdate = startTime;

    if (frameNumber >= totalFrames) {
      frameNumber = 1;
    } else {
      frameNumber = frameNumber + 1;
    }
  }
  myReq = requestAnimationFrame(step);

}

function landScapeToRight() {
  const landscapeWidth = landscape.clientWidth;
  const landscapeWidthNegative = -Math.abs(landscapeWidth);
  console.log(landscapeWidthNegative);
  if (movingAmount >= -1090) {
    landscape.style.left = movingAmount + 'px';
    movingAmount = movingAmount - 5;
  }
  if (movingAmount < -800) {
    sky.style.backgroundColor = '#08082B';
  } else {
    sky.style.backgroundColor = 'skyblue';
  }
}

document.addEventListener('keydown', direction);
document.addEventListener('keyup', directionStop);

function direction(event) {
  let key = event.keyCode;
  if (key === 39 && !element.classList.contains('show-elm')) {

    timeLandscape = setInterval(landScapeToRight, 50);
    element.className += ' ' + 'show-elm';
    myReq = requestAnimationFrame(step);
    elmStatic.classList.remove('face-right');

  }
}
const cancelAnimationFrame = window.cancelAnimationFrame;

function directionStop(event) {
  let key = event.keyCode;
  if (key === 39) {
    clearInterval(timeLandscape);
    elmStatic.className += ' ' + 'face-right';
    element.classList.remove('show-elm');
    cancelAnimationFrame(myReq);
  }

}

