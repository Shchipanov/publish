export const initVideo = function () {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let player = document.querySelector('[data-video-player]');
  let link = document.querySelector('[data-video-btn]');
  let boxVideo = document.querySelector('[data-video]');

  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    boxVideo.classList.add('gum__video--active');
    // eslint-disable-next-line no-new, no-undef
    new YT.Player(player, {
      videoId: '9TZXsZItgdw',
      events: {
        onReady: (e) => e.target.playVideo(),
      },
    });
    // evt.stopPropagation();
  });
};
