const medias = {
    audio: false,
    video: {
      frameRate: 60,
      facingMode: {
        exact: "environment"
      }
    }
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
    track.applyConstraints({
      advanced: [{torch: true}]
    });
  }
  
  function errorCallback(err) {
    console.log(err);
    alert(err);
  }
  
  function draw() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.drawImage(video, 0, 0);
  
    requestAnimationFrame(draw);
  }