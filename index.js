const medias = {
  audio: false,
  video: true
  // video: {
  //   facingMode: {
  //     exact: "environment"
  //   }
  // }
};
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

var fps = 10;

function draw() {
  setTimeout(function() {
    requestAnimationFrame(draw);
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.drawImage(video, 0, 0);
  }, 1000/fps);
}