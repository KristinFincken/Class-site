for (i = 0; i < 12; i++) {
  $('.soldier').append('<div class="disc-' + i + '" style="transform: translateZ(-' + i + 'px)"</div>');
}

$('.disc-0').addClass('head');
$('.disc-11').addClass('back');