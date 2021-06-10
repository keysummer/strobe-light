const medias = {
  audio : false,
  video : {
    facingMode : "user", //フロントカメラ
    // facingMode : {exact:"environment"}, //リアカメラ
    frameRate : {ideal:60,max:60}
  }
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

var fps = 100;

function draw() {
  setTimeout(function() {
    overlay.style.visibility = "hidden";
    requestAnimationFrame(draw);
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.drawImage(video, 0, 0);
  }, 1000/fps);
  setTimeout(function() {
    overlay.style.visibility = "visible";
    requestAnimationFrame(draw);
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.drawImage(video, 0, 0);
  }, 1000/fps);
}