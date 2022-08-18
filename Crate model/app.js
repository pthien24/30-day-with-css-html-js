var btnopen = document.querySelector('.open-modal-btn');
var modal = document.querySelector('.modal');
var iconclose = document.querySelector('.modal_header i');
var bntclose = document.querySelector('.modal_footer button');
  function togglemodal(e){
    modal.classList.toggle('hide')
  }

  btnopen.addEventListener('click',togglemodal);
  iconclose.addEventListener('click',togglemodal);
  bntclose.addEventListener('click',togglemodal);
  modal.addEventListener('click',function(e){
    if(e.target == e.currentTarget){
      togglemodal()
    }
  });



