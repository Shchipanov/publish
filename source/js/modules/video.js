const video = () => {
  const gumVideo = document.querySelector('[data-video]');
  const videoPlayer = gumVideo.querySelector('[data-video-player]');
  const videoBtn = gumVideo.querySelector('[data-video-btn]');

  videoBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    gumVideo.classList.add('gum__video--active');
    videoPlayer.play();
    onYouTubeIframeAPIReady();
  });
};

function onYouTubeIframeAPIReady() {

  // eslint-disable-next-line no-undef
  const player = new YT.Player('video-placeholder', {
    videoId: '9TZXsZItgdw',

  });
  return player;
}


export {video};
