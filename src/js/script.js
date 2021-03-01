const btns = document.querySelectorAll('.btn');
const overlay = document.querySelector('.overlay');
const modalClose = document.querySelector('.modal__close');
const trigger = document.querySelector('.video__play');

  btns.forEach(elem => {
      elem.addEventListener('click',(e) => {
        e.preventDefault();
          Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          );
      });
  });

  trigger.addEventListener('click', () => {
    overlay.classList.add('block');
    document.body.style.overflow = 'hidden';
  });

  modalClose.addEventListener('click', () => {
    overlay.classList.remove('block');
    document.body.style.overflow = '';
  });

  overlay.addEventListener('click', (e) => {  //клик по фону, но не модальное окно
    if (e.target === overlay) {
      overlay.classList.remove('block');
      document.body.style.overflow = '';
    }
});
  
