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
  // video.style.visibility="visible";
};

function errorCallback(err) {
  alert(err);
};