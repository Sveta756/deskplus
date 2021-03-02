const btns = document.querySelectorAll('.btn');
const overlay = document.querySelector('.overlay');
const modalClose = document.querySelector('.close');
const trigger = document.querySelector('.video__play');
const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api"; //работа ютуб апи для видео
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


let player;  //создание плеера
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: 'kSUxuo8WvGI'
    });
  }

  btns.forEach(elem => {  //свиталерт на кнопки
      elem.addEventListener('click',(e) => {
        e.preventDefault();
          Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          );
      });
  });


  //работа модального окна с видео 

  trigger.addEventListener('click', () => { 
    overlay.classList.add('block');
    player.playVideo();
    document.body.style.overflow = 'hidden';
  });

  modalClose.addEventListener('click', () => {
    player.stopVideo();
    overlay.classList.remove('block');
    document.body.style.overflow = '';
  });

  overlay.addEventListener('click', (e) => {  //клик по фону, но не модальное окно
    if (e.target === overlay) {
      player.stopVideo();
      overlay.classList.remove('block');
      document.body.style.overflow = '';
    }
  });

