"use strict";const element=document.querySelector(".anime-right"),sky=document.querySelector(".sky"),landscape=document.querySelector(".landscape");let myReq,movingAmount=0;const imagePath="./assets/images/girl",totalFrames=12,animationDuration=1300,timePerFrame=1300/12;let timeWhenLastUpdate,timeFromLastUpdate,frameNumber=2;var timeLandscape;let elmStatic=document.querySelector(".static-right");function step(e){timeWhenLastUpdate||(timeWhenLastUpdate=e),timeFromLastUpdate=e-timeWhenLastUpdate,timeFromLastUpdate>1300/12&&(element.src=imagePath+`/girl${frameNumber}.png`,timeWhenLastUpdate=e,frameNumber>=12?frameNumber=1:frameNumber+=1),myReq=requestAnimationFrame(step)}function landScapeToRight(){const e=landscape.clientWidth,t=-Math.abs(e);console.log(t),movingAmount>=-1090&&(landscape.style.left=movingAmount+"px",movingAmount-=5),sky.style.backgroundColor=movingAmount<-800?"#08082B":"skyblue"}function direction(e){39!==e.keyCode||element.classList.contains("show-elm")||(timeLandscape=setInterval(landScapeToRight,50),element.className+=" show-elm",myReq=requestAnimationFrame(step),elmStatic.classList.remove("face-right"))}document.addEventListener("keydown",direction),document.addEventListener("keyup",directionStop);const cancelAnimationFrame=window.cancelAnimationFrame;function directionStop(e){39===e.keyCode&&(clearInterval(timeLandscape),elmStatic.className+=" face-right",element.classList.remove("show-elm"),cancelAnimationFrame(myReq))}