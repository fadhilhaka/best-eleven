function goalkeeper() {
  $('.goalkeeper').fadeIn(1000);
  $('.defender').fadeIn(1000);
  $('.midfielder').fadeIn(1000);
  $('.striker').fadeIn(1000);
  $("#position-goalkeeper").click(function(){
      $(this).data('clicked', true);
    });
  if($('#position-goalkeeper').data('clicked')) {
    $('.defender').hide();
    $('.midfielder').hide();
    $('.striker').hide();
  }
}

function defender() {
  $('.goalkeeper').fadeIn(1000);
  $('.defender').fadeIn(1000);
  $('.midfielder').fadeIn(1000);
  $('.striker').fadeIn(1000);
  $("#position-defender").click(function(){
      $(this).data('clicked', true);
  });
  if($('#position-defender').data('clicked')) {
    $('.goalkeeper').hide();
    $('.midfielder').hide();
    $('.striker').hide();
  }
}

function midfielder() {
  $('.goalkeeper').fadeIn(1000);
  $('.defender').fadeIn(1000);
  $('.midfielder').fadeIn(1000);
  $('.striker').fadeIn(1000);
  $("#position-midfielder").click(function(){
      $(this).data('clicked', true);
  });
  if($('#position-midfielder').data('clicked')) {
    $('.goalkeeper').hide();
    $('.defender').hide();
    $('.striker').hide();
  }
}

function striker() {
  $('.goalkeeper').fadeIn(1000);
  $('.defender').fadeIn(1000);
  $('.midfielder').fadeIn(1000);
  $('.striker').fadeIn(1000);
  $("#position-striker").click(function(){
      $(this).data('clicked', true);
  });
  if($('#position-striker').data('clicked')) {
    $('.goalkeeper').hide();
    $('.defender').hide();
    $('.midfielder').hide();
  }
}

function userPicksGK() {
  $('#simon-m').click(function(){
    $('#user-picks-gk').text('Simon Mignolet');
  });
  $('#loris-k').click(function(){
    $('#user-picks-gk').text('Loris Karius');
  });
}