const medias = {
  audio : false,
  video : {
    // facingMode : {ideal:"user"}, //フロントカメラ
    facingMode : {ideal:"environment"}, //リアカメラ
    frameRate : {ideal:240},
    exposureMode : "manual",
    exposureCompensation : {ideal:3},
    iso : {ideal:10}
  }
  // image : {
  //   exposureMode : "none",
  //   exposureCompensation : {ideal:3},
  //   iso : {ideal:1000}
  //   // torch : 1
  // }
};

const overlay = document.getElementById("overlay");
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const promise = navigator.mediaDevices.getUserMedia(medias);

promise.then(successCallback)
       .catch(errorCallback);

function successCallback(stream) {
  video.srcObject = stream;
  requestAnimationFrame(draw);
}

function errorCallback(err) {
  console.log(err);
  alert(err);
}

// var speed = 100;
// var flg = true;

function draw() {
  // setTimeout(function() {
    // console.log(flg);
    // if(flg==true) overlay.style.visibility = "visible";
    // else overlay.style.visibility = "hidden";
    requestAnimationFrame(draw);
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.drawImage(video, 0, 0);
    // flg = !flg;
  // }, 1000/speed);
}