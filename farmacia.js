   var botones = document.querySelectorAll('.btn-info');
    botones.forEach(function(b){
      b.addEventListener('click', function(){
        var card = b.closest('.card');
        var info = card.querySelector('.info');
        if(!info) return;
        info.style.display = (info.style.display === 'block') ? 'none' : 'block';
      });
    });