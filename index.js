const medias = {
  audio: false,
  // video: true,
  video: {
    facingMode: {
      exact: "environment"
    }
  }
};
const video = document.getElementById("video");
const promise = navigator.mediaDevices.getUserMedia(medias);

promise.then(successCallback)
       .then(errorCallback);

const wait = (sec) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, sec*1);
    //setTimeout(() => {reject(new Error("エラー！"))}, sec*1000);
  });
};

function successCallback(stream) {
  video.srcObject = stream;
  video.style.visibility="hidden";
  requestAnimationFrame(draw);
};

function errorCallback(err) {
  alert(err);
};

async function draw() {
  video.style.visibility="hidden";
  await wait(100);
  video.style.visibility="visible";
  await wait(100);
  requestAnimationFrame(draw);
}