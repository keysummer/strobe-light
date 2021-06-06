const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const medias = {audio : false, video : {
  facingMode : {
    exact : "environment"
  }
}},
const video = document.getElementById("video");
const promise = navigator.mediaDevices.getUserMedia(medias);

promise.then(successCallback)
       .then(errorCallback);

function successCallback(stream) {
  video.srcObject = stream;
  requestAnimationFrame(draw);
  // while(true){
  //   video.style.visibility="hidden";
  //   await _sleep(10);
  //   video.style.visibility="visible";
  //   await _sleep(10);
  // }
};

function errorCallback(err) {
  alert(err);
};

function draw() {
  video.style.visibility="visible";
  // video.style.visibility="hidden";
  //   await _sleep(10);
  //   video.style.visibility="visible";
  //   await _sleep(10);

  requestAnimationFrame(draw);
}