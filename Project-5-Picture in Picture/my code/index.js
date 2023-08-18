const buttonElement = document.getElementById("button");
const videoElement = document.getElementById("video");
async function VideoMediaStream() {
  try {
    const videoStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = videoStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {}
}
buttonElement.addEventListener("click", async () => {
  buttonElement.disabled = true;
  await videoElement.requestPictureInPicture();
  buttonElement.disabled = false;
});
VideoMediaStream();
