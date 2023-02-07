const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream() {
    try{
        const MediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = MediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch(error){
        console.log('whoop, error here:', error);
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});

selectMediaStream();
