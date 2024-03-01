const videoMedia = document.getElementById('video');
const btn = document.getElementById('btn');

async function selectMedia() {
    try {
        const MediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoMedia.srcObject = MediaStream;
        videoMedia.onloadedmetadata = () => {
            videoMedia.play();
        }
    }
    catch (error) {

    }
}

btn.addEventListener('click', async () => {
    btn.disabled = true;
    await videoMedia.requestPictureInPicture();
    btn.disabled = false;
});


selectMedia();